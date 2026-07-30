function FeatureCard({
       title,
       description,
       icon: Icon,
       color,
       text,
}) {
       return (
              <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                     <div
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
                     >
                            {Icon ? (
                                   <Icon className={`text-3xl ${text}`} />
                            ) : (
                                   <span className="text-2xl">⭐</span>
                            )}
                     </div>

                     <h3 className="mt-6 text-xl font-semibold text-gray-900">
                            {title}
                     </h3>

                     <p className="mt-3 text-gray-500 leading-7">
                            {description}
                     </p>
              </div>
       );
}

export default FeatureCard;