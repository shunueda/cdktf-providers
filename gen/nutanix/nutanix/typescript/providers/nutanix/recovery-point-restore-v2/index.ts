// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecoveryPointRestoreV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#cluster_ext_id RecoveryPointRestoreV2#cluster_ext_id}
  */
  readonly clusterExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#ext_id RecoveryPointRestoreV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#id RecoveryPointRestoreV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vm_recovery_point_restore_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#vm_recovery_point_restore_overrides RecoveryPointRestoreV2#vm_recovery_point_restore_overrides}
  */
  readonly vmRecoveryPointRestoreOverrides?: RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides[] | cdktf.IResolvable;
  /**
  * volume_group_recovery_point_restore_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#volume_group_recovery_point_restore_overrides RecoveryPointRestoreV2#volume_group_recovery_point_restore_overrides}
  */
  readonly volumeGroupRecoveryPointRestoreOverrides?: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides[] | cdktf.IResolvable;
}
export interface RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#vm_recovery_point_ext_id RecoveryPointRestoreV2#vm_recovery_point_ext_id}
  */
  readonly vmRecoveryPointExtId: string;
}

export function recoveryPointRestoreV2VmRecoveryPointRestoreOverridesToTerraform(struct?: RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_recovery_point_ext_id: cdktf.stringToTerraform(struct!.vmRecoveryPointExtId),
  }
}


export function recoveryPointRestoreV2VmRecoveryPointRestoreOverridesToHclTerraform(struct?: RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_recovery_point_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.vmRecoveryPointExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPointRestoreV2VmRecoveryPointRestoreOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmRecoveryPointExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmRecoveryPointExtId = this._vmRecoveryPointExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vmRecoveryPointExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vmRecoveryPointExtId = value.vmRecoveryPointExtId;
    }
  }

  // vm_recovery_point_ext_id - computed: false, optional: false, required: true
  private _vmRecoveryPointExtId?: string; 
  public get vmRecoveryPointExtId() {
    return this.getStringAttribute('vm_recovery_point_ext_id');
  }
  public set vmRecoveryPointExtId(value: string) {
    this._vmRecoveryPointExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRecoveryPointExtIdInput() {
    return this._vmRecoveryPointExtId;
  }
}

export class RecoveryPointRestoreV2VmRecoveryPointRestoreOverridesList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointRestoreV2VmRecoveryPointRestoreOverridesOutputReference {
    return new RecoveryPointRestoreV2VmRecoveryPointRestoreOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#name RecoveryPointRestoreV2#name}
  */
  readonly name?: string;
}

export function recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecToTerraform(struct?: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecToHclTerraform(struct?: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecOutputReference {
    return new RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#volume_group_recovery_point_ext_id RecoveryPointRestoreV2#volume_group_recovery_point_ext_id}
  */
  readonly volumeGroupRecoveryPointExtId: string;
  /**
  * volume_group_override_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#volume_group_override_spec RecoveryPointRestoreV2#volume_group_override_spec}
  */
  readonly volumeGroupOverrideSpec?: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec[] | cdktf.IResolvable;
}

export function recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesToTerraform(struct?: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_group_recovery_point_ext_id: cdktf.stringToTerraform(struct!.volumeGroupRecoveryPointExtId),
    volume_group_override_spec: cdktf.listMapper(recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecToTerraform, true)(struct!.volumeGroupOverrideSpec),
  }
}


export function recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesToHclTerraform(struct?: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_group_recovery_point_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupRecoveryPointExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group_override_spec: {
      value: cdktf.listMapperHcl(recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecToHclTerraform, true)(struct!.volumeGroupOverrideSpec),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeGroupRecoveryPointExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupRecoveryPointExtId = this._volumeGroupRecoveryPointExtId;
    }
    if (this._volumeGroupOverrideSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupOverrideSpec = this._volumeGroupOverrideSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeGroupRecoveryPointExtId = undefined;
      this._volumeGroupOverrideSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeGroupRecoveryPointExtId = value.volumeGroupRecoveryPointExtId;
      this._volumeGroupOverrideSpec.internalValue = value.volumeGroupOverrideSpec;
    }
  }

  // volume_group_recovery_point_ext_id - computed: false, optional: false, required: true
  private _volumeGroupRecoveryPointExtId?: string; 
  public get volumeGroupRecoveryPointExtId() {
    return this.getStringAttribute('volume_group_recovery_point_ext_id');
  }
  public set volumeGroupRecoveryPointExtId(value: string) {
    this._volumeGroupRecoveryPointExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupRecoveryPointExtIdInput() {
    return this._volumeGroupRecoveryPointExtId;
  }

  // volume_group_override_spec - computed: false, optional: true, required: false
  private _volumeGroupOverrideSpec = new RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpecList(this, "volume_group_override_spec", false);
  public get volumeGroupOverrideSpec() {
    return this._volumeGroupOverrideSpec;
  }
  public putVolumeGroupOverrideSpec(value: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesVolumeGroupOverrideSpec[] | cdktf.IResolvable) {
    this._volumeGroupOverrideSpec.internalValue = value;
  }
  public resetVolumeGroupOverrideSpec() {
    this._volumeGroupOverrideSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupOverrideSpecInput() {
    return this._volumeGroupOverrideSpec.internalValue;
  }
}

export class RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesOutputReference {
    return new RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2 nutanix_recovery_point_restore_v2}
*/
export class RecoveryPointRestoreV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_recovery_point_restore_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecoveryPointRestoreV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecoveryPointRestoreV2 to import
  * @param importFromId The id of the existing RecoveryPointRestoreV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecoveryPointRestoreV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_recovery_point_restore_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/recovery_point_restore_v2 nutanix_recovery_point_restore_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecoveryPointRestoreV2Config
  */
  public constructor(scope: Construct, id: string, config: RecoveryPointRestoreV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_recovery_point_restore_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterExtId = config.clusterExtId;
    this._extId = config.extId;
    this._id = config.id;
    this._vmRecoveryPointRestoreOverrides.internalValue = config.vmRecoveryPointRestoreOverrides;
    this._volumeGroupRecoveryPointRestoreOverrides.internalValue = config.volumeGroupRecoveryPointRestoreOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ext_id - computed: false, optional: false, required: true
  private _clusterExtId?: string; 
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }
  public set clusterExtId(value: string) {
    this._clusterExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdInput() {
    return this._clusterExtId;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // vm_ext_ids - computed: true, optional: false, required: false
  public get vmExtIds() {
    return this.getListAttribute('vm_ext_ids');
  }

  // volume_group_ext_ids - computed: true, optional: false, required: false
  public get volumeGroupExtIds() {
    return this.getListAttribute('volume_group_ext_ids');
  }

  // vm_recovery_point_restore_overrides - computed: false, optional: true, required: false
  private _vmRecoveryPointRestoreOverrides = new RecoveryPointRestoreV2VmRecoveryPointRestoreOverridesList(this, "vm_recovery_point_restore_overrides", false);
  public get vmRecoveryPointRestoreOverrides() {
    return this._vmRecoveryPointRestoreOverrides;
  }
  public putVmRecoveryPointRestoreOverrides(value: RecoveryPointRestoreV2VmRecoveryPointRestoreOverrides[] | cdktf.IResolvable) {
    this._vmRecoveryPointRestoreOverrides.internalValue = value;
  }
  public resetVmRecoveryPointRestoreOverrides() {
    this._vmRecoveryPointRestoreOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRecoveryPointRestoreOverridesInput() {
    return this._vmRecoveryPointRestoreOverrides.internalValue;
  }

  // volume_group_recovery_point_restore_overrides - computed: false, optional: true, required: false
  private _volumeGroupRecoveryPointRestoreOverrides = new RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesList(this, "volume_group_recovery_point_restore_overrides", false);
  public get volumeGroupRecoveryPointRestoreOverrides() {
    return this._volumeGroupRecoveryPointRestoreOverrides;
  }
  public putVolumeGroupRecoveryPointRestoreOverrides(value: RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverrides[] | cdktf.IResolvable) {
    this._volumeGroupRecoveryPointRestoreOverrides.internalValue = value;
  }
  public resetVolumeGroupRecoveryPointRestoreOverrides() {
    this._volumeGroupRecoveryPointRestoreOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupRecoveryPointRestoreOverridesInput() {
    return this._volumeGroupRecoveryPointRestoreOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ext_id: cdktf.stringToTerraform(this._clusterExtId),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      vm_recovery_point_restore_overrides: cdktf.listMapper(recoveryPointRestoreV2VmRecoveryPointRestoreOverridesToTerraform, true)(this._vmRecoveryPointRestoreOverrides.internalValue),
      volume_group_recovery_point_restore_overrides: cdktf.listMapper(recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesToTerraform, true)(this._volumeGroupRecoveryPointRestoreOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ext_id: {
        value: cdktf.stringToHclTerraform(this._clusterExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_recovery_point_restore_overrides: {
        value: cdktf.listMapperHcl(recoveryPointRestoreV2VmRecoveryPointRestoreOverridesToHclTerraform, true)(this._vmRecoveryPointRestoreOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPointRestoreV2VmRecoveryPointRestoreOverridesList",
      },
      volume_group_recovery_point_restore_overrides: {
        value: cdktf.listMapperHcl(recoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesToHclTerraform, true)(this._volumeGroupRecoveryPointRestoreOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPointRestoreV2VolumeGroupRecoveryPointRestoreOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
