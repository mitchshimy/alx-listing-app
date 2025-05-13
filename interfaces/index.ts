// User Interface
export interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  avatarUrl?: string;
}

// Auth Response
export interface IAuthResponse {
  token: string;
  user: IUser;
}

// Card Props (for a reusable Card component)
export interface ICardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

// Button Props
export interface IButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// API Error
export interface IApiError {
  message: string;
  statusCode?: number;
}

// Generic Children Props (for wrapping components)
export interface IChildrenProps {
  children: React.ReactNode;
}
