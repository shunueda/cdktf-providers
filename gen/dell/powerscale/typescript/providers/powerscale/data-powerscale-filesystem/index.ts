// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleFilesystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * FileSystem directory path.This specifies the path to the FileSystem(Namespace directory) which we are trying to query. Default path is `/ifs` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#directory_path DataPowerscaleFilesystem#directory_path}
  */
  readonly directoryPath?: string;
  /**
  * Details of the Filesystem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#file_systems_details DataPowerscaleFilesystem#file_systems_details}
  */
  readonly fileSystemsDetails?: DataPowerscaleFilesystemFileSystemsDetails;
  /**
  * FileSystem identifier. Unique identifier for the FileSystem(Namespace directory)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#id DataPowerscaleFilesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes {
  /**
  * Attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#name DataPowerscaleFilesystem#name}
  */
  readonly name?: string;
  /**
  * Attribute namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#namespace DataPowerscaleFilesystem#namespace}
  */
  readonly namespace?: string;
  /**
  * Attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#value DataPowerscaleFilesystem#value}
  */
  readonly value?: string;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._value = value.value;
    }
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesOutputReference {
    return new DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee {
  /**
  * Trustee identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#id DataPowerscaleFilesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trustee name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#name DataPowerscaleFilesystem#name}
  */
  readonly name?: string;
  /**
  * Trustee type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#type DataPowerscaleFilesystem#type}
  */
  readonly type?: string;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrusteeToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee | cdktf.IResolvable): any {
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


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrusteeToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee | cdktf.IResolvable): any {
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

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrusteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee | cdktf.IResolvable | undefined) {
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
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl {
  /**
  * Access rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#access_rights DataPowerscaleFilesystem#access_rights}
  */
  readonly accessRights?: string[];
  /**
  * Access type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#access_type DataPowerscaleFilesystem#access_type}
  */
  readonly accessType?: string;
  /**
  * Inherit flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#inherit_flags DataPowerscaleFilesystem#inherit_flags}
  */
  readonly inheritFlags?: string[];
  /**
  * Op
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#op DataPowerscaleFilesystem#op}
  */
  readonly op?: string;
  /**
  * Trustee
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#trustee DataPowerscaleFilesystem#trustee}
  */
  readonly trustee?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_rights: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessRights),
    access_type: cdktf.stringToTerraform(struct!.accessType),
    inherit_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inheritFlags),
    op: cdktf.stringToTerraform(struct!.op),
    trustee: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrusteeToTerraform(struct!.trustee),
  }
}


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_rights: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessRights),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inherit_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inheritFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trustee: {
      value: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrusteeToHclTerraform(struct!.trustee),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRights !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRights = this._accessRights;
    }
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._inheritFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritFlags = this._inheritFlags;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._trustee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustee = this._trustee?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessRights = undefined;
      this._accessType = undefined;
      this._inheritFlags = undefined;
      this._op = undefined;
      this._trustee.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessRights = value.accessRights;
      this._accessType = value.accessType;
      this._inheritFlags = value.inheritFlags;
      this._op = value.op;
      this._trustee.internalValue = value.trustee;
    }
  }

  // access_rights - computed: true, optional: true, required: false
  private _accessRights?: string[]; 
  public get accessRights() {
    return this.getListAttribute('access_rights');
  }
  public set accessRights(value: string[]) {
    this._accessRights = value;
  }
  public resetAccessRights() {
    this._accessRights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRightsInput() {
    return this._accessRights;
  }

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // inherit_flags - computed: true, optional: true, required: false
  private _inheritFlags?: string[]; 
  public get inheritFlags() {
    return this.getListAttribute('inherit_flags');
  }
  public set inheritFlags(value: string[]) {
    this._inheritFlags = value;
  }
  public resetInheritFlags() {
    this._inheritFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFlagsInput() {
    return this._inheritFlags;
  }

  // op - computed: true, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // trustee - computed: true, optional: true, required: false
  private _trustee = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrusteeOutputReference(this, "trustee");
  public get trustee() {
    return this._trustee;
  }
  public putTrustee(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclTrustee) {
    this._trustee.internalValue = value;
  }
  public resetTrustee() {
    this._trustee.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusteeInput() {
    return this._trustee.internalValue;
  }
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclOutputReference {
    return new DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup {
  /**
  * Group identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#id DataPowerscaleFilesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#name DataPowerscaleFilesystem#name}
  */
  readonly name?: string;
  /**
  * Group type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#type DataPowerscaleFilesystem#type}
  */
  readonly type?: string;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroupToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup | cdktf.IResolvable): any {
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


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroupToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup | cdktf.IResolvable): any {
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

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup | cdktf.IResolvable | undefined) {
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
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner {
  /**
  * Owner identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#id DataPowerscaleFilesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Owner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#name DataPowerscaleFilesystem#name}
  */
  readonly name?: string;
  /**
  * Owner type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#type DataPowerscaleFilesystem#type}
  */
  readonly type?: string;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwnerToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner | cdktf.IResolvable): any {
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


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwnerToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner | cdktf.IResolvable): any {
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

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner | cdktf.IResolvable | undefined) {
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
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl {
  /**
  * Filesystem Access Control List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#acl DataPowerscaleFilesystem#acl}
  */
  readonly acl?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl[] | cdktf.IResolvable;
  /**
  * Acl action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#action DataPowerscaleFilesystem#action}
  */
  readonly action?: string;
  /**
  * Acl authoritative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#authoritative DataPowerscaleFilesystem#authoritative}
  */
  readonly authoritative?: string;
  /**
  * ACL group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#group DataPowerscaleFilesystem#group}
  */
  readonly group?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup;
  /**
  * Acl mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#mode DataPowerscaleFilesystem#mode}
  */
  readonly mode?: string;
  /**
  * ACL owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#owner DataPowerscaleFilesystem#owner}
  */
  readonly owner?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.listMapper(dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclToTerraform, false)(struct!.acl),
    action: cdktf.stringToTerraform(struct!.action),
    authoritative: cdktf.stringToTerraform(struct!.authoritative),
    group: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroupToTerraform(struct!.group),
    mode: cdktf.stringToTerraform(struct!.mode),
    owner: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwnerToTerraform(struct!.owner),
  }
}


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.listMapperHcl(dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclToHclTerraform, false)(struct!.acl),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclList",
    },
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authoritative: {
      value: cdktf.stringToHclTerraform(struct!.authoritative),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl?.internalValue;
    }
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._authoritative !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritative = this._authoritative;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl.internalValue = undefined;
      this._action = undefined;
      this._authoritative = undefined;
      this._group.internalValue = undefined;
      this._mode = undefined;
      this._owner.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl.internalValue = value.acl;
      this._action = value.action;
      this._authoritative = value.authoritative;
      this._group.internalValue = value.group;
      this._mode = value.mode;
      this._owner.internalValue = value.owner;
    }
  }

  // acl - computed: true, optional: true, required: false
  private _acl = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAclList(this, "acl", false);
  public get acl() {
    return this._acl;
  }
  public putAcl(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclAcl[] | cdktf.IResolvable) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // authoritative - computed: true, optional: true, required: false
  private _authoritative?: string; 
  public get authoritative() {
    return this.getStringAttribute('authoritative');
  }
  public set authoritative(value: string) {
    this._authoritative = value;
  }
  public resetAuthoritative() {
    this._authoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeInput() {
    return this._authoritative;
  }

  // group - computed: true, optional: true, required: false
  private _group = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // owner - computed: true, optional: true, required: false
  private _owner = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOwner) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }
}
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage {
  /**
  * Bytes used by governed data apparent to application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#applogical DataPowerscaleFilesystem#applogical}
  */
  readonly applogical?: number;
  /**
  * True if applogical resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#applogical_ready DataPowerscaleFilesystem#applogical_ready}
  */
  readonly applogicalReady?: boolean | cdktf.IResolvable;
  /**
  * Bytes used by governed data apparent to filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#fslogical DataPowerscaleFilesystem#fslogical}
  */
  readonly fslogical?: number;
  /**
  * True if fslogical resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#fslogical_ready DataPowerscaleFilesystem#fslogical_ready}
  */
  readonly fslogicalReady?: boolean | cdktf.IResolvable;
  /**
  * Bytes used by governed data apparent to filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#fsphysical DataPowerscaleFilesystem#fsphysical}
  */
  readonly fsphysical?: number;
  /**
  * True if fsphysical resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#fsphysical_ready DataPowerscaleFilesystem#fsphysical_ready}
  */
  readonly fsphysicalReady?: boolean | cdktf.IResolvable;
  /**
  * Number of inodes (filesystem entities) used by governed data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#inodes DataPowerscaleFilesystem#inodes}
  */
  readonly inodes?: number;
  /**
  * True if inodes resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#inodes_ready DataPowerscaleFilesystem#inodes_ready}
  */
  readonly inodesReady?: boolean | cdktf.IResolvable;
  /**
  * Bytes used for governed data and filesystem overhead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#physical DataPowerscaleFilesystem#physical}
  */
  readonly physical?: number;
  /**
  * Number of physical blocks for file data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#physical_data DataPowerscaleFilesystem#physical_data}
  */
  readonly physicalData?: number;
  /**
  * True if physical_data resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#physical_data_ready DataPowerscaleFilesystem#physical_data_ready}
  */
  readonly physicalDataReady?: boolean | cdktf.IResolvable;
  /**
  * Number of physical blocks for file protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#physical_protection DataPowerscaleFilesystem#physical_protection}
  */
  readonly physicalProtection?: number;
  /**
  * True if physical_protection resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#physical_protection_ready DataPowerscaleFilesystem#physical_protection_ready}
  */
  readonly physicalProtectionReady?: boolean | cdktf.IResolvable;
  /**
  * True if physical resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#physical_ready DataPowerscaleFilesystem#physical_ready}
  */
  readonly physicalReady?: boolean | cdktf.IResolvable;
  /**
  * Number of shadow references (cloned, deduplicated or packed filesystem blocks) used by governed data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#shadow_refs DataPowerscaleFilesystem#shadow_refs}
  */
  readonly shadowRefs?: number;
  /**
  * True if shadow_refs resource accounting is accurate on the quota. If false, this quota is waiting on completion of a QuotaScan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#shadow_refs_ready DataPowerscaleFilesystem#shadow_refs_ready}
  */
  readonly shadowRefsReady?: boolean | cdktf.IResolvable;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsageToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applogical: cdktf.numberToTerraform(struct!.applogical),
    applogical_ready: cdktf.booleanToTerraform(struct!.applogicalReady),
    fslogical: cdktf.numberToTerraform(struct!.fslogical),
    fslogical_ready: cdktf.booleanToTerraform(struct!.fslogicalReady),
    fsphysical: cdktf.numberToTerraform(struct!.fsphysical),
    fsphysical_ready: cdktf.booleanToTerraform(struct!.fsphysicalReady),
    inodes: cdktf.numberToTerraform(struct!.inodes),
    inodes_ready: cdktf.booleanToTerraform(struct!.inodesReady),
    physical: cdktf.numberToTerraform(struct!.physical),
    physical_data: cdktf.numberToTerraform(struct!.physicalData),
    physical_data_ready: cdktf.booleanToTerraform(struct!.physicalDataReady),
    physical_protection: cdktf.numberToTerraform(struct!.physicalProtection),
    physical_protection_ready: cdktf.booleanToTerraform(struct!.physicalProtectionReady),
    physical_ready: cdktf.booleanToTerraform(struct!.physicalReady),
    shadow_refs: cdktf.numberToTerraform(struct!.shadowRefs),
    shadow_refs_ready: cdktf.booleanToTerraform(struct!.shadowRefsReady),
  }
}


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsageToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applogical: {
      value: cdktf.numberToHclTerraform(struct!.applogical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    applogical_ready: {
      value: cdktf.booleanToHclTerraform(struct!.applogicalReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fslogical: {
      value: cdktf.numberToHclTerraform(struct!.fslogical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fslogical_ready: {
      value: cdktf.booleanToHclTerraform(struct!.fslogicalReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fsphysical: {
      value: cdktf.numberToHclTerraform(struct!.fsphysical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fsphysical_ready: {
      value: cdktf.booleanToHclTerraform(struct!.fsphysicalReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inodes: {
      value: cdktf.numberToHclTerraform(struct!.inodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inodes_ready: {
      value: cdktf.booleanToHclTerraform(struct!.inodesReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    physical: {
      value: cdktf.numberToHclTerraform(struct!.physical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    physical_data: {
      value: cdktf.numberToHclTerraform(struct!.physicalData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    physical_data_ready: {
      value: cdktf.booleanToHclTerraform(struct!.physicalDataReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    physical_protection: {
      value: cdktf.numberToHclTerraform(struct!.physicalProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    physical_protection_ready: {
      value: cdktf.booleanToHclTerraform(struct!.physicalProtectionReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    physical_ready: {
      value: cdktf.booleanToHclTerraform(struct!.physicalReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shadow_refs: {
      value: cdktf.numberToHclTerraform(struct!.shadowRefs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shadow_refs_ready: {
      value: cdktf.booleanToHclTerraform(struct!.shadowRefsReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applogical !== undefined) {
      hasAnyValues = true;
      internalValueResult.applogical = this._applogical;
    }
    if (this._applogicalReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.applogicalReady = this._applogicalReady;
    }
    if (this._fslogical !== undefined) {
      hasAnyValues = true;
      internalValueResult.fslogical = this._fslogical;
    }
    if (this._fslogicalReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.fslogicalReady = this._fslogicalReady;
    }
    if (this._fsphysical !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsphysical = this._fsphysical;
    }
    if (this._fsphysicalReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsphysicalReady = this._fsphysicalReady;
    }
    if (this._inodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inodes = this._inodes;
    }
    if (this._inodesReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.inodesReady = this._inodesReady;
    }
    if (this._physical !== undefined) {
      hasAnyValues = true;
      internalValueResult.physical = this._physical;
    }
    if (this._physicalData !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalData = this._physicalData;
    }
    if (this._physicalDataReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalDataReady = this._physicalDataReady;
    }
    if (this._physicalProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalProtection = this._physicalProtection;
    }
    if (this._physicalProtectionReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalProtectionReady = this._physicalProtectionReady;
    }
    if (this._physicalReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalReady = this._physicalReady;
    }
    if (this._shadowRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowRefs = this._shadowRefs;
    }
    if (this._shadowRefsReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowRefsReady = this._shadowRefsReady;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applogical = undefined;
      this._applogicalReady = undefined;
      this._fslogical = undefined;
      this._fslogicalReady = undefined;
      this._fsphysical = undefined;
      this._fsphysicalReady = undefined;
      this._inodes = undefined;
      this._inodesReady = undefined;
      this._physical = undefined;
      this._physicalData = undefined;
      this._physicalDataReady = undefined;
      this._physicalProtection = undefined;
      this._physicalProtectionReady = undefined;
      this._physicalReady = undefined;
      this._shadowRefs = undefined;
      this._shadowRefsReady = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applogical = value.applogical;
      this._applogicalReady = value.applogicalReady;
      this._fslogical = value.fslogical;
      this._fslogicalReady = value.fslogicalReady;
      this._fsphysical = value.fsphysical;
      this._fsphysicalReady = value.fsphysicalReady;
      this._inodes = value.inodes;
      this._inodesReady = value.inodesReady;
      this._physical = value.physical;
      this._physicalData = value.physicalData;
      this._physicalDataReady = value.physicalDataReady;
      this._physicalProtection = value.physicalProtection;
      this._physicalProtectionReady = value.physicalProtectionReady;
      this._physicalReady = value.physicalReady;
      this._shadowRefs = value.shadowRefs;
      this._shadowRefsReady = value.shadowRefsReady;
    }
  }

  // applogical - computed: true, optional: true, required: false
  private _applogical?: number; 
  public get applogical() {
    return this.getNumberAttribute('applogical');
  }
  public set applogical(value: number) {
    this._applogical = value;
  }
  public resetApplogical() {
    this._applogical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applogicalInput() {
    return this._applogical;
  }

  // applogical_ready - computed: true, optional: true, required: false
  private _applogicalReady?: boolean | cdktf.IResolvable; 
  public get applogicalReady() {
    return this.getBooleanAttribute('applogical_ready');
  }
  public set applogicalReady(value: boolean | cdktf.IResolvable) {
    this._applogicalReady = value;
  }
  public resetApplogicalReady() {
    this._applogicalReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applogicalReadyInput() {
    return this._applogicalReady;
  }

  // fslogical - computed: true, optional: true, required: false
  private _fslogical?: number; 
  public get fslogical() {
    return this.getNumberAttribute('fslogical');
  }
  public set fslogical(value: number) {
    this._fslogical = value;
  }
  public resetFslogical() {
    this._fslogical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fslogicalInput() {
    return this._fslogical;
  }

  // fslogical_ready - computed: true, optional: true, required: false
  private _fslogicalReady?: boolean | cdktf.IResolvable; 
  public get fslogicalReady() {
    return this.getBooleanAttribute('fslogical_ready');
  }
  public set fslogicalReady(value: boolean | cdktf.IResolvable) {
    this._fslogicalReady = value;
  }
  public resetFslogicalReady() {
    this._fslogicalReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fslogicalReadyInput() {
    return this._fslogicalReady;
  }

  // fsphysical - computed: true, optional: true, required: false
  private _fsphysical?: number; 
  public get fsphysical() {
    return this.getNumberAttribute('fsphysical');
  }
  public set fsphysical(value: number) {
    this._fsphysical = value;
  }
  public resetFsphysical() {
    this._fsphysical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsphysicalInput() {
    return this._fsphysical;
  }

  // fsphysical_ready - computed: true, optional: true, required: false
  private _fsphysicalReady?: boolean | cdktf.IResolvable; 
  public get fsphysicalReady() {
    return this.getBooleanAttribute('fsphysical_ready');
  }
  public set fsphysicalReady(value: boolean | cdktf.IResolvable) {
    this._fsphysicalReady = value;
  }
  public resetFsphysicalReady() {
    this._fsphysicalReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsphysicalReadyInput() {
    return this._fsphysicalReady;
  }

  // inodes - computed: true, optional: true, required: false
  private _inodes?: number; 
  public get inodes() {
    return this.getNumberAttribute('inodes');
  }
  public set inodes(value: number) {
    this._inodes = value;
  }
  public resetInodes() {
    this._inodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inodesInput() {
    return this._inodes;
  }

  // inodes_ready - computed: true, optional: true, required: false
  private _inodesReady?: boolean | cdktf.IResolvable; 
  public get inodesReady() {
    return this.getBooleanAttribute('inodes_ready');
  }
  public set inodesReady(value: boolean | cdktf.IResolvable) {
    this._inodesReady = value;
  }
  public resetInodesReady() {
    this._inodesReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inodesReadyInput() {
    return this._inodesReady;
  }

  // physical - computed: true, optional: true, required: false
  private _physical?: number; 
  public get physical() {
    return this.getNumberAttribute('physical');
  }
  public set physical(value: number) {
    this._physical = value;
  }
  public resetPhysical() {
    this._physical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalInput() {
    return this._physical;
  }

  // physical_data - computed: true, optional: true, required: false
  private _physicalData?: number; 
  public get physicalData() {
    return this.getNumberAttribute('physical_data');
  }
  public set physicalData(value: number) {
    this._physicalData = value;
  }
  public resetPhysicalData() {
    this._physicalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDataInput() {
    return this._physicalData;
  }

  // physical_data_ready - computed: true, optional: true, required: false
  private _physicalDataReady?: boolean | cdktf.IResolvable; 
  public get physicalDataReady() {
    return this.getBooleanAttribute('physical_data_ready');
  }
  public set physicalDataReady(value: boolean | cdktf.IResolvable) {
    this._physicalDataReady = value;
  }
  public resetPhysicalDataReady() {
    this._physicalDataReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDataReadyInput() {
    return this._physicalDataReady;
  }

  // physical_protection - computed: true, optional: true, required: false
  private _physicalProtection?: number; 
  public get physicalProtection() {
    return this.getNumberAttribute('physical_protection');
  }
  public set physicalProtection(value: number) {
    this._physicalProtection = value;
  }
  public resetPhysicalProtection() {
    this._physicalProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalProtectionInput() {
    return this._physicalProtection;
  }

  // physical_protection_ready - computed: true, optional: true, required: false
  private _physicalProtectionReady?: boolean | cdktf.IResolvable; 
  public get physicalProtectionReady() {
    return this.getBooleanAttribute('physical_protection_ready');
  }
  public set physicalProtectionReady(value: boolean | cdktf.IResolvable) {
    this._physicalProtectionReady = value;
  }
  public resetPhysicalProtectionReady() {
    this._physicalProtectionReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalProtectionReadyInput() {
    return this._physicalProtectionReady;
  }

  // physical_ready - computed: true, optional: true, required: false
  private _physicalReady?: boolean | cdktf.IResolvable; 
  public get physicalReady() {
    return this.getBooleanAttribute('physical_ready');
  }
  public set physicalReady(value: boolean | cdktf.IResolvable) {
    this._physicalReady = value;
  }
  public resetPhysicalReady() {
    this._physicalReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalReadyInput() {
    return this._physicalReady;
  }

  // shadow_refs - computed: true, optional: true, required: false
  private _shadowRefs?: number; 
  public get shadowRefs() {
    return this.getNumberAttribute('shadow_refs');
  }
  public set shadowRefs(value: number) {
    this._shadowRefs = value;
  }
  public resetShadowRefs() {
    this._shadowRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowRefsInput() {
    return this._shadowRefs;
  }

  // shadow_refs_ready - computed: true, optional: true, required: false
  private _shadowRefsReady?: boolean | cdktf.IResolvable; 
  public get shadowRefsReady() {
    return this.getBooleanAttribute('shadow_refs_ready');
  }
  public set shadowRefsReady(value: boolean | cdktf.IResolvable) {
    this._shadowRefsReady = value;
  }
  public resetShadowRefsReady() {
    this._shadowRefsReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowRefsReadyInput() {
    return this._shadowRefsReady;
  }
}
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas {
  /**
  * If true, SMB shares using the quota directory see the quota thresholds as share size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#container DataPowerscaleFilesystem#container}
  */
  readonly container?: boolean | cdktf.IResolvable;
  /**
  * True if the quota provides enforcement, otherwise a accounting quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#enforced DataPowerscaleFilesystem#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * Quota Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#id DataPowerscaleFilesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path of quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#path DataPowerscaleFilesystem#path}
  */
  readonly path?: string;
  /**
  * The type of quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#type DataPowerscaleFilesystem#type}
  */
  readonly type?: string;
  /**
  * Usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#usage DataPowerscaleFilesystem#usage}
  */
  readonly usage?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.booleanToTerraform(struct!.container),
    enforced: cdktf.booleanToTerraform(struct!.enforced),
    id: cdktf.stringToTerraform(struct!.id),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
    usage: dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsageToTerraform(struct!.usage),
  }
}


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.booleanToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforced: {
      value: cdktf.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    usage: {
      value: dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsageToHclTerraform(struct!.usage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._enforced = undefined;
      this._id = undefined;
      this._path = undefined;
      this._type = undefined;
      this._usage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._enforced = value.enforced;
      this._id = value.id;
      this._path = value.path;
      this._type = value.type;
      this._usage.internalValue = value.usage;
    }
  }

  // container - computed: true, optional: true, required: false
  private _container?: boolean | cdktf.IResolvable; 
  public get container() {
    return this.getBooleanAttribute('container');
  }
  public set container(value: boolean | cdktf.IResolvable) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // enforced - computed: true, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
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

  // path - computed: true, optional: true, required: false
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

  // usage - computed: true, optional: true, required: false
  private _usage = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsageOutputReference(this, "usage");
  public get usage() {
    return this._usage;
  }
  public putUsage(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasUsage) {
    this._usage.internalValue = value;
  }
  public resetUsage() {
    this._usage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage.internalValue;
  }
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasOutputReference {
    return new DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots {
  /**
  * The name of the alias, none for real snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#alias DataPowerscaleFilesystem#alias}
  */
  readonly alias?: string;
  /**
  * The Unix Epoch time the snapshot was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#created DataPowerscaleFilesystem#created}
  */
  readonly created?: number;
  /**
  * The Unix Epoch time the snapshot will expire and be eligible for automatic deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#expires DataPowerscaleFilesystem#expires}
  */
  readonly expires?: number;
  /**
  * True if the snapshot has one or more locks present see, see the locks subresource of a snapshot for a list of locks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#has_locks DataPowerscaleFilesystem#has_locks}
  */
  readonly hasLocks?: boolean | cdktf.IResolvable;
  /**
  * The system ID given to the snapshot. This is useful for tracking the status of delete pending snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#id DataPowerscaleFilesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The user or system supplied snapshot name. This will be null for snapshots pending delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#name DataPowerscaleFilesystem#name}
  */
  readonly name?: string;
  /**
  * The /ifs path snapshotted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#path DataPowerscaleFilesystem#path}
  */
  readonly path?: string;
  /**
  * Percentage of /ifs used for storing this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#pct_filesystem DataPowerscaleFilesystem#pct_filesystem}
  */
  readonly pctFilesystem?: number;
  /**
  * Percentage of configured snapshot reserved used for storing this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#pct_reserve DataPowerscaleFilesystem#pct_reserve}
  */
  readonly pctReserve?: number;
  /**
  * The name of the schedule used to create this snapshot, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#schedule DataPowerscaleFilesystem#schedule}
  */
  readonly schedule?: string;
  /**
  * The amount of shadow bytes referred to by this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#shadow_bytes DataPowerscaleFilesystem#shadow_bytes}
  */
  readonly shadowBytes?: number;
  /**
  * The amount of storage in bytes used to store this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#size DataPowerscaleFilesystem#size}
  */
  readonly size?: number;
  /**
  * Snapshot state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#state DataPowerscaleFilesystem#state}
  */
  readonly state?: string;
  /**
  * The ID of the snapshot pointed to if this is an alias. 18446744073709551615 (max uint64) is returned for an alias to the live filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#target_id DataPowerscaleFilesystem#target_id}
  */
  readonly targetId?: number;
  /**
  * The name of the snapshot pointed to if this is an alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#target_name DataPowerscaleFilesystem#target_name}
  */
  readonly targetName?: string;
}

export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    created: cdktf.numberToTerraform(struct!.created),
    expires: cdktf.numberToTerraform(struct!.expires),
    has_locks: cdktf.booleanToTerraform(struct!.hasLocks),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    pct_filesystem: cdktf.numberToTerraform(struct!.pctFilesystem),
    pct_reserve: cdktf.numberToTerraform(struct!.pctReserve),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    shadow_bytes: cdktf.numberToTerraform(struct!.shadowBytes),
    size: cdktf.numberToTerraform(struct!.size),
    state: cdktf.stringToTerraform(struct!.state),
    target_id: cdktf.numberToTerraform(struct!.targetId),
    target_name: cdktf.stringToTerraform(struct!.targetName),
  }
}


export function dataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created: {
      value: cdktf.numberToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expires: {
      value: cdktf.numberToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    has_locks: {
      value: cdktf.booleanToHclTerraform(struct!.hasLocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pct_filesystem: {
      value: cdktf.numberToHclTerraform(struct!.pctFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pct_reserve: {
      value: cdktf.numberToHclTerraform(struct!.pctReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shadow_bytes: {
      value: cdktf.numberToHclTerraform(struct!.shadowBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_id: {
      value: cdktf.numberToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._hasLocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasLocks = this._hasLocks;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pctFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pctFilesystem = this._pctFilesystem;
    }
    if (this._pctReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.pctReserve = this._pctReserve;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._shadowBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowBytes = this._shadowBytes;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._created = undefined;
      this._expires = undefined;
      this._hasLocks = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
      this._pctFilesystem = undefined;
      this._pctReserve = undefined;
      this._schedule = undefined;
      this._shadowBytes = undefined;
      this._size = undefined;
      this._state = undefined;
      this._targetId = undefined;
      this._targetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._created = value.created;
      this._expires = value.expires;
      this._hasLocks = value.hasLocks;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
      this._pctFilesystem = value.pctFilesystem;
      this._pctReserve = value.pctReserve;
      this._schedule = value.schedule;
      this._shadowBytes = value.shadowBytes;
      this._size = value.size;
      this._state = value.state;
      this._targetId = value.targetId;
      this._targetName = value.targetName;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // created - computed: true, optional: true, required: false
  private _created?: number; 
  public get created() {
    return this.getNumberAttribute('created');
  }
  public set created(value: number) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // expires - computed: true, optional: true, required: false
  private _expires?: number; 
  public get expires() {
    return this.getNumberAttribute('expires');
  }
  public set expires(value: number) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // has_locks - computed: true, optional: true, required: false
  private _hasLocks?: boolean | cdktf.IResolvable; 
  public get hasLocks() {
    return this.getBooleanAttribute('has_locks');
  }
  public set hasLocks(value: boolean | cdktf.IResolvable) {
    this._hasLocks = value;
  }
  public resetHasLocks() {
    this._hasLocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasLocksInput() {
    return this._hasLocks;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // path - computed: true, optional: true, required: false
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

  // pct_filesystem - computed: true, optional: true, required: false
  private _pctFilesystem?: number; 
  public get pctFilesystem() {
    return this.getNumberAttribute('pct_filesystem');
  }
  public set pctFilesystem(value: number) {
    this._pctFilesystem = value;
  }
  public resetPctFilesystem() {
    this._pctFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pctFilesystemInput() {
    return this._pctFilesystem;
  }

  // pct_reserve - computed: true, optional: true, required: false
  private _pctReserve?: number; 
  public get pctReserve() {
    return this.getNumberAttribute('pct_reserve');
  }
  public set pctReserve(value: number) {
    this._pctReserve = value;
  }
  public resetPctReserve() {
    this._pctReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pctReserveInput() {
    return this._pctReserve;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // shadow_bytes - computed: true, optional: true, required: false
  private _shadowBytes?: number; 
  public get shadowBytes() {
    return this.getNumberAttribute('shadow_bytes');
  }
  public set shadowBytes(value: number) {
    this._shadowBytes = value;
  }
  public resetShadowBytes() {
    this._shadowBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowBytesInput() {
    return this._shadowBytes;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: number; 
  public get targetId() {
    return this.getNumberAttribute('target_id');
  }
  public set targetId(value: number) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }
}

export class DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsOutputReference {
    return new DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilesystemFileSystemsDetails {
  /**
  * FileSystems Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#file_system_attributes DataPowerscaleFilesystem#file_system_attributes}
  */
  readonly fileSystemAttributes?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes[] | cdktf.IResolvable;
  /**
  * Filesystem acl. Shows the access control list for the FileSystem(Namespace directory)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#file_system_namespace_acl DataPowerscaleFilesystem#file_system_namespace_acl}
  */
  readonly fileSystemNamespaceAcl?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl;
  /**
  * Filesystem quotas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#file_system_quotas DataPowerscaleFilesystem#file_system_quotas}
  */
  readonly fileSystemQuotas?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas[] | cdktf.IResolvable;
  /**
  * Filesystem snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#file_system_snapshots DataPowerscaleFilesystem#file_system_snapshots}
  */
  readonly fileSystemSnapshots?: DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots[] | cdktf.IResolvable;
}

export function dataPowerscaleFilesystemFileSystemsDetailsToTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_attributes: cdktf.listMapper(dataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesToTerraform, false)(struct!.fileSystemAttributes),
    file_system_namespace_acl: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclToTerraform(struct!.fileSystemNamespaceAcl),
    file_system_quotas: cdktf.listMapper(dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasToTerraform, false)(struct!.fileSystemQuotas),
    file_system_snapshots: cdktf.listMapper(dataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsToTerraform, false)(struct!.fileSystemSnapshots),
  }
}


export function dataPowerscaleFilesystemFileSystemsDetailsToHclTerraform(struct?: DataPowerscaleFilesystemFileSystemsDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_attributes: {
      value: cdktf.listMapperHcl(dataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesToHclTerraform, false)(struct!.fileSystemAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesList",
    },
    file_system_namespace_acl: {
      value: dataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclToHclTerraform(struct!.fileSystemNamespaceAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl",
    },
    file_system_quotas: {
      value: cdktf.listMapperHcl(dataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasToHclTerraform, false)(struct!.fileSystemQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasList",
    },
    file_system_snapshots: {
      value: cdktf.listMapperHcl(dataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsToHclTerraform, false)(struct!.fileSystemSnapshots),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleFilesystemFileSystemsDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilesystemFileSystemsDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAttributes = this._fileSystemAttributes?.internalValue;
    }
    if (this._fileSystemNamespaceAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemNamespaceAcl = this._fileSystemNamespaceAcl?.internalValue;
    }
    if (this._fileSystemQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemQuotas = this._fileSystemQuotas?.internalValue;
    }
    if (this._fileSystemSnapshots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemSnapshots = this._fileSystemSnapshots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilesystemFileSystemsDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemAttributes.internalValue = undefined;
      this._fileSystemNamespaceAcl.internalValue = undefined;
      this._fileSystemQuotas.internalValue = undefined;
      this._fileSystemSnapshots.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemAttributes.internalValue = value.fileSystemAttributes;
      this._fileSystemNamespaceAcl.internalValue = value.fileSystemNamespaceAcl;
      this._fileSystemQuotas.internalValue = value.fileSystemQuotas;
      this._fileSystemSnapshots.internalValue = value.fileSystemSnapshots;
    }
  }

  // file_system_attributes - computed: true, optional: true, required: false
  private _fileSystemAttributes = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributesList(this, "file_system_attributes", false);
  public get fileSystemAttributes() {
    return this._fileSystemAttributes;
  }
  public putFileSystemAttributes(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemAttributes[] | cdktf.IResolvable) {
    this._fileSystemAttributes.internalValue = value;
  }
  public resetFileSystemAttributes() {
    this._fileSystemAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAttributesInput() {
    return this._fileSystemAttributes.internalValue;
  }

  // file_system_namespace_acl - computed: true, optional: true, required: false
  private _fileSystemNamespaceAcl = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAclOutputReference(this, "file_system_namespace_acl");
  public get fileSystemNamespaceAcl() {
    return this._fileSystemNamespaceAcl;
  }
  public putFileSystemNamespaceAcl(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemNamespaceAcl) {
    this._fileSystemNamespaceAcl.internalValue = value;
  }
  public resetFileSystemNamespaceAcl() {
    this._fileSystemNamespaceAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNamespaceAclInput() {
    return this._fileSystemNamespaceAcl.internalValue;
  }

  // file_system_quotas - computed: true, optional: true, required: false
  private _fileSystemQuotas = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotasList(this, "file_system_quotas", false);
  public get fileSystemQuotas() {
    return this._fileSystemQuotas;
  }
  public putFileSystemQuotas(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemQuotas[] | cdktf.IResolvable) {
    this._fileSystemQuotas.internalValue = value;
  }
  public resetFileSystemQuotas() {
    this._fileSystemQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemQuotasInput() {
    return this._fileSystemQuotas.internalValue;
  }

  // file_system_snapshots - computed: true, optional: true, required: false
  private _fileSystemSnapshots = new DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshotsList(this, "file_system_snapshots", false);
  public get fileSystemSnapshots() {
    return this._fileSystemSnapshots;
  }
  public putFileSystemSnapshots(value: DataPowerscaleFilesystemFileSystemsDetailsFileSystemSnapshots[] | cdktf.IResolvable) {
    this._fileSystemSnapshots.internalValue = value;
  }
  public resetFileSystemSnapshots() {
    this._fileSystemSnapshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemSnapshotsInput() {
    return this._fileSystemSnapshots.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem powerscale_filesystem}
*/
export class DataPowerscaleFilesystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_filesystem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleFilesystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleFilesystem to import
  * @param importFromId The id of the existing DataPowerscaleFilesystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleFilesystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_filesystem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filesystem powerscale_filesystem} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleFilesystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleFilesystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_filesystem',
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
    this._directoryPath = config.directoryPath;
    this._fileSystemsDetails.internalValue = config.fileSystemsDetails;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_path - computed: true, optional: true, required: false
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  public resetDirectoryPath() {
    this._directoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_systems_details - computed: true, optional: true, required: false
  private _fileSystemsDetails = new DataPowerscaleFilesystemFileSystemsDetailsOutputReference(this, "file_systems_details");
  public get fileSystemsDetails() {
    return this._fileSystemsDetails;
  }
  public putFileSystemsDetails(value: DataPowerscaleFilesystemFileSystemsDetails) {
    this._fileSystemsDetails.internalValue = value;
  }
  public resetFileSystemsDetails() {
    this._fileSystemsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemsDetailsInput() {
    return this._fileSystemsDetails.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_path: cdktf.stringToTerraform(this._directoryPath),
      file_systems_details: dataPowerscaleFilesystemFileSystemsDetailsToTerraform(this._fileSystemsDetails.internalValue),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_path: {
        value: cdktf.stringToHclTerraform(this._directoryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_systems_details: {
        value: dataPowerscaleFilesystemFileSystemsDetailsToHclTerraform(this._fileSystemsDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleFilesystemFileSystemsDetails",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
