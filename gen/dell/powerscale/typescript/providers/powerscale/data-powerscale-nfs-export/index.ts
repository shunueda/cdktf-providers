// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleNfsExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#filter DataPowerscaleNfsExport#filter}
  */
  readonly filter?: DataPowerscaleNfsExportFilter;
}
export interface DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapAllPrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapAllPrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapAllUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapAllUserToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAllUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapAllUserToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAllUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapAllUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapAllUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapAllUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapAll {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#enabled DataPowerscaleNfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#primary_group DataPowerscaleNfsExport#primary_group}
  */
  readonly primaryGroup?: DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#secondary_groups DataPowerscaleNfsExport#secondary_groups}
  */
  readonly secondaryGroups?: DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#user DataPowerscaleNfsExport#user}
  */
  readonly user?: DataPowerscaleNfsExportNfsExportsMapAllUser;
}

export function dataPowerscaleNfsExportNfsExportsMapAllToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: dataPowerscaleNfsExportNfsExportsMapAllPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(dataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: dataPowerscaleNfsExportNfsExportsMapAllUserToTerraform(struct!.user),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapAllToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapAll): any {
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
    primary_group: {
      value: dataPowerscaleNfsExportNfsExportsMapAllPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(dataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsList",
    },
    user: {
      value: dataPowerscaleNfsExportNfsExportsMapAllUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapAllUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
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

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: DataPowerscaleNfsExportNfsExportsMapAllPrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: DataPowerscaleNfsExportNfsExportsMapAllSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new DataPowerscaleNfsExportNfsExportsMapAllUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataPowerscaleNfsExportNfsExportsMapAllUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapFailureUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapFailureUserToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailureUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapFailureUserToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailureUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapFailureUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapFailureUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapFailureUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapFailure {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#enabled DataPowerscaleNfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#primary_group DataPowerscaleNfsExport#primary_group}
  */
  readonly primaryGroup?: DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#secondary_groups DataPowerscaleNfsExport#secondary_groups}
  */
  readonly secondaryGroups?: DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#user DataPowerscaleNfsExport#user}
  */
  readonly user?: DataPowerscaleNfsExportNfsExportsMapFailureUser;
}

export function dataPowerscaleNfsExportNfsExportsMapFailureToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: dataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(dataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: dataPowerscaleNfsExportNfsExportsMapFailureUserToTerraform(struct!.user),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapFailureToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapFailure): any {
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
    primary_group: {
      value: dataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(dataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsList",
    },
    user: {
      value: dataPowerscaleNfsExportNfsExportsMapFailureUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapFailureUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
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

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: DataPowerscaleNfsExportNfsExportsMapFailurePrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: DataPowerscaleNfsExportNfsExportsMapFailureSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new DataPowerscaleNfsExportNfsExportsMapFailureUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataPowerscaleNfsExportNfsExportsMapFailureUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapNonRootUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapNonRootUserToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapNonRootUserToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapNonRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapNonRootUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapNonRootUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapNonRoot {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#enabled DataPowerscaleNfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#primary_group DataPowerscaleNfsExport#primary_group}
  */
  readonly primaryGroup?: DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#secondary_groups DataPowerscaleNfsExport#secondary_groups}
  */
  readonly secondaryGroups?: DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#user DataPowerscaleNfsExport#user}
  */
  readonly user?: DataPowerscaleNfsExportNfsExportsMapNonRootUser;
}

export function dataPowerscaleNfsExportNfsExportsMapNonRootToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: dataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(dataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: dataPowerscaleNfsExportNfsExportsMapNonRootUserToTerraform(struct!.user),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapNonRootToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapNonRoot): any {
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
    primary_group: {
      value: dataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(dataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsList",
    },
    user: {
      value: dataPowerscaleNfsExportNfsExportsMapNonRootUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapNonRootUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapNonRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapNonRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapNonRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
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

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: DataPowerscaleNfsExportNfsExportsMapNonRootPrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: DataPowerscaleNfsExportNfsExportsMapNonRootSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new DataPowerscaleNfsExportNfsExportsMapNonRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataPowerscaleNfsExportNfsExportsMapNonRootUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapRootPrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapRootPrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapRootUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#id DataPowerscaleNfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#name DataPowerscaleNfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#type DataPowerscaleNfsExport#type}
  */
  readonly type?: string;
}

export function dataPowerscaleNfsExportNfsExportsMapRootUserToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapRootUserToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapRootUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapRootUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPowerscaleNfsExportNfsExportsMapRoot {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#enabled DataPowerscaleNfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#primary_group DataPowerscaleNfsExport#primary_group}
  */
  readonly primaryGroup?: DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#secondary_groups DataPowerscaleNfsExport#secondary_groups}
  */
  readonly secondaryGroups?: DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#user DataPowerscaleNfsExport#user}
  */
  readonly user?: DataPowerscaleNfsExportNfsExportsMapRootUser;
}

export function dataPowerscaleNfsExportNfsExportsMapRootToTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: dataPowerscaleNfsExportNfsExportsMapRootPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(dataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: dataPowerscaleNfsExportNfsExportsMapRootUserToTerraform(struct!.user),
  }
}


export function dataPowerscaleNfsExportNfsExportsMapRootToHclTerraform(struct?: DataPowerscaleNfsExportNfsExportsMapRoot): any {
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
    primary_group: {
      value: dataPowerscaleNfsExportNfsExportsMapRootPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(dataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsList",
    },
    user: {
      value: dataPowerscaleNfsExportNfsExportsMapRootUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleNfsExportNfsExportsMapRootUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportNfsExportsMapRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExportsMapRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExportsMapRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
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

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: DataPowerscaleNfsExportNfsExportsMapRootPrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: DataPowerscaleNfsExportNfsExportsMapRootSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new DataPowerscaleNfsExportNfsExportsMapRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataPowerscaleNfsExportNfsExportsMapRootUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataPowerscaleNfsExportNfsExports {
}

export function dataPowerscaleNfsExportNfsExportsToTerraform(struct?: DataPowerscaleNfsExportNfsExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportNfsExportsToHclTerraform(struct?: DataPowerscaleNfsExportNfsExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportNfsExportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerscaleNfsExportNfsExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportNfsExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_dirs - computed: true, optional: false, required: false
  public get allDirs() {
    return this.getBooleanAttribute('all_dirs');
  }

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // can_set_time - computed: true, optional: false, required: false
  public get canSetTime() {
    return this.getBooleanAttribute('can_set_time');
  }

  // case_insensitive - computed: true, optional: false, required: false
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }

  // case_preserving - computed: true, optional: false, required: false
  public get casePreserving() {
    return this.getBooleanAttribute('case_preserving');
  }

  // chown_restricted - computed: true, optional: false, required: false
  public get chownRestricted() {
    return this.getBooleanAttribute('chown_restricted');
  }

  // clients - computed: true, optional: false, required: false
  public get clients() {
    return this.getListAttribute('clients');
  }

  // commit_asynchronous - computed: true, optional: false, required: false
  public get commitAsynchronous() {
    return this.getBooleanAttribute('commit_asynchronous');
  }

  // conflicting_paths - computed: true, optional: false, required: false
  public get conflictingPaths() {
    return this.getListAttribute('conflicting_paths');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_transfer_size - computed: true, optional: false, required: false
  public get directoryTransferSize() {
    return this.getNumberAttribute('directory_transfer_size');
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // link_max - computed: true, optional: false, required: false
  public get linkMax() {
    return this.getNumberAttribute('link_max');
  }

  // map_all - computed: true, optional: false, required: false
  private _mapAll = new DataPowerscaleNfsExportNfsExportsMapAllOutputReference(this, "map_all");
  public get mapAll() {
    return this._mapAll;
  }

  // map_failure - computed: true, optional: false, required: false
  private _mapFailure = new DataPowerscaleNfsExportNfsExportsMapFailureOutputReference(this, "map_failure");
  public get mapFailure() {
    return this._mapFailure;
  }

  // map_full - computed: true, optional: false, required: false
  public get mapFull() {
    return this.getBooleanAttribute('map_full');
  }

  // map_lookup_uid - computed: true, optional: false, required: false
  public get mapLookupUid() {
    return this.getBooleanAttribute('map_lookup_uid');
  }

  // map_non_root - computed: true, optional: false, required: false
  private _mapNonRoot = new DataPowerscaleNfsExportNfsExportsMapNonRootOutputReference(this, "map_non_root");
  public get mapNonRoot() {
    return this._mapNonRoot;
  }

  // map_retry - computed: true, optional: false, required: false
  public get mapRetry() {
    return this.getBooleanAttribute('map_retry');
  }

  // map_root - computed: true, optional: false, required: false
  private _mapRoot = new DataPowerscaleNfsExportNfsExportsMapRootOutputReference(this, "map_root");
  public get mapRoot() {
    return this._mapRoot;
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // name_max_size - computed: true, optional: false, required: false
  public get nameMaxSize() {
    return this.getNumberAttribute('name_max_size');
  }

  // no_truncate - computed: true, optional: false, required: false
  public get noTruncate() {
    return this.getBooleanAttribute('no_truncate');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // read_only_clients - computed: true, optional: false, required: false
  public get readOnlyClients() {
    return this.getListAttribute('read_only_clients');
  }

  // read_transfer_max_size - computed: true, optional: false, required: false
  public get readTransferMaxSize() {
    return this.getNumberAttribute('read_transfer_max_size');
  }

  // read_transfer_multiple - computed: true, optional: false, required: false
  public get readTransferMultiple() {
    return this.getNumberAttribute('read_transfer_multiple');
  }

  // read_transfer_size - computed: true, optional: false, required: false
  public get readTransferSize() {
    return this.getNumberAttribute('read_transfer_size');
  }

  // read_write_clients - computed: true, optional: false, required: false
  public get readWriteClients() {
    return this.getListAttribute('read_write_clients');
  }

  // readdirplus - computed: true, optional: false, required: false
  public get readdirplus() {
    return this.getBooleanAttribute('readdirplus');
  }

  // readdirplus_prefetch - computed: true, optional: false, required: false
  public get readdirplusPrefetch() {
    return this.getNumberAttribute('readdirplus_prefetch');
  }

  // return_32bit_file_ids - computed: true, optional: false, required: false
  public get return32BitFileIds() {
    return this.getBooleanAttribute('return_32bit_file_ids');
  }

  // root_clients - computed: true, optional: false, required: false
  public get rootClients() {
    return this.getListAttribute('root_clients');
  }

  // security_flavors - computed: true, optional: false, required: false
  public get securityFlavors() {
    return this.getListAttribute('security_flavors');
  }

  // setattr_asynchronous - computed: true, optional: false, required: false
  public get setattrAsynchronous() {
    return this.getBooleanAttribute('setattr_asynchronous');
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }

  // symlinks - computed: true, optional: false, required: false
  public get symlinks() {
    return this.getBooleanAttribute('symlinks');
  }

  // time_delta - computed: true, optional: false, required: false
  public get timeDelta() {
    return this.getNumberAttribute('time_delta');
  }

  // unresolved_clients - computed: true, optional: false, required: false
  public get unresolvedClients() {
    return this.getListAttribute('unresolved_clients');
  }

  // write_datasync_action - computed: true, optional: false, required: false
  public get writeDatasyncAction() {
    return this.getStringAttribute('write_datasync_action');
  }

  // write_datasync_reply - computed: true, optional: false, required: false
  public get writeDatasyncReply() {
    return this.getStringAttribute('write_datasync_reply');
  }

  // write_filesync_action - computed: true, optional: false, required: false
  public get writeFilesyncAction() {
    return this.getStringAttribute('write_filesync_action');
  }

  // write_filesync_reply - computed: true, optional: false, required: false
  public get writeFilesyncReply() {
    return this.getStringAttribute('write_filesync_reply');
  }

  // write_transfer_max_size - computed: true, optional: false, required: false
  public get writeTransferMaxSize() {
    return this.getNumberAttribute('write_transfer_max_size');
  }

  // write_transfer_multiple - computed: true, optional: false, required: false
  public get writeTransferMultiple() {
    return this.getNumberAttribute('write_transfer_multiple');
  }

  // write_transfer_size - computed: true, optional: false, required: false
  public get writeTransferSize() {
    return this.getNumberAttribute('write_transfer_size');
  }

  // write_unstable_action - computed: true, optional: false, required: false
  public get writeUnstableAction() {
    return this.getStringAttribute('write_unstable_action');
  }

  // write_unstable_reply - computed: true, optional: false, required: false
  public get writeUnstableReply() {
    return this.getStringAttribute('write_unstable_reply');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataPowerscaleNfsExportNfsExportsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNfsExportNfsExportsOutputReference {
    return new DataPowerscaleNfsExportNfsExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportFilter {
  /**
  * Check for conflicts when listing exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#check DataPowerscaleNfsExport#check}
  */
  readonly check?: boolean | cdktf.IResolvable;
  /**
  * The direction of the sort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#dir DataPowerscaleNfsExport#dir}
  */
  readonly dir?: string;
  /**
  * IDs to filter nfs exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#ids DataPowerscaleNfsExport#ids}
  */
  readonly ids?: number[];
  /**
  * Return no more than this many results at once (see resume).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#limit DataPowerscaleNfsExport#limit}
  */
  readonly limit?: number;
  /**
  * The position of the first item returned for a paginated query within the full result set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#offset DataPowerscaleNfsExport#offset}
  */
  readonly offset?: number;
  /**
  * If specified, only exports that explicitly reference at least one of the given paths will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#path DataPowerscaleNfsExport#path}
  */
  readonly path?: string;
  /**
  * Paths to filter nfs exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#paths DataPowerscaleNfsExport#paths}
  */
  readonly paths?: string[];
  /**
  * Continue returning results from previous call using this token (token should come from the previous call, resume cannot be used with other options).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#resume DataPowerscaleNfsExport#resume}
  */
  readonly resume?: string;
  /**
  * If specified as "effective" or not specified, all fields are returned. If specified as "user", only fields with non-default values are shown. If specified as "default", the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#scope DataPowerscaleNfsExport#scope}
  */
  readonly scope?: string;
  /**
  * The field that will be used for sorting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#sort DataPowerscaleNfsExport#sort}
  */
  readonly sort?: string;
  /**
  * Specifies which access zone to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#zone DataPowerscaleNfsExport#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleNfsExportFilterToTerraform(struct?: DataPowerscaleNfsExportFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.booleanToTerraform(struct!.check),
    dir: cdktf.stringToTerraform(struct!.dir),
    ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ids),
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    path: cdktf.stringToTerraform(struct!.path),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    resume: cdktf.stringToTerraform(struct!.resume),
    scope: cdktf.stringToTerraform(struct!.scope),
    sort: cdktf.stringToTerraform(struct!.sort),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleNfsExportFilterToHclTerraform(struct?: DataPowerscaleNfsExportFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.booleanToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resume: {
      value: cdktf.stringToHclTerraform(struct!.resume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._resume !== undefined) {
      hasAnyValues = true;
      internalValueResult.resume = this._resume;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._dir = undefined;
      this._ids = undefined;
      this._limit = undefined;
      this._offset = undefined;
      this._path = undefined;
      this._paths = undefined;
      this._resume = undefined;
      this._scope = undefined;
      this._sort = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._dir = value.dir;
      this._ids = value.ids;
      this._limit = value.limit;
      this._offset = value.offset;
      this._path = value.path;
      this._paths = value.paths;
      this._resume = value.resume;
      this._scope = value.scope;
      this._sort = value.sort;
      this._zone = value.zone;
    }
  }

  // check - computed: false, optional: true, required: false
  private _check?: boolean | cdktf.IResolvable; 
  public get check() {
    return this.getBooleanAttribute('check');
  }
  public set check(value: boolean | cdktf.IResolvable) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: number[]; 
  public get ids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ids')));
  }
  public set ids(value: number[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // resume - computed: false, optional: true, required: false
  private _resume?: string; 
  public get resume() {
    return this.getStringAttribute('resume');
  }
  public set resume(value: string) {
    this._resume = value;
  }
  public resetResume() {
    this._resume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeInput() {
    return this._resume;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export powerscale_nfs_export}
*/
export class DataPowerscaleNfsExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleNfsExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleNfsExport to import
  * @param importFromId The id of the existing DataPowerscaleNfsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleNfsExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export powerscale_nfs_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleNfsExportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleNfsExportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_export',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nfs_exports - computed: true, optional: false, required: false
  private _nfsExports = new DataPowerscaleNfsExportNfsExportsList(this, "nfs_exports", false);
  public get nfsExports() {
    return this._nfsExports;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleNfsExportFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleNfsExportFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleNfsExportFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleNfsExportFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleNfsExportFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
