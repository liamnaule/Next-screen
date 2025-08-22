const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-muted-200 text-muted-800 hover:bg-muted-300',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button