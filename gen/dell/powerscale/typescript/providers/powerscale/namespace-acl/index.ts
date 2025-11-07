// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customer's raw configuration of the JSON array of access rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#acl_custom NamespaceAcl#acl_custom}
  */
  readonly aclCustom?: NamespaceAclAclCustom[] | cdktf.IResolvable;
  /**
  * Provides the JSON object for the group persona of the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#group NamespaceAcl#group}
  */
  readonly group?: NamespaceAclGroup;
  /**
  * Indicate the namespace to set/get acl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#namespace NamespaceAcl#namespace}
  */
  readonly namespace: string;
  /**
  * Indicates that the operation is on the access point instead of the store path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#nsaccess NamespaceAcl#nsaccess}
  */
  readonly nsaccess?: boolean | cdktf.IResolvable;
  /**
  * Provides the JSON object for the group persona of the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#owner NamespaceAcl#owner}
  */
  readonly owner?: NamespaceAclOwner;
  /**
  * Indicates the zone of the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#zone NamespaceAcl#zone}
  */
  readonly zone?: string;
}
export interface NamespaceAclAclTrustee {
}

export function namespaceAclAclTrusteeToTerraform(struct?: NamespaceAclAclTrustee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function namespaceAclAclTrusteeToHclTerraform(struct?: NamespaceAclAclTrustee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NamespaceAclAclTrusteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceAclAclTrustee | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceAclAclTrustee | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface NamespaceAclAcl {
}

export function namespaceAclAclToTerraform(struct?: NamespaceAclAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function namespaceAclAclToHclTerraform(struct?: NamespaceAclAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NamespaceAclAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceAclAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceAclAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessrights - computed: true, optional: false, required: false
  public get accessrights() {
    return this.getListAttribute('accessrights');
  }

  // accesstype - computed: true, optional: false, required: false
  public get accesstype() {
    return this.getStringAttribute('accesstype');
  }

  // inherit_flags - computed: true, optional: false, required: false
  public get inheritFlags() {
    return this.getListAttribute('inherit_flags');
  }

  // op - computed: true, optional: false, required: false
  public get op() {
    return this.getStringAttribute('op');
  }

  // trustee - computed: true, optional: false, required: false
  private _trustee = new NamespaceAclAclTrusteeOutputReference(this, "trustee");
  public get trustee() {
    return this._trustee;
  }
}

export class NamespaceAclAclList extends cdktf.ComplexList {

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
  public get(index: number): NamespaceAclAclOutputReference {
    return new NamespaceAclAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceAclAclCustomTrustee {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0' or 'GID:0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#id NamespaceAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#name NamespaceAcl#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#type NamespaceAcl#type}
  */
  readonly type?: string;
}

export function namespaceAclAclCustomTrusteeToTerraform(struct?: NamespaceAclAclCustomTrustee | cdktf.IResolvable): any {
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


export function namespaceAclAclCustomTrusteeToHclTerraform(struct?: NamespaceAclAclCustomTrustee | cdktf.IResolvable): any {
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

export class NamespaceAclAclCustomTrusteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceAclAclCustomTrustee | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceAclAclCustomTrustee | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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
export interface NamespaceAclAclCustom {
  /**
  * Specifies the access control permissions for a specific user or group. Options: std_delete, std_read_dac, std_write_dac, std_write_owner, std_synchronize, std_required, generic_all, generic_read, generic_write, generic_exec, dir_gen_all, dir_gen_read, dir_gen_write, dir_gen_execute, file_gen_all, file_gen_read, file_gen_write, file_gen_execute, modify, file_read, file_write, append, execute, file_read_attr, file_write_attr, file_read_ext_attr, file_write_ext_attr, delete_child, list, add_file, add_subdir, traverse, dir_read_attr, dir_write_attr, dir_read_ext_attr, dir_write_ext_attr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#accessrights NamespaceAcl#accessrights}
  */
  readonly accessrights?: string[];
  /**
  * Grants or denies access control permissions. Options: allow, deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#accesstype NamespaceAcl#accesstype}
  */
  readonly accesstype: string;
  /**
  * Grants or denies access control permissions. Options: object_inherit, container_inherit, inherit_only, no_prop_inherit, inherited_ace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#inherit_flags NamespaceAcl#inherit_flags}
  */
  readonly inheritFlags?: string[];
  /**
  * Operations for updating access control permissions. Unnecessary for access right replacing scenario
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#op NamespaceAcl#op}
  */
  readonly op?: string;
  /**
  * Provides the JSON object for the group persona of the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#trustee NamespaceAcl#trustee}
  */
  readonly trustee: NamespaceAclAclCustomTrustee;
}

export function namespaceAclAclCustomToTerraform(struct?: NamespaceAclAclCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessrights: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessrights),
    accesstype: cdktf.stringToTerraform(struct!.accesstype),
    inherit_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inheritFlags),
    op: cdktf.stringToTerraform(struct!.op),
    trustee: namespaceAclAclCustomTrusteeToTerraform(struct!.trustee),
  }
}


export function namespaceAclAclCustomToHclTerraform(struct?: NamespaceAclAclCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessrights: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessrights),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    accesstype: {
      value: cdktf.stringToHclTerraform(struct!.accesstype),
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
      value: namespaceAclAclCustomTrusteeToHclTerraform(struct!.trustee),
      isBlock: true,
      type: "struct",
      storageClassType: "NamespaceAclAclCustomTrustee",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceAclAclCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceAclAclCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessrights !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessrights = this._accessrights;
    }
    if (this._accesstype !== undefined) {
      hasAnyValues = true;
      internalValueResult.accesstype = this._accesstype;
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

  public set internalValue(value: NamespaceAclAclCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessrights = undefined;
      this._accesstype = undefined;
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
      this._accessrights = value.accessrights;
      this._accesstype = value.accesstype;
      this._inheritFlags = value.inheritFlags;
      this._op = value.op;
      this._trustee.internalValue = value.trustee;
    }
  }

  // accessrights - computed: false, optional: true, required: false
  private _accessrights?: string[]; 
  public get accessrights() {
    return this.getListAttribute('accessrights');
  }
  public set accessrights(value: string[]) {
    this._accessrights = value;
  }
  public resetAccessrights() {
    this._accessrights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessrightsInput() {
    return this._accessrights;
  }

  // accesstype - computed: false, optional: false, required: true
  private _accesstype?: string; 
  public get accesstype() {
    return this.getStringAttribute('accesstype');
  }
  public set accesstype(value: string) {
    this._accesstype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accesstypeInput() {
    return this._accesstype;
  }

  // inherit_flags - computed: false, optional: true, required: false
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

  // op - computed: false, optional: true, required: false
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

  // trustee - computed: false, optional: false, required: true
  private _trustee = new NamespaceAclAclCustomTrusteeOutputReference(this, "trustee");
  public get trustee() {
    return this._trustee;
  }
  public putTrustee(value: NamespaceAclAclCustomTrustee) {
    this._trustee.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trusteeInput() {
    return this._trustee.internalValue;
  }
}

export class NamespaceAclAclCustomList extends cdktf.ComplexList {
  public internalValue? : NamespaceAclAclCustom[] | cdktf.IResolvable

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
  public get(index: number): NamespaceAclAclCustomOutputReference {
    return new NamespaceAclAclCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceAclGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#id NamespaceAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#name NamespaceAcl#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#type NamespaceAcl#type}
  */
  readonly type?: string;
}

export function namespaceAclGroupToTerraform(struct?: NamespaceAclGroup | cdktf.IResolvable): any {
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


export function namespaceAclGroupToHclTerraform(struct?: NamespaceAclGroup | cdktf.IResolvable): any {
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

export class NamespaceAclGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceAclGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceAclGroup | cdktf.IResolvable | undefined) {
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
export interface NamespaceAclOwner {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#id NamespaceAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#name NamespaceAcl#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#type NamespaceAcl#type}
  */
  readonly type?: string;
}

export function namespaceAclOwnerToTerraform(struct?: NamespaceAclOwner | cdktf.IResolvable): any {
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


export function namespaceAclOwnerToHclTerraform(struct?: NamespaceAclOwner | cdktf.IResolvable): any {
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

export class NamespaceAclOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceAclOwner | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceAclOwner | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl powerscale_namespace_acl}
*/
export class NamespaceAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_namespace_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamespaceAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamespaceAcl to import
  * @param importFromId The id of the existing NamespaceAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamespaceAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_namespace_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/namespace_acl powerscale_namespace_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceAclConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceAclConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_namespace_acl',
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
    this._aclCustom.internalValue = config.aclCustom;
    this._group.internalValue = config.group;
    this._namespace = config.namespace;
    this._nsaccess = config.nsaccess;
    this._owner.internalValue = config.owner;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: false, required: false
  private _acl = new NamespaceAclAclList(this, "acl", false);
  public get acl() {
    return this._acl;
  }

  // acl_custom - computed: false, optional: true, required: false
  private _aclCustom = new NamespaceAclAclCustomList(this, "acl_custom", false);
  public get aclCustom() {
    return this._aclCustom;
  }
  public putAclCustom(value: NamespaceAclAclCustom[] | cdktf.IResolvable) {
    this._aclCustom.internalValue = value;
  }
  public resetAclCustom() {
    this._aclCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclCustomInput() {
    return this._aclCustom.internalValue;
  }

  // authoritative - computed: true, optional: false, required: false
  public get authoritative() {
    return this.getStringAttribute('authoritative');
  }

  // group - computed: true, optional: true, required: false
  private _group = new NamespaceAclGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: NamespaceAclGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // nsaccess - computed: false, optional: true, required: false
  private _nsaccess?: boolean | cdktf.IResolvable; 
  public get nsaccess() {
    return this.getBooleanAttribute('nsaccess');
  }
  public set nsaccess(value: boolean | cdktf.IResolvable) {
    this._nsaccess = value;
  }
  public resetNsaccess() {
    this._nsaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsaccessInput() {
    return this._nsaccess;
  }

  // owner - computed: true, optional: true, required: false
  private _owner = new NamespaceAclOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: NamespaceAclOwner) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_custom: cdktf.listMapper(namespaceAclAclCustomToTerraform, false)(this._aclCustom.internalValue),
      group: namespaceAclGroupToTerraform(this._group.internalValue),
      namespace: cdktf.stringToTerraform(this._namespace),
      nsaccess: cdktf.booleanToTerraform(this._nsaccess),
      owner: namespaceAclOwnerToTerraform(this._owner.internalValue),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_custom: {
        value: cdktf.listMapperHcl(namespaceAclAclCustomToHclTerraform, false)(this._aclCustom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceAclAclCustomList",
      },
      group: {
        value: namespaceAclGroupToHclTerraform(this._group.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceAclGroup",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsaccess: {
        value: cdktf.booleanToHclTerraform(this._nsaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner: {
        value: namespaceAclOwnerToHclTerraform(this._owner.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceAclOwner",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
