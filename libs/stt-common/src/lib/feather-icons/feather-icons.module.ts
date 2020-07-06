import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Home,
  Map,
  Book,
  Users,
  Radio,
  Truck,
  AlertCircle,
  MessageCircle,
  Info,
  Rss,
  Plus,
  Search,
  UploadCloud,
  Edit2,
  User,
  UserPlus,
  Key,
  Trash,
  Wifi,
  MapPin,
  Calendar,
  CheckCircle,
  GitPullRequest,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Home,
  Map,
  Book,
  Users,
  Radio,
  Truck,
  AlertCircle,
  MessageCircle,
  Info,
  Rss,
  Plus,
  Search,
  UploadCloud,
  Edit2,
  User,
  UserPlus,
  Key,
  Trash,
  Wifi,
  MapPin,
  Calendar,
  CheckCircle,
  GitPullRequest,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class FeatherIconsModule {}

// NOTES:
// 1. We add FeatherModule to the 'exports', since the <i-feather> component will be used in templates of parent module
// 2. Don't forget to pick some icons using FeatherModule.pick({ ... })
