import { FaPhone, FaUser, FaUserFriends } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'
import { RiContactsBookFill } from 'react-icons/ri'

import { EditState } from '@/lib/types/provider'
import { ProviderDetails, ProviderProfile } from '@/lib/types/provider'
export function transformProviderProfile(
  data: ProviderProfile,
): ProviderDetails {
  return [
    {
      label: 'Name & Title',
      key: 'name',
      value: { firstName: data.firstName ?? '', lastName: data.lastName ?? '' },
      icon: FaUser,
    },
    {
      label: 'Phone',
      key: 'phone',
      value: data.phone,
      icon: FaPhone,
    },
    {
      label: 'Email',
      key: 'email',
      value: data.email ?? '(no email)',
      icon: MdAlternateEmail,
    },
    {
      label: 'Address',
      key: 'address',
      value: {
        ...data.address,
      },
      icon: FaHouse,
    },
    {
      label: 'Emergency Contact',
      key: 'emergencyContact',
      value: {
        firstName: data.emergencyContact?.firstName ?? '',
        lastName: data.emergencyContact?.lastName ?? '',
        phone: data.emergencyContact?.phone ?? '',
      },
      icon: RiContactsBookFill,
    },
    {
      label: 'Are you accepting new patients?',
      key: 'newPatients',
      value: true,
      icon: FaUserFriends,
    },
  ]
}

export function getFieldValue<T>(
  key: string,
  editState: EditState,
  originalValue: T,
): T {
  if (editState.editingKey === key && editState.editableValue !== null) {
    // Type guards for more specific types
    if (
      typeof originalValue === 'string' &&
      typeof editState.editableValue === 'string'
    ) {
      return editState.editableValue as T
    }

    if (
      typeof originalValue === 'boolean' &&
      typeof editState.editableValue === 'boolean'
    ) {
      return editState.editableValue as T
    }

    if (
      typeof originalValue === 'object' &&
      typeof editState.editableValue === 'object'
    ) {
      return editState.editableValue as T
    }
  }

  return originalValue
}
