import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ChevronLeft,
  Star,
  Camera,
  X,
  ThumbsUp,
  CheckCircle,
  Upload,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProductReviewScreen() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [recommend, setRecommend] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const product = {
    id: 1,
    name: "Smart Watch Pro",
    image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=400",
    orderId: orderId || "ORD123456",
    orderDate: "Mar 1, 2026",
    price: 4999,
  };

  const reviewQuestions = [
    { id: "quality", label: "Product Quality", rating: 0 },
    { id: "value", label: "Value for Money", rating: 0 },
    { id: "delivery", label: "Delivery Experience", rating: 0 },
  ];

  const [specificRatings, setSpecificRatings] = useState(
    reviewQuestions.reduce((acc, q) => ({ ...acc, [q.id]: 0 }), {})
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, upload to server and get URLs
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedImages([...uploadedImages, ...newImages].slice(0, 5));
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, idx) => idx !== index));
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    if (review.trim().length < 10) {
      alert("Please write a detailed review (at least 10 characters)");
      return;
    }
    // Submit review to backend
    setSubmitted(true);
    setTimeout(() => {
      navigate("/profile/orders");
    }, 2500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center max-w-md w-full shadow-xl">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            Your review has been submitted successfully
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/profile/orders")}
              className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              View Orders
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Rate & Review</h1>
            <p className="text-sm opacity-90">Order: {product.orderId}</p>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Product Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex gap-4">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Delivered on {product.orderDate}
              </p>
              <p className="text-orange-500 font-bold">₹{product.price}</p>
            </div>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-bold mb-2 text-center text-gray-700">
            How would you rate this product?
          </h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            Tap to rate
          </p>
          <div className="flex justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Star
                  className={`w-12 h-12 ${
                    star <= (hoverRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-sm font-semibold text-orange-600">
              {rating === 5
                ? "Excellent!"
                : rating === 4
                ? "Very Good!"
                : rating === 3
                ? "Good"
                : rating === 2
                ? "Fair"
                : "Poor"}
            </p>
          )}
        </div>

        {/* Specific Ratings */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-bold mb-4 text-gray-700">Detailed Rating</h3>
          <div className="space-y-4">
            {reviewQuestions.map((question) => (
              <div key={question.id}>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {question.label}
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() =>
                        setSpecificRatings({
                          ...specificRatings,
                          [question.id]: star,
                        })
                      }
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (specificRatings[question.id] || 0)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Title */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block font-bold mb-2 text-gray-700">
            Review Title
          </label>
          <input
            type="text"
            placeholder="Sum up your experience..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            maxLength={100}
          />
          <p className="text-xs text-gray-500 mt-1 text-right">
            {title.length}/100
          </p>
        </div>

        {/* Review Text */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block font-bold mb-2 text-gray-700">
            Write Your Review
          </label>
          <textarea
            placeholder="Tell us what you liked or disliked about this product..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={6}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            maxLength={1000}
          />
          <p className="text-xs text-gray-500 mt-1 text-right">
            {review.length}/1000
          </p>
        </div>

        {/* Upload Photos */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-bold mb-2 text-gray-700">Add Photos</h3>
          <p className="text-sm text-gray-500 mb-3">
            Help others by sharing photos of the product (Max 5)
          </p>
          <div className="grid grid-cols-5 gap-2">
            {uploadedImages.map((image, idx) => (
              <div key={idx} className="relative aspect-square">
                <img
                  src={image}
                  alt={`Upload ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => removeImage(idx)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {uploadedImages.length < 5 && (
              <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Camera className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">Add</span>
              </label>
            )}
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 text-orange-500" />
              <div>
                <p className="font-bold text-gray-700">
                  Would you recommend this?
                </p>
                <p className="text-sm text-gray-500">
                  Help others make better decisions
                </p>
              </div>
            </div>
            <button
              onClick={() => setRecommend(!recommend)}
              className={`w-14 h-8 rounded-full transition-colors ${
                recommend ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                  recommend ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="sticky bottom-0 bg-white p-4 rounded-t-2xl shadow-lg -mx-4">
          <button
            onClick={handleSubmit}
            disabled={rating === 0 || review.trim().length < 10}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
              rating === 0 || review.trim().length < 10
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg"
            }`}
          >
            Submit Review
          </button>
          {(rating === 0 || review.trim().length < 10) && (
            <p className="text-xs text-center text-red-500 mt-2">
              {rating === 0
                ? "Please select a rating"
                : "Review must be at least 10 characters"}
            </p>
          )}
        </div>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
