// https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#delete_on_creation_error Volume#delete_on_creation_error}
  */
  readonly deleteOnCreationError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#id Volume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#network Volume#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#pool_id Volume#pool_id}
  */
  readonly poolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#protocol_types Volume#protocol_types}
  */
  readonly protocolTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#region Volume#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#regional_ha Volume#regional_ha}
  */
  readonly regionalHa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#security_style Volume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#service_level Volume#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#shared_vpc_project_number Volume#shared_vpc_project_number}
  */
  readonly sharedVpcProjectNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#size Volume#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#smb_share_settings Volume#smb_share_settings}
  */
  readonly smbShareSettings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#snapshot_directory Volume#snapshot_directory}
  */
  readonly snapshotDirectory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#snapshot_id Volume#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#storage_class Volume#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#type_dp Volume#type_dp}
  */
  readonly typeDp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#unix_permissions Volume#unix_permissions}
  */
  readonly unixPermissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#volume_path Volume#volume_path}
  */
  readonly volumePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#zone Volume#zone}
  */
  readonly zone?: string;
  /**
  * billing_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#billing_label Volume#billing_label}
  */
  readonly billingLabel?: VolumeBillingLabel[] | cdktf.IResolvable;
  /**
  * export_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#export_policy Volume#export_policy}
  */
  readonly exportPolicy?: VolumeExportPolicy[] | cdktf.IResolvable;
  /**
  * mount_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#mount_points Volume#mount_points}
  */
  readonly mountPoints?: VolumeMountPoints[] | cdktf.IResolvable;
  /**
  * snapshot_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#snapshot_policy Volume#snapshot_policy}
  */
  readonly snapshotPolicy?: VolumeSnapshotPolicy[] | cdktf.IResolvable;
}
export interface VolumeBillingLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#key Volume#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#value Volume#value}
  */
  readonly value: string;
}

export function volumeBillingLabelToTerraform(struct?: VolumeBillingLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function volumeBillingLabelToHclTerraform(struct?: VolumeBillingLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeBillingLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeBillingLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeBillingLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VolumeBillingLabelList extends cdktf.ComplexList {
  public internalValue? : VolumeBillingLabel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeBillingLabelOutputReference {
    return new VolumeBillingLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeExportPolicyRuleNfsv3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#checked Volume#checked}
  */
  readonly checked?: boolean | cdktf.IResolvable;
}

export function volumeExportPolicyRuleNfsv3ToTerraform(struct?: VolumeExportPolicyRuleNfsv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checked: cdktf.booleanToTerraform(struct!.checked),
  }
}


export function volumeExportPolicyRuleNfsv3ToHclTerraform(struct?: VolumeExportPolicyRuleNfsv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checked: {
      value: cdktf.booleanToHclTerraform(struct!.checked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeExportPolicyRuleNfsv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeExportPolicyRuleNfsv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checked !== undefined) {
      hasAnyValues = true;
      internalValueResult.checked = this._checked;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeExportPolicyRuleNfsv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checked = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checked = value.checked;
    }
  }

  // checked - computed: false, optional: true, required: false
  private _checked?: boolean | cdktf.IResolvable; 
  public get checked() {
    return this.getBooleanAttribute('checked');
  }
  public set checked(value: boolean | cdktf.IResolvable) {
    this._checked = value;
  }
  public resetChecked() {
    this._checked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkedInput() {
    return this._checked;
  }
}

export class VolumeExportPolicyRuleNfsv3List extends cdktf.ComplexList {
  public internalValue? : VolumeExportPolicyRuleNfsv3[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeExportPolicyRuleNfsv3OutputReference {
    return new VolumeExportPolicyRuleNfsv3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeExportPolicyRuleNfsv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#checked Volume#checked}
  */
  readonly checked?: boolean | cdktf.IResolvable;
}

export function volumeExportPolicyRuleNfsv4ToTerraform(struct?: VolumeExportPolicyRuleNfsv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checked: cdktf.booleanToTerraform(struct!.checked),
  }
}


export function volumeExportPolicyRuleNfsv4ToHclTerraform(struct?: VolumeExportPolicyRuleNfsv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checked: {
      value: cdktf.booleanToHclTerraform(struct!.checked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeExportPolicyRuleNfsv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeExportPolicyRuleNfsv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checked !== undefined) {
      hasAnyValues = true;
      internalValueResult.checked = this._checked;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeExportPolicyRuleNfsv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checked = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checked = value.checked;
    }
  }

  // checked - computed: false, optional: true, required: false
  private _checked?: boolean | cdktf.IResolvable; 
  public get checked() {
    return this.getBooleanAttribute('checked');
  }
  public set checked(value: boolean | cdktf.IResolvable) {
    this._checked = value;
  }
  public resetChecked() {
    this._checked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkedInput() {
    return this._checked;
  }
}

export class VolumeExportPolicyRuleNfsv4List extends cdktf.ComplexList {
  public internalValue? : VolumeExportPolicyRuleNfsv4[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeExportPolicyRuleNfsv4OutputReference {
    return new VolumeExportPolicyRuleNfsv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeExportPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#access Volume#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#allowed_clients Volume#allowed_clients}
  */
  readonly allowedClients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#has_root_access Volume#has_root_access}
  */
  readonly hasRootAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#kerberos5_readonly Volume#kerberos5_readonly}
  */
  readonly kerberos5Readonly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#kerberos5_readwrite Volume#kerberos5_readwrite}
  */
  readonly kerberos5Readwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#kerberos5i_readonly Volume#kerberos5i_readonly}
  */
  readonly kerberos5IReadonly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#kerberos5i_readwrite Volume#kerberos5i_readwrite}
  */
  readonly kerberos5IReadwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#kerberos5p_readonly Volume#kerberos5p_readonly}
  */
  readonly kerberos5PReadonly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#kerberos5p_readwrite Volume#kerberos5p_readwrite}
  */
  readonly kerberos5PReadwrite?: boolean | cdktf.IResolvable;
  /**
  * nfsv3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#nfsv3 Volume#nfsv3}
  */
  readonly nfsv3?: VolumeExportPolicyRuleNfsv3[] | cdktf.IResolvable;
  /**
  * nfsv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#nfsv4 Volume#nfsv4}
  */
  readonly nfsv4?: VolumeExportPolicyRuleNfsv4[] | cdktf.IResolvable;
}

export function volumeExportPolicyRuleToTerraform(struct?: VolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    allowed_clients: cdktf.stringToTerraform(struct!.allowedClients),
    has_root_access: cdktf.stringToTerraform(struct!.hasRootAccess),
    kerberos5_readonly: cdktf.booleanToTerraform(struct!.kerberos5Readonly),
    kerberos5_readwrite: cdktf.booleanToTerraform(struct!.kerberos5Readwrite),
    kerberos5i_readonly: cdktf.booleanToTerraform(struct!.kerberos5IReadonly),
    kerberos5i_readwrite: cdktf.booleanToTerraform(struct!.kerberos5IReadwrite),
    kerberos5p_readonly: cdktf.booleanToTerraform(struct!.kerberos5PReadonly),
    kerberos5p_readwrite: cdktf.booleanToTerraform(struct!.kerberos5PReadwrite),
    nfsv3: cdktf.listMapper(volumeExportPolicyRuleNfsv3ToTerraform, true)(struct!.nfsv3),
    nfsv4: cdktf.listMapper(volumeExportPolicyRuleNfsv4ToTerraform, true)(struct!.nfsv4),
  }
}


export function volumeExportPolicyRuleToHclTerraform(struct?: VolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_clients: {
      value: cdktf.stringToHclTerraform(struct!.allowedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_root_access: {
      value: cdktf.stringToHclTerraform(struct!.hasRootAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos5_readonly: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5Readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5_readwrite: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5Readwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5i_readonly: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5IReadonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5i_readwrite: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5IReadwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5p_readonly: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5PReadonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5p_readwrite: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5PReadwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfsv3: {
      value: cdktf.listMapperHcl(volumeExportPolicyRuleNfsv3ToHclTerraform, true)(struct!.nfsv3),
      isBlock: true,
      type: "set",
      storageClassType: "VolumeExportPolicyRuleNfsv3List",
    },
    nfsv4: {
      value: cdktf.listMapperHcl(volumeExportPolicyRuleNfsv4ToHclTerraform, true)(struct!.nfsv4),
      isBlock: true,
      type: "set",
      storageClassType: "VolumeExportPolicyRuleNfsv4List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeExportPolicyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeExportPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._hasRootAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasRootAccess = this._hasRootAccess;
    }
    if (this._kerberos5Readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5Readonly = this._kerberos5Readonly;
    }
    if (this._kerberos5Readwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5Readwrite = this._kerberos5Readwrite;
    }
    if (this._kerberos5IReadonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5IReadonly = this._kerberos5IReadonly;
    }
    if (this._kerberos5IReadwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5IReadwrite = this._kerberos5IReadwrite;
    }
    if (this._kerberos5PReadonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5PReadonly = this._kerberos5PReadonly;
    }
    if (this._kerberos5PReadwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5PReadwrite = this._kerberos5PReadwrite;
    }
    if (this._nfsv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv3 = this._nfsv3?.internalValue;
    }
    if (this._nfsv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv4 = this._nfsv4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeExportPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._allowedClients = undefined;
      this._hasRootAccess = undefined;
      this._kerberos5Readonly = undefined;
      this._kerberos5Readwrite = undefined;
      this._kerberos5IReadonly = undefined;
      this._kerberos5IReadwrite = undefined;
      this._kerberos5PReadonly = undefined;
      this._kerberos5PReadwrite = undefined;
      this._nfsv3.internalValue = undefined;
      this._nfsv4.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._allowedClients = value.allowedClients;
      this._hasRootAccess = value.hasRootAccess;
      this._kerberos5Readonly = value.kerberos5Readonly;
      this._kerberos5Readwrite = value.kerberos5Readwrite;
      this._kerberos5IReadonly = value.kerberos5IReadonly;
      this._kerberos5IReadwrite = value.kerberos5IReadwrite;
      this._kerberos5PReadonly = value.kerberos5PReadonly;
      this._kerberos5PReadwrite = value.kerberos5PReadwrite;
      this._nfsv3.internalValue = value.nfsv3;
      this._nfsv4.internalValue = value.nfsv4;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string; 
  public get allowedClients() {
    return this.getStringAttribute('allowed_clients');
  }
  public set allowedClients(value: string) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // has_root_access - computed: false, optional: true, required: false
  private _hasRootAccess?: string; 
  public get hasRootAccess() {
    return this.getStringAttribute('has_root_access');
  }
  public set hasRootAccess(value: string) {
    this._hasRootAccess = value;
  }
  public resetHasRootAccess() {
    this._hasRootAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasRootAccessInput() {
    return this._hasRootAccess;
  }

  // kerberos5_readonly - computed: false, optional: true, required: false
  private _kerberos5Readonly?: boolean | cdktf.IResolvable; 
  public get kerberos5Readonly() {
    return this.getBooleanAttribute('kerberos5_readonly');
  }
  public set kerberos5Readonly(value: boolean | cdktf.IResolvable) {
    this._kerberos5Readonly = value;
  }
  public resetKerberos5Readonly() {
    this._kerberos5Readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5ReadonlyInput() {
    return this._kerberos5Readonly;
  }

  // kerberos5_readwrite - computed: false, optional: true, required: false
  private _kerberos5Readwrite?: boolean | cdktf.IResolvable; 
  public get kerberos5Readwrite() {
    return this.getBooleanAttribute('kerberos5_readwrite');
  }
  public set kerberos5Readwrite(value: boolean | cdktf.IResolvable) {
    this._kerberos5Readwrite = value;
  }
  public resetKerberos5Readwrite() {
    this._kerberos5Readwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5ReadwriteInput() {
    return this._kerberos5Readwrite;
  }

  // kerberos5i_readonly - computed: false, optional: true, required: false
  private _kerberos5IReadonly?: boolean | cdktf.IResolvable; 
  public get kerberos5IReadonly() {
    return this.getBooleanAttribute('kerberos5i_readonly');
  }
  public set kerberos5IReadonly(value: boolean | cdktf.IResolvable) {
    this._kerberos5IReadonly = value;
  }
  public resetKerberos5IReadonly() {
    this._kerberos5IReadonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5IReadonlyInput() {
    return this._kerberos5IReadonly;
  }

  // kerberos5i_readwrite - computed: false, optional: true, required: false
  private _kerberos5IReadwrite?: boolean | cdktf.IResolvable; 
  public get kerberos5IReadwrite() {
    return this.getBooleanAttribute('kerberos5i_readwrite');
  }
  public set kerberos5IReadwrite(value: boolean | cdktf.IResolvable) {
    this._kerberos5IReadwrite = value;
  }
  public resetKerberos5IReadwrite() {
    this._kerberos5IReadwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5IReadwriteInput() {
    return this._kerberos5IReadwrite;
  }

  // kerberos5p_readonly - computed: false, optional: true, required: false
  private _kerberos5PReadonly?: boolean | cdktf.IResolvable; 
  public get kerberos5PReadonly() {
    return this.getBooleanAttribute('kerberos5p_readonly');
  }
  public set kerberos5PReadonly(value: boolean | cdktf.IResolvable) {
    this._kerberos5PReadonly = value;
  }
  public resetKerberos5PReadonly() {
    this._kerberos5PReadonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5PReadonlyInput() {
    return this._kerberos5PReadonly;
  }

  // kerberos5p_readwrite - computed: false, optional: true, required: false
  private _kerberos5PReadwrite?: boolean | cdktf.IResolvable; 
  public get kerberos5PReadwrite() {
    return this.getBooleanAttribute('kerberos5p_readwrite');
  }
  public set kerberos5PReadwrite(value: boolean | cdktf.IResolvable) {
    this._kerberos5PReadwrite = value;
  }
  public resetKerberos5PReadwrite() {
    this._kerberos5PReadwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5PReadwriteInput() {
    return this._kerberos5PReadwrite;
  }

  // nfsv3 - computed: false, optional: true, required: false
  private _nfsv3 = new VolumeExportPolicyRuleNfsv3List(this, "nfsv3", true);
  public get nfsv3() {
    return this._nfsv3;
  }
  public putNfsv3(value: VolumeExportPolicyRuleNfsv3[] | cdktf.IResolvable) {
    this._nfsv3.internalValue = value;
  }
  public resetNfsv3() {
    this._nfsv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3Input() {
    return this._nfsv3.internalValue;
  }

  // nfsv4 - computed: false, optional: true, required: false
  private _nfsv4 = new VolumeExportPolicyRuleNfsv4List(this, "nfsv4", true);
  public get nfsv4() {
    return this._nfsv4;
  }
  public putNfsv4(value: VolumeExportPolicyRuleNfsv4[] | cdktf.IResolvable) {
    this._nfsv4.internalValue = value;
  }
  public resetNfsv4() {
    this._nfsv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4Input() {
    return this._nfsv4.internalValue;
  }
}

export class VolumeExportPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : VolumeExportPolicyRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeExportPolicyRuleOutputReference {
    return new VolumeExportPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeExportPolicy {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#rule Volume#rule}
  */
  readonly rule?: VolumeExportPolicyRule[] | cdktf.IResolvable;
}

export function volumeExportPolicyToTerraform(struct?: VolumeExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(volumeExportPolicyRuleToTerraform, true)(struct!.rule),
  }
}


export function volumeExportPolicyToHclTerraform(struct?: VolumeExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(volumeExportPolicyRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeExportPolicyRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeExportPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeExportPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeExportPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new VolumeExportPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: VolumeExportPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class VolumeExportPolicyList extends cdktf.ComplexList {
  public internalValue? : VolumeExportPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeExportPolicyOutputReference {
    return new VolumeExportPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeMountPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#export Volume#export}
  */
  readonly export?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#protocol_type Volume#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#server Volume#server}
  */
  readonly server?: string;
}

export function volumeMountPointsToTerraform(struct?: VolumeMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export: cdktf.stringToTerraform(struct!.export),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function volumeMountPointsToHclTerraform(struct?: VolumeMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export: {
      value: cdktf.stringToHclTerraform(struct!.export),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeMountPointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeMountPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._export !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeMountPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._export = undefined;
      this._protocolType = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._export = value.export;
      this._protocolType = value.protocolType;
      this._server = value.server;
    }
  }

  // export - computed: true, optional: true, required: false
  private _export?: string; 
  public get export() {
    return this.getStringAttribute('export');
  }
  public set export(value: string) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // protocol_type - computed: true, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class VolumeMountPointsList extends cdktf.ComplexList {
  public internalValue? : VolumeMountPoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeMountPointsOutputReference {
    return new VolumeMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSnapshotPolicyDailySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#hour Volume#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#minute Volume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#snapshots_to_keep Volume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function volumeSnapshotPolicyDailyScheduleToTerraform(struct?: VolumeSnapshotPolicyDailySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function volumeSnapshotPolicyDailyScheduleToHclTerraform(struct?: VolumeSnapshotPolicyDailySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnapshotPolicyDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSnapshotPolicyDailySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnapshotPolicyDailySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class VolumeSnapshotPolicyDailyScheduleList extends cdktf.ComplexList {
  public internalValue? : VolumeSnapshotPolicyDailySchedule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeSnapshotPolicyDailyScheduleOutputReference {
    return new VolumeSnapshotPolicyDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSnapshotPolicyHourlySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#minute Volume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#snapshots_to_keep Volume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function volumeSnapshotPolicyHourlyScheduleToTerraform(struct?: VolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function volumeSnapshotPolicyHourlyScheduleToHclTerraform(struct?: VolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnapshotPolicyHourlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class VolumeSnapshotPolicyHourlyScheduleList extends cdktf.ComplexList {
  public internalValue? : VolumeSnapshotPolicyHourlySchedule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeSnapshotPolicyHourlyScheduleOutputReference {
    return new VolumeSnapshotPolicyHourlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSnapshotPolicyMonthlySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#days_of_month Volume#days_of_month}
  */
  readonly daysOfMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#hour Volume#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#minute Volume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#snapshots_to_keep Volume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function volumeSnapshotPolicyMonthlyScheduleToTerraform(struct?: VolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.stringToTerraform(struct!.daysOfMonth),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function volumeSnapshotPolicyMonthlyScheduleToHclTerraform(struct?: VolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month: {
      value: cdktf.stringToHclTerraform(struct!.daysOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnapshotPolicyMonthlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfMonth = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfMonth = value.daysOfMonth;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth?: string; 
  public get daysOfMonth() {
    return this.getStringAttribute('days_of_month');
  }
  public set daysOfMonth(value: string) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class VolumeSnapshotPolicyMonthlyScheduleList extends cdktf.ComplexList {
  public internalValue? : VolumeSnapshotPolicyMonthlySchedule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeSnapshotPolicyMonthlyScheduleOutputReference {
    return new VolumeSnapshotPolicyMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSnapshotPolicyWeeklySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#day Volume#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#hour Volume#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#minute Volume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#snapshots_to_keep Volume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function volumeSnapshotPolicyWeeklyScheduleToTerraform(struct?: VolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function volumeSnapshotPolicyWeeklyScheduleToHclTerraform(struct?: VolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnapshotPolicyWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class VolumeSnapshotPolicyWeeklyScheduleList extends cdktf.ComplexList {
  public internalValue? : VolumeSnapshotPolicyWeeklySchedule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeSnapshotPolicyWeeklyScheduleOutputReference {
    return new VolumeSnapshotPolicyWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSnapshotPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#enabled Volume#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#daily_schedule Volume#daily_schedule}
  */
  readonly dailySchedule?: VolumeSnapshotPolicyDailySchedule[] | cdktf.IResolvable;
  /**
  * hourly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#hourly_schedule Volume#hourly_schedule}
  */
  readonly hourlySchedule?: VolumeSnapshotPolicyHourlySchedule[] | cdktf.IResolvable;
  /**
  * monthly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#monthly_schedule Volume#monthly_schedule}
  */
  readonly monthlySchedule?: VolumeSnapshotPolicyMonthlySchedule[] | cdktf.IResolvable;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#weekly_schedule Volume#weekly_schedule}
  */
  readonly weeklySchedule?: VolumeSnapshotPolicyWeeklySchedule[] | cdktf.IResolvable;
}

export function volumeSnapshotPolicyToTerraform(struct?: VolumeSnapshotPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    daily_schedule: cdktf.listMapper(volumeSnapshotPolicyDailyScheduleToTerraform, true)(struct!.dailySchedule),
    hourly_schedule: cdktf.listMapper(volumeSnapshotPolicyHourlyScheduleToTerraform, true)(struct!.hourlySchedule),
    monthly_schedule: cdktf.listMapper(volumeSnapshotPolicyMonthlyScheduleToTerraform, true)(struct!.monthlySchedule),
    weekly_schedule: cdktf.listMapper(volumeSnapshotPolicyWeeklyScheduleToTerraform, true)(struct!.weeklySchedule),
  }
}


export function volumeSnapshotPolicyToHclTerraform(struct?: VolumeSnapshotPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    daily_schedule: {
      value: cdktf.listMapperHcl(volumeSnapshotPolicyDailyScheduleToHclTerraform, true)(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeSnapshotPolicyDailyScheduleList",
    },
    hourly_schedule: {
      value: cdktf.listMapperHcl(volumeSnapshotPolicyHourlyScheduleToHclTerraform, true)(struct!.hourlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeSnapshotPolicyHourlyScheduleList",
    },
    monthly_schedule: {
      value: cdktf.listMapperHcl(volumeSnapshotPolicyMonthlyScheduleToHclTerraform, true)(struct!.monthlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeSnapshotPolicyMonthlyScheduleList",
    },
    weekly_schedule: {
      value: cdktf.listMapperHcl(volumeSnapshotPolicyWeeklyScheduleToHclTerraform, true)(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeSnapshotPolicyWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnapshotPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSnapshotPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._hourlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourlySchedule = this._hourlySchedule?.internalValue;
    }
    if (this._monthlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnapshotPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._dailySchedule.internalValue = undefined;
      this._hourlySchedule.internalValue = undefined;
      this._monthlySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._hourlySchedule.internalValue = value.hourlySchedule;
      this._monthlySchedule.internalValue = value.monthlySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new VolumeSnapshotPolicyDailyScheduleList(this, "daily_schedule", false);
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: VolumeSnapshotPolicyDailySchedule[] | cdktf.IResolvable) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // hourly_schedule - computed: false, optional: true, required: false
  private _hourlySchedule = new VolumeSnapshotPolicyHourlyScheduleList(this, "hourly_schedule", false);
  public get hourlySchedule() {
    return this._hourlySchedule;
  }
  public putHourlySchedule(value: VolumeSnapshotPolicyHourlySchedule[] | cdktf.IResolvable) {
    this._hourlySchedule.internalValue = value;
  }
  public resetHourlySchedule() {
    this._hourlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyScheduleInput() {
    return this._hourlySchedule.internalValue;
  }

  // monthly_schedule - computed: false, optional: true, required: false
  private _monthlySchedule = new VolumeSnapshotPolicyMonthlyScheduleList(this, "monthly_schedule", false);
  public get monthlySchedule() {
    return this._monthlySchedule;
  }
  public putMonthlySchedule(value: VolumeSnapshotPolicyMonthlySchedule[] | cdktf.IResolvable) {
    this._monthlySchedule.internalValue = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new VolumeSnapshotPolicyWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: VolumeSnapshotPolicyWeeklySchedule[] | cdktf.IResolvable) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}

export class VolumeSnapshotPolicyList extends cdktf.ComplexList {
  public internalValue? : VolumeSnapshotPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VolumeSnapshotPolicyOutputReference {
    return new VolumeSnapshotPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume netapp-gcp_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-gcp_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-gcp_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume netapp-gcp_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-gcp_volume',
      terraformGeneratorMetadata: {
        providerName: 'netapp-gcp',
        providerVersion: '24.6.0',
        providerVersionConstraint: '24.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteOnCreationError = config.deleteOnCreationError;
    this._id = config.id;
    this._name = config.name;
    this._network = config.network;
    this._poolId = config.poolId;
    this._protocolTypes = config.protocolTypes;
    this._region = config.region;
    this._regionalHa = config.regionalHa;
    this._securityStyle = config.securityStyle;
    this._serviceLevel = config.serviceLevel;
    this._sharedVpcProjectNumber = config.sharedVpcProjectNumber;
    this._size = config.size;
    this._smbShareSettings = config.smbShareSettings;
    this._snapshotDirectory = config.snapshotDirectory;
    this._snapshotId = config.snapshotId;
    this._storageClass = config.storageClass;
    this._typeDp = config.typeDp;
    this._unixPermissions = config.unixPermissions;
    this._volumePath = config.volumePath;
    this._zone = config.zone;
    this._billingLabel.internalValue = config.billingLabel;
    this._exportPolicy.internalValue = config.exportPolicy;
    this._mountPoints.internalValue = config.mountPoints;
    this._snapshotPolicy.internalValue = config.snapshotPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_on_creation_error - computed: false, optional: true, required: false
  private _deleteOnCreationError?: boolean | cdktf.IResolvable; 
  public get deleteOnCreationError() {
    return this.getBooleanAttribute('delete_on_creation_error');
  }
  public set deleteOnCreationError(value: boolean | cdktf.IResolvable) {
    this._deleteOnCreationError = value;
  }
  public resetDeleteOnCreationError() {
    this._deleteOnCreationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnCreationErrorInput() {
    return this._deleteOnCreationError;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // protocol_types - computed: false, optional: false, required: true
  private _protocolTypes?: string[]; 
  public get protocolTypes() {
    return this.getListAttribute('protocol_types');
  }
  public set protocolTypes(value: string[]) {
    this._protocolTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypesInput() {
    return this._protocolTypes;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // regional_ha - computed: false, optional: true, required: false
  private _regionalHa?: boolean | cdktf.IResolvable; 
  public get regionalHa() {
    return this.getBooleanAttribute('regional_ha');
  }
  public set regionalHa(value: boolean | cdktf.IResolvable) {
    this._regionalHa = value;
  }
  public resetRegionalHa() {
    this._regionalHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalHaInput() {
    return this._regionalHa;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // service_level - computed: false, optional: true, required: false
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  public resetServiceLevel() {
    this._serviceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // shared_vpc_project_number - computed: false, optional: true, required: false
  private _sharedVpcProjectNumber?: string; 
  public get sharedVpcProjectNumber() {
    return this.getStringAttribute('shared_vpc_project_number');
  }
  public set sharedVpcProjectNumber(value: string) {
    this._sharedVpcProjectNumber = value;
  }
  public resetSharedVpcProjectNumber() {
    this._sharedVpcProjectNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedVpcProjectNumberInput() {
    return this._sharedVpcProjectNumber;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // smb_share_settings - computed: false, optional: true, required: false
  private _smbShareSettings?: string[]; 
  public get smbShareSettings() {
    return cdktf.Fn.tolist(this.getListAttribute('smb_share_settings'));
  }
  public set smbShareSettings(value: string[]) {
    this._smbShareSettings = value;
  }
  public resetSmbShareSettings() {
    this._smbShareSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbShareSettingsInput() {
    return this._smbShareSettings;
  }

  // snapshot_directory - computed: false, optional: true, required: false
  private _snapshotDirectory?: boolean | cdktf.IResolvable; 
  public get snapshotDirectory() {
    return this.getBooleanAttribute('snapshot_directory');
  }
  public set snapshotDirectory(value: boolean | cdktf.IResolvable) {
    this._snapshotDirectory = value;
  }
  public resetSnapshotDirectory() {
    this._snapshotDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirectoryInput() {
    return this._snapshotDirectory;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // type_dp - computed: false, optional: true, required: false
  private _typeDp?: boolean | cdktf.IResolvable; 
  public get typeDp() {
    return this.getBooleanAttribute('type_dp');
  }
  public set typeDp(value: boolean | cdktf.IResolvable) {
    this._typeDp = value;
  }
  public resetTypeDp() {
    this._typeDp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDpInput() {
    return this._typeDp;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: string; 
  public get unixPermissions() {
    return this.getStringAttribute('unix_permissions');
  }
  public set unixPermissions(value: string) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }

  // volume_path - computed: true, optional: true, required: false
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  public resetVolumePath() {
    this._volumePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // billing_label - computed: false, optional: true, required: false
  private _billingLabel = new VolumeBillingLabelList(this, "billing_label", true);
  public get billingLabel() {
    return this._billingLabel;
  }
  public putBillingLabel(value: VolumeBillingLabel[] | cdktf.IResolvable) {
    this._billingLabel.internalValue = value;
  }
  public resetBillingLabel() {
    this._billingLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingLabelInput() {
    return this._billingLabel.internalValue;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy = new VolumeExportPolicyList(this, "export_policy", true);
  public get exportPolicy() {
    return this._exportPolicy;
  }
  public putExportPolicy(value: VolumeExportPolicy[] | cdktf.IResolvable) {
    this._exportPolicy.internalValue = value;
  }
  public resetExportPolicy() {
    this._exportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy.internalValue;
  }

  // mount_points - computed: false, optional: true, required: false
  private _mountPoints = new VolumeMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }
  public putMountPoints(value: VolumeMountPoints[] | cdktf.IResolvable) {
    this._mountPoints.internalValue = value;
  }
  public resetMountPoints() {
    this._mountPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointsInput() {
    return this._mountPoints.internalValue;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy = new VolumeSnapshotPolicyList(this, "snapshot_policy", false);
  public get snapshotPolicy() {
    return this._snapshotPolicy;
  }
  public putSnapshotPolicy(value: VolumeSnapshotPolicy[] | cdktf.IResolvable) {
    this._snapshotPolicy.internalValue = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_on_creation_error: cdktf.booleanToTerraform(this._deleteOnCreationError),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      pool_id: cdktf.stringToTerraform(this._poolId),
      protocol_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocolTypes),
      region: cdktf.stringToTerraform(this._region),
      regional_ha: cdktf.booleanToTerraform(this._regionalHa),
      security_style: cdktf.stringToTerraform(this._securityStyle),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      shared_vpc_project_number: cdktf.stringToTerraform(this._sharedVpcProjectNumber),
      size: cdktf.numberToTerraform(this._size),
      smb_share_settings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smbShareSettings),
      snapshot_directory: cdktf.booleanToTerraform(this._snapshotDirectory),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      type_dp: cdktf.booleanToTerraform(this._typeDp),
      unix_permissions: cdktf.stringToTerraform(this._unixPermissions),
      volume_path: cdktf.stringToTerraform(this._volumePath),
      zone: cdktf.stringToTerraform(this._zone),
      billing_label: cdktf.listMapper(volumeBillingLabelToTerraform, true)(this._billingLabel.internalValue),
      export_policy: cdktf.listMapper(volumeExportPolicyToTerraform, true)(this._exportPolicy.internalValue),
      mount_points: cdktf.listMapper(volumeMountPointsToTerraform, true)(this._mountPoints.internalValue),
      snapshot_policy: cdktf.listMapper(volumeSnapshotPolicyToTerraform, true)(this._snapshotPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_on_creation_error: {
        value: cdktf.booleanToHclTerraform(this._deleteOnCreationError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocolTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regional_ha: {
        value: cdktf.booleanToHclTerraform(this._regionalHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_style: {
        value: cdktf.stringToHclTerraform(this._securityStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_level: {
        value: cdktf.stringToHclTerraform(this._serviceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_vpc_project_number: {
        value: cdktf.stringToHclTerraform(this._sharedVpcProjectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smb_share_settings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smbShareSettings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_directory: {
        value: cdktf.booleanToHclTerraform(this._snapshotDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_dp: {
        value: cdktf.booleanToHclTerraform(this._typeDp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unix_permissions: {
        value: cdktf.stringToHclTerraform(this._unixPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_path: {
        value: cdktf.stringToHclTerraform(this._volumePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_label: {
        value: cdktf.listMapperHcl(volumeBillingLabelToHclTerraform, true)(this._billingLabel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VolumeBillingLabelList",
      },
      export_policy: {
        value: cdktf.listMapperHcl(volumeExportPolicyToHclTerraform, true)(this._exportPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VolumeExportPolicyList",
      },
      mount_points: {
        value: cdktf.listMapperHcl(volumeMountPointsToHclTerraform, true)(this._mountPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeMountPointsList",
      },
      snapshot_policy: {
        value: cdktf.listMapperHcl(volumeSnapshotPolicyToHclTerraform, true)(this._snapshotPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeSnapshotPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
