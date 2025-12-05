import * as cdktf from 'cdktf';
import { GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateLinksList,
GroupContentAdministeredSystemsAbstractProvisionedLdapAttributes,
groupContentAdministeredSystemsAbstractProvisionedLdapAttributesToTerraform,
groupContentAdministeredSystemsAbstractProvisionedLdapAttributesToHclTerraform,
GroupContentAdministeredSystemsAbstractProvisionedLdapAttributesList } from './structs400'
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissionsToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissionsOutputReference {
    return new GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable): any {
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
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
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

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks {
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksOutputReference {
    return new GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsOutputReference {
    return new GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable): any {
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
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
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

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinks {
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinksToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinksToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference {
    return new GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissionsToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference {
    return new GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable): any {
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
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
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

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsAbstractProvisionedLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupContentAdministeredSystemsAbstractProvisionedLdapAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#base_dn Group#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#bind_dn Group#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#bind_password Group#bind_password}
  */
  readonly bindPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_certificate Group#client_certificate}
  */
  readonly clientCertificate?: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#failover_host Group#failover_host}
  */
  readonly failoverHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#failover_trusted_certificate Group#failover_trusted_certificate}
  */
  readonly failoverTrustedCertificate?: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#group_dn Group#group_dn}
  */
  readonly groupDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#host Group#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#object_classes Group#object_classes}
  */
  readonly objectClasses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#port Group#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#service_account_dn Group#service_account_dn}
  */
  readonly serviceAccountDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#ssh_public_key_support Group#ssh_public_key_support}
  */
  readonly sshPublicKeySupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#tls Group#tls}
  */
  readonly tls: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#trusted_certificate Group#trusted_certificate}
  */
  readonly trustedCertificate?: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#user_dn Group#user_dn}
  */
  readonly userDn?: string;
}

export function groupContentAdministeredSystemsAbstractProvisionedLdapToTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(groupContentAdministeredSystemsAbstractProvisionedLdapAttributesToTerraform, false)(struct!.attributes),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    bind_dn: cdktf.stringToTerraform(struct!.bindDn),
    bind_password: cdktf.stringToTerraform(struct!.bindPassword),
    client_certificate: groupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateToTerraform(struct!.clientCertificate),
    failover_host: cdktf.stringToTerraform(struct!.failoverHost),
    failover_trusted_certificate: groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateToTerraform(struct!.failoverTrustedCertificate),
    group_dn: cdktf.stringToTerraform(struct!.groupDn),
    host: cdktf.stringToTerraform(struct!.host),
    object_classes: cdktf.stringToTerraform(struct!.objectClasses),
    port: cdktf.numberToTerraform(struct!.port),
    service_account_dn: cdktf.stringToTerraform(struct!.serviceAccountDn),
    ssh_public_key_support: cdktf.stringToTerraform(struct!.sshPublicKeySupport),
    tls: cdktf.stringToTerraform(struct!.tls),
    trusted_certificate: groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateToTerraform(struct!.trustedCertificate),
    user_dn: cdktf.stringToTerraform(struct!.userDn),
  }
}


export function groupContentAdministeredSystemsAbstractProvisionedLdapToHclTerraform(struct?: GroupContentAdministeredSystemsAbstractProvisionedLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(groupContentAdministeredSystemsAbstractProvisionedLdapAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "GroupContentAdministeredSystemsAbstractProvisionedLdapAttributesList",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.bindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_password: {
      value: cdktf.stringToHclTerraform(struct!.bindPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: groupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate",
    },
    failover_host: {
      value: cdktf.stringToHclTerraform(struct!.failoverHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_trusted_certificate: {
      value: groupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateToHclTerraform(struct!.failoverTrustedCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate",
    },
    group_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_classes: {
      value: cdktf.stringToHclTerraform(struct!.objectClasses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_dn: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key_support: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKeySupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_certificate: {
      value: groupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateToHclTerraform(struct!.trustedCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate",
    },
    user_dn: {
      value: cdktf.stringToHclTerraform(struct!.userDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsAbstractProvisionedLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsAbstractProvisionedLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._bindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindDn = this._bindDn;
    }
    if (this._bindPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPassword = this._bindPassword;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._failoverHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverHost = this._failoverHost;
    }
    if (this._failoverTrustedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTrustedCertificate = this._failoverTrustedCertificate?.internalValue;
    }
    if (this._groupDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDn = this._groupDn;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._objectClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectClasses = this._objectClasses;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceAccountDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountDn = this._serviceAccountDn;
    }
    if (this._sshPublicKeySupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeySupport = this._sshPublicKeySupport;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._trustedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificate = this._trustedCertificate?.internalValue;
    }
    if (this._userDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDn = this._userDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsAbstractProvisionedLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._baseDn = undefined;
      this._bindDn = undefined;
      this._bindPassword = undefined;
      this._clientCertificate.internalValue = undefined;
      this._failoverHost = undefined;
      this._failoverTrustedCertificate.internalValue = undefined;
      this._groupDn = undefined;
      this._host = undefined;
      this._objectClasses = undefined;
      this._port = undefined;
      this._serviceAccountDn = undefined;
      this._sshPublicKeySupport = undefined;
      this._tls = undefined;
      this._trustedCertificate.internalValue = undefined;
      this._userDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._baseDn = value.baseDn;
      this._bindDn = value.bindDn;
      this._bindPassword = value.bindPassword;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._failoverHost = value.failoverHost;
      this._failoverTrustedCertificate.internalValue = value.failoverTrustedCertificate;
      this._groupDn = value.groupDn;
      this._host = value.host;
      this._objectClasses = value.objectClasses;
      this._port = value.port;
      this._serviceAccountDn = value.serviceAccountDn;
      this._sshPublicKeySupport = value.sshPublicKeySupport;
      this._tls = value.tls;
      this._trustedCertificate.internalValue = value.trustedCertificate;
      this._userDn = value.userDn;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new GroupContentAdministeredSystemsAbstractProvisionedLdapAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GroupContentAdministeredSystemsAbstractProvisionedLdapAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // base_dn - computed: true, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_dn - computed: true, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: true, optional: true, required: false
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  public resetBindPassword() {
    this._bindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GroupContentAdministeredSystemsAbstractProvisionedLdapClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // failover_host - computed: true, optional: true, required: false
  private _failoverHost?: string; 
  public get failoverHost() {
    return this.getStringAttribute('failover_host');
  }
  public set failoverHost(value: string) {
    this._failoverHost = value;
  }
  public resetFailoverHost() {
    this._failoverHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverHostInput() {
    return this._failoverHost;
  }

  // failover_trusted_certificate - computed: true, optional: true, required: false
  private _failoverTrustedCertificate = new GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificateOutputReference(this, "failover_trusted_certificate");
  public get failoverTrustedCertificate() {
    return this._failoverTrustedCertificate;
  }
  public putFailoverTrustedCertificate(value: GroupContentAdministeredSystemsAbstractProvisionedLdapFailoverTrustedCertificate) {
    this._failoverTrustedCertificate.internalValue = value;
  }
  public resetFailoverTrustedCertificate() {
    this._failoverTrustedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTrustedCertificateInput() {
    return this._failoverTrustedCertificate.internalValue;
  }

  // group_dn - computed: true, optional: true, required: false
  private _groupDn?: string; 
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }
  public set groupDn(value: string) {
    this._groupDn = value;
  }
  public resetGroupDn() {
    this._groupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // host - computed: true, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // object_classes - computed: true, optional: true, required: false
  private _objectClasses?: string; 
  public get objectClasses() {
    return this.getStringAttribute('object_classes');
  }
  public set objectClasses(value: string) {
    this._objectClasses = value;
  }
  public resetObjectClasses() {
    this._objectClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectClassesInput() {
    return this._objectClasses;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_account_dn - computed: true, optional: true, required: false
  private _serviceAccountDn?: string; 
  public get serviceAccountDn() {
    return this.getStringAttribute('service_account_dn');
  }
  public set serviceAccountDn(value: string) {
    this._serviceAccountDn = value;
  }
  public resetServiceAccountDn() {
    this._serviceAccountDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountDnInput() {
    return this._serviceAccountDn;
  }

  // ssh_public_key_support - computed: true, optional: true, required: false
  private _sshPublicKeySupport?: string; 
  public get sshPublicKeySupport() {
    return this.getStringAttribute('ssh_public_key_support');
  }
  public set sshPublicKeySupport(value: string) {
    this._sshPublicKeySupport = value;
  }
  public resetSshPublicKeySupport() {
    this._sshPublicKeySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeySupportInput() {
    return this._sshPublicKeySupport;
  }

  // tls - computed: true, optional: false, required: true
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // trusted_certificate - computed: true, optional: true, required: false
  private _trustedCertificate = new GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificateOutputReference(this, "trusted_certificate");
  public get trustedCertificate() {
    return this._trustedCertificate;
  }
  public putTrustedCertificate(value: GroupContentAdministeredSystemsAbstractProvisionedLdapTrustedCertificate) {
    this._trustedCertificate.internalValue = value;
  }
  public resetTrustedCertificate() {
    this._trustedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificateInput() {
    return this._trustedCertificate.internalValue;
  }

  // user_dn - computed: true, optional: true, required: false
  private _userDn?: string; 
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
  public set userDn(value: string) {
    this._userDn = value;
  }
  public resetUserDn() {
    this._userDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnInput() {
    return this._userDn;
  }
}
export interface GroupContentAdministeredSystemsCleanupPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#days Group#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#months Group#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#years Group#years}
  */
  readonly years?: number;
}

export function groupContentAdministeredSystemsCleanupPeriodToTerraform(struct?: GroupContentAdministeredSystemsCleanupPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    months: cdktf.numberToTerraform(struct!.months),
    years: cdktf.numberToTerraform(struct!.years),
  }
}


export function groupContentAdministeredSystemsCleanupPeriodToHclTerraform(struct?: GroupContentAdministeredSystemsCleanupPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    years: {
      value: cdktf.numberToHclTerraform(struct!.years),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsCleanupPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsCleanupPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._years !== undefined) {
      hasAnyValues = true;
      internalValueResult.years = this._years;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsCleanupPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._months = undefined;
      this._years = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._months = value.months;
      this._years = value.years;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // months - computed: true, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // years - computed: true, optional: true, required: false
  private _years?: number; 
  public get years() {
    return this.getNumberAttribute('years');
  }
  public set years(value: number) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }
}
export interface GroupContentAdministeredSystemsContentAdministratorLinks {
}

export function groupContentAdministeredSystemsContentAdministratorLinksToTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsContentAdministratorLinksToHclTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsContentAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsContentAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsContentAdministratorLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsContentAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsContentAdministratorLinksOutputReference {
    return new GroupContentAdministeredSystemsContentAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinks {
}

export function groupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinksToTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinksToHclTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinksOutputReference {
    return new GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissionsToTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference {
    return new GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsContentAdministratorOrganizationalUnitToTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsContentAdministratorOrganizationalUnitToHclTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsContentAdministratorPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsContentAdministratorPermissionsToTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsContentAdministratorPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsContentAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsContentAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsContentAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsContentAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsContentAdministratorPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsContentAdministratorPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsContentAdministratorPermissionsOutputReference {
    return new GroupContentAdministeredSystemsContentAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsContentAdministrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit;
}

export function groupContentAdministeredSystemsContentAdministratorToTerraform(struct?: GroupContentAdministeredSystemsContentAdministrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupContentAdministeredSystemsContentAdministratorOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupContentAdministeredSystemsContentAdministratorToHclTerraform(struct?: GroupContentAdministeredSystemsContentAdministrator | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupContentAdministeredSystemsContentAdministratorOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsContentAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsContentAdministrator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsContentAdministrator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsContentAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupContentAdministeredSystemsContentAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupContentAdministeredSystemsContentAdministratorOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsContentAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsLinks {
}

export function groupContentAdministeredSystemsLinksToTerraform(struct?: GroupContentAdministeredSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsLinksToHclTerraform(struct?: GroupContentAdministeredSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsLinksOutputReference {
    return new GroupContentAdministeredSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsOrganizationalUnitLinks {
}

export function groupContentAdministeredSystemsOrganizationalUnitLinksToTerraform(struct?: GroupContentAdministeredSystemsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsOrganizationalUnitLinksToHclTerraform(struct?: GroupContentAdministeredSystemsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsOrganizationalUnitLinksOutputReference {
    return new GroupContentAdministeredSystemsOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsOrganizationalUnitPermissionsToTerraform(struct?: GroupContentAdministeredSystemsOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsOrganizationalUnitPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsOrganizationalUnitPermissionsOutputReference {
    return new GroupContentAdministeredSystemsOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsOrganizationalUnitToTerraform(struct?: GroupContentAdministeredSystemsOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsOrganizationalUnitToHclTerraform(struct?: GroupContentAdministeredSystemsOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsOrganizationalUnit | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsOwnerLinks {
}

export function groupContentAdministeredSystemsOwnerLinksToTerraform(struct?: GroupContentAdministeredSystemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsOwnerLinksToHclTerraform(struct?: GroupContentAdministeredSystemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsOwnerLinksOutputReference {
    return new GroupContentAdministeredSystemsOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsOwnerOrganizationalUnitLinks {
}

export function groupContentAdministeredSystemsOwnerOrganizationalUnitLinksToTerraform(struct?: GroupContentAdministeredSystemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupContentAdministeredSystemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsOwnerOrganizationalUnitLinksOutputReference {
    return new GroupContentAdministeredSystemsOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsOwnerOrganizationalUnitToTerraform(struct?: GroupContentAdministeredSystemsOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsOwnerOrganizationalUnitToHclTerraform(struct?: GroupContentAdministeredSystemsOwnerOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsOwnerPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsOwnerPermissionsToTerraform(struct?: GroupContentAdministeredSystemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsOwnerPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsOwnerPermissionsOutputReference {
    return new GroupContentAdministeredSystemsOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsOwnerOrganizationalUnit;
}

export function groupContentAdministeredSystemsOwnerToTerraform(struct?: GroupContentAdministeredSystemsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupContentAdministeredSystemsOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupContentAdministeredSystemsOwnerToHclTerraform(struct?: GroupContentAdministeredSystemsOwner): any {
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
    organizational_unit: {
      value: groupContentAdministeredSystemsOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupContentAdministeredSystemsOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupContentAdministeredSystemsOwnerOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsPermissionsToTerraform(struct?: GroupContentAdministeredSystemsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsPermissionsOutputReference {
    return new GroupContentAdministeredSystemsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedAD {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#sam_account_name_scheme Group#sam_account_name_scheme}
  */
  readonly samAccountNameScheme: string;
}

export function groupContentAdministeredSystemsProvisionedADToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAD | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sam_account_name_scheme: cdktf.stringToTerraform(struct!.samAccountNameScheme),
  }
}


export function groupContentAdministeredSystemsProvisionedADToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAD | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sam_account_name_scheme: {
      value: cdktf.stringToHclTerraform(struct!.samAccountNameScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedADOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAD | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samAccountNameScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.samAccountNameScheme = this._samAccountNameScheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAD | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samAccountNameScheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samAccountNameScheme = value.samAccountNameScheme;
    }
  }

  // sam_account_name_scheme - computed: true, optional: false, required: true
  private _samAccountNameScheme?: string; 
  public get samAccountNameScheme() {
    return this.getStringAttribute('sam_account_name_scheme');
  }
  public set samAccountNameScheme(value: string) {
    this._samAccountNameScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samAccountNameSchemeInput() {
    return this._samAccountNameScheme;
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinks {
}

export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._name = value.name;
    }
  }

  // account_validity_supported - computed: true, optional: false, required: false
  public get accountValiditySupported() {
    return this.getBooleanAttribute('account_validity_supported');
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureOidcDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#accounts_writable Group#accounts_writable}
  */
  readonly accountsWritable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#directory Group#directory}
  */
  readonly directory: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#tenant Group#tenant}
  */
  readonly tenant: string;
}

export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts_writable: cdktf.booleanToTerraform(struct!.accountsWritable),
    directory: groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryToTerraform(struct!.directory),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function groupContentAdministeredSystemsProvisionedAzureOidcDirectoryToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts_writable: {
      value: cdktf.booleanToHclTerraform(struct!.accountsWritable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    directory: {
      value: groupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureOidcDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountsWritable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountsWritable = this._accountsWritable;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureOidcDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountsWritable = undefined;
      this._directory.internalValue = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountsWritable = value.accountsWritable;
      this._directory.internalValue = value.directory;
      this._tenant = value.tenant;
    }
  }

  // accounts_writable - computed: true, optional: true, required: false
  private _accountsWritable?: boolean | cdktf.IResolvable; 
  public get accountsWritable() {
    return this.getBooleanAttribute('accounts_writable');
  }
  public set accountsWritable(value: boolean | cdktf.IResolvable) {
    this._accountsWritable = value;
  }
  public resetAccountsWritable() {
    this._accountsWritable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsWritableInput() {
    return this._accountsWritable;
  }

  // directory - computed: true, optional: false, required: true
  private _directory = new GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryDirectory) {
    this._directory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // tenant - computed: true, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks {
}

export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._name = value.name;
    }
  }

  // account_validity_supported - computed: true, optional: false, required: false
  public get accountValiditySupported() {
    return this.getBooleanAttribute('account_validity_supported');
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_id Group#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_secret Group#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#directory Group#directory}
  */
  readonly directory: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#tenant Group#tenant}
  */
  readonly tenant: string;
}

export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    directory: groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryToTerraform(struct!.directory),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._directory.internalValue = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._directory.internalValue = value.directory;
      this._tenant = value.tenant;
    }
  }

  // client_id - computed: true, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // directory - computed: true, optional: false, required: true
  private _directory = new GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryDirectory) {
    this._directory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // tenant - computed: true, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface GroupContentAdministeredSystemsProvisionedAzureTenant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_id Group#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_secret Group#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#idp_domain Group#idp_domain}
  */
  readonly idpDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#tenant Group#tenant}
  */
  readonly tenant: string;
}

export function groupContentAdministeredSystemsProvisionedAzureTenantToTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    idp_domain: cdktf.stringToTerraform(struct!.idpDomain),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function groupContentAdministeredSystemsProvisionedAzureTenantToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedAzureTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_domain: {
      value: cdktf.stringToHclTerraform(struct!.idpDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedAzureTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedAzureTenant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._idpDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpDomain = this._idpDomain;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedAzureTenant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._idpDomain = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._idpDomain = value.idpDomain;
      this._tenant = value.tenant;
    }
  }

  // client_id - computed: true, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // idp_domain - computed: true, optional: true, required: false
  private _idpDomain?: string; 
  public get idpDomain() {
    return this.getStringAttribute('idp_domain');
  }
  public set idpDomain(value: string) {
    this._idpDomain = value;
  }
  public resetIdpDomain() {
    this._idpDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpDomainInput() {
    return this._idpDomain;
  }

  // tenant - computed: true, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate | cdktf.IResolvable): any {
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
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
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

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#color Group#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._name = value.name;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // share_end_time - computed: true, optional: false, required: false
  public get shareEndTime() {
    return this.getStringAttribute('share_end_time');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_certificate Group#client_certificate}
  */
  readonly clientCertificate?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#share_secret_in_vault Group#share_secret_in_vault}
  */
  readonly shareSecretInVault?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateToTerraform(struct!.clientCertificate),
    share_secret_in_vault: cdktf.booleanToTerraform(struct!.shareSecretInVault),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate",
    },
    share_secret_in_vault: {
      value: cdktf.booleanToHclTerraform(struct!.shareSecretInVault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._shareSecretInVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareSecretInVault = this._shareSecretInVault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificate.internalValue = undefined;
      this._shareSecretInVault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._shareSecretInVault = value.shareSecretInVault;
    }
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // share_secret_in_vault - computed: true, optional: true, required: false
  private _shareSecretInVault?: boolean | cdktf.IResolvable; 
  public get shareSecretInVault() {
    return this.getBooleanAttribute('share_secret_in_vault');
  }
  public set shareSecretInVault(value: boolean | cdktf.IResolvable) {
    this._shareSecretInVault = value;
  }
  public resetShareSecretInVault() {
    this._shareSecretInVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareSecretInVaultInput() {
    return this._shareSecretInVault;
  }

  // shared_secret - computed: true, optional: false, required: false
  private _sharedSecret = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientSharedSecretOutputReference(this, "shared_secret");
  public get sharedSecret() {
    return this._sharedSecret;
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#format Group#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#freely_useable Group#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#list Group#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#required Group#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#unique Group#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    freely_useable: cdktf.booleanToTerraform(struct!.freelyUseable),
    list: cdktf.booleanToTerraform(struct!.list),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    unique: cdktf.booleanToTerraform(struct!.unique),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freely_useable: {
      value: cdktf.booleanToHclTerraform(struct!.freelyUseable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.booleanToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._freelyUseable !== undefined) {
      hasAnyValues = true;
      internalValueResult.freelyUseable = this._freelyUseable;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._freelyUseable = undefined;
      this._list = undefined;
      this._name = undefined;
      this._required = undefined;
      this._unique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._freelyUseable = value.freelyUseable;
      this._list = value.list;
      this._name = value.name;
      this._required = value.required;
      this._unique = value.unique;
    }
  }

  // format - computed: true, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // freely_useable - computed: true, optional: true, required: false
  private _freelyUseable?: boolean | cdktf.IResolvable; 
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }
  public set freelyUseable(value: boolean | cdktf.IResolvable) {
    this._freelyUseable = value;
  }
  public resetFreelyUseable() {
    this._freelyUseable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freelyUseableInput() {
    return this._freelyUseable;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: true, required: false
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attribute_definition Group#attribute_definition}
  */
  readonly attributeDefinition?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#script Group#script}
  */
  readonly script?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definition: groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionToTerraform(struct!.attributeDefinition),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definition: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionToHclTerraform(struct!.attributeDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDefinition = this._attributeDefinition?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = undefined;
      this._name = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = value.attributeDefinition;
      this._name = value.name;
      this._script = value.script;
    }
  }

  // attribute_definition - computed: true, optional: true, required: false
  private _attributeDefinition = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }
  public putAttributeDefinition(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition) {
    this._attributeDefinition.internalValue = value;
  }
  public resetAttributeDefinition() {
    this._attributeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionInput() {
    return this._attributeDefinition.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#color Group#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._name = value.name;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // share_end_time - computed: true, optional: false, required: false
  public get shareEndTime() {
    return this.getStringAttribute('share_end_time');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#callback_uri Group#callback_uri}
  */
  readonly callbackUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#debug_mode Group#debug_mode}
  */
  readonly debugMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#id_token_claims Group#id_token_claims}
  */
  readonly idTokenClaims?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#initiate_login_uri Group#initiate_login_uri}
  */
  readonly initiateLoginUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#profile Group#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#resource_uris Group#resource_uris}
  */
  readonly resourceUris?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#share_secret_in_vault Group#share_secret_in_vault}
  */
  readonly shareSecretInVault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#show_landing_page Group#show_landing_page}
  */
  readonly showLandingPage?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesToTerraform, false)(struct!.attributes),
    callback_uri: cdktf.stringToTerraform(struct!.callbackUri),
    debug_mode: cdktf.booleanToTerraform(struct!.debugMode),
    id_token_claims: cdktf.stringToTerraform(struct!.idTokenClaims),
    initiate_login_uri: cdktf.stringToTerraform(struct!.initiateLoginUri),
    profile: cdktf.stringToTerraform(struct!.profile),
    resource_uris: cdktf.stringToTerraform(struct!.resourceUris),
    share_secret_in_vault: cdktf.booleanToTerraform(struct!.shareSecretInVault),
    show_landing_page: cdktf.booleanToTerraform(struct!.showLandingPage),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesList",
    },
    callback_uri: {
      value: cdktf.stringToHclTerraform(struct!.callbackUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_mode: {
      value: cdktf.booleanToHclTerraform(struct!.debugMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id_token_claims: {
      value: cdktf.stringToHclTerraform(struct!.idTokenClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiate_login_uri: {
      value: cdktf.stringToHclTerraform(struct!.initiateLoginUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_uris: {
      value: cdktf.stringToHclTerraform(struct!.resourceUris),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_secret_in_vault: {
      value: cdktf.booleanToHclTerraform(struct!.shareSecretInVault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_landing_page: {
      value: cdktf.booleanToHclTerraform(struct!.showLandingPage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._callbackUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUri = this._callbackUri;
    }
    if (this._debugMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMode = this._debugMode;
    }
    if (this._idTokenClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenClaims = this._idTokenClaims;
    }
    if (this._initiateLoginUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateLoginUri = this._initiateLoginUri;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._resourceUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUris = this._resourceUris;
    }
    if (this._shareSecretInVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareSecretInVault = this._shareSecretInVault;
    }
    if (this._showLandingPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLandingPage = this._showLandingPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._callbackUri = undefined;
      this._debugMode = undefined;
      this._idTokenClaims = undefined;
      this._initiateLoginUri = undefined;
      this._profile = undefined;
      this._resourceUris = undefined;
      this._shareSecretInVault = undefined;
      this._showLandingPage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._callbackUri = value.callbackUri;
      this._debugMode = value.debugMode;
      this._idTokenClaims = value.idTokenClaims;
      this._initiateLoginUri = value.initiateLoginUri;
      this._profile = value.profile;
      this._resourceUris = value.resourceUris;
      this._shareSecretInVault = value.shareSecretInVault;
      this._showLandingPage = value.showLandingPage;
    }
  }

  // account_permissions - computed: true, optional: false, required: false
  private _accountPermissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsList(this, "account_permissions", false);
  public get accountPermissions() {
    return this._accountPermissions;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // callback_uri - computed: true, optional: true, required: false
  private _callbackUri?: string; 
  public get callbackUri() {
    return this.getStringAttribute('callback_uri');
  }
  public set callbackUri(value: string) {
    this._callbackUri = value;
  }
  public resetCallbackUri() {
    this._callbackUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUriInput() {
    return this._callbackUri;
  }

  // debug_mode - computed: true, optional: true, required: false
  private _debugMode?: boolean | cdktf.IResolvable; 
  public get debugMode() {
    return this.getBooleanAttribute('debug_mode');
  }
  public set debugMode(value: boolean | cdktf.IResolvable) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // for_identity_source - computed: true, optional: false, required: false
  public get forIdentitySource() {
    return this.getBooleanAttribute('for_identity_source');
  }

  // id_token_claims - computed: true, optional: true, required: false
  private _idTokenClaims?: string; 
  public get idTokenClaims() {
    return this.getStringAttribute('id_token_claims');
  }
  public set idTokenClaims(value: string) {
    this._idTokenClaims = value;
  }
  public resetIdTokenClaims() {
    this._idTokenClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenClaimsInput() {
    return this._idTokenClaims;
  }

  // initiate_login_uri - computed: true, optional: true, required: false
  private _initiateLoginUri?: string; 
  public get initiateLoginUri() {
    return this.getStringAttribute('initiate_login_uri');
  }
  public set initiateLoginUri(value: string) {
    this._initiateLoginUri = value;
  }
  public resetInitiateLoginUri() {
    this._initiateLoginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateLoginUriInput() {
    return this._initiateLoginUri;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // resource_uris - computed: true, optional: true, required: false
  private _resourceUris?: string; 
  public get resourceUris() {
    return this.getStringAttribute('resource_uris');
  }
  public set resourceUris(value: string) {
    this._resourceUris = value;
  }
  public resetResourceUris() {
    this._resourceUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUrisInput() {
    return this._resourceUris;
  }

  // share_secret_in_vault - computed: true, optional: true, required: false
  private _shareSecretInVault?: boolean | cdktf.IResolvable; 
  public get shareSecretInVault() {
    return this.getBooleanAttribute('share_secret_in_vault');
  }
  public set shareSecretInVault(value: boolean | cdktf.IResolvable) {
    this._shareSecretInVault = value;
  }
  public resetShareSecretInVault() {
    this._shareSecretInVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareSecretInVaultInput() {
    return this._shareSecretInVault;
  }

  // shared_secret - computed: true, optional: false, required: false
  private _sharedSecret = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretOutputReference(this, "shared_secret");
  public get sharedSecret() {
    return this._sharedSecret;
  }

  // show_landing_page - computed: true, optional: true, required: false
  private _showLandingPage?: boolean | cdktf.IResolvable; 
  public get showLandingPage() {
    return this.getBooleanAttribute('show_landing_page');
  }
  public set showLandingPage(value: boolean | cdktf.IResolvable) {
    this._showLandingPage = value;
  }
  public resetShowLandingPage() {
    this._showLandingPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLandingPageInput() {
    return this._showLandingPage;
  }

  // use_client_credentials - computed: true, optional: false, required: false
  public get useClientCredentials() {
    return this.getBooleanAttribute('use_client_credentials');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#format Group#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#freely_useable Group#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#list Group#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#required Group#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#unique Group#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    freely_useable: cdktf.booleanToTerraform(struct!.freelyUseable),
    list: cdktf.booleanToTerraform(struct!.list),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    unique: cdktf.booleanToTerraform(struct!.unique),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freely_useable: {
      value: cdktf.booleanToHclTerraform(struct!.freelyUseable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.booleanToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._freelyUseable !== undefined) {
      hasAnyValues = true;
      internalValueResult.freelyUseable = this._freelyUseable;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._freelyUseable = undefined;
      this._list = undefined;
      this._name = undefined;
      this._required = undefined;
      this._unique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._freelyUseable = value.freelyUseable;
      this._list = value.list;
      this._name = value.name;
      this._required = value.required;
      this._unique = value.unique;
    }
  }

  // format - computed: true, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // freely_useable - computed: true, optional: true, required: false
  private _freelyUseable?: boolean | cdktf.IResolvable; 
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }
  public set freelyUseable(value: boolean | cdktf.IResolvable) {
    this._freelyUseable = value;
  }
  public resetFreelyUseable() {
    this._freelyUseable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freelyUseableInput() {
    return this._freelyUseable;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: true, required: false
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attribute_definition Group#attribute_definition}
  */
  readonly attributeDefinition?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#script Group#script}
  */
  readonly script?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definition: groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionToTerraform(struct!.attributeDefinition),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definition: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionToHclTerraform(struct!.attributeDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDefinition = this._attributeDefinition?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = undefined;
      this._name = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = value.attributeDefinition;
      this._name = value.name;
      this._script = value.script;
    }
  }

  // attribute_definition - computed: true, optional: true, required: false
  private _attributeDefinition = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }
  public putAttributeDefinition(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition) {
    this._attributeDefinition.internalValue = value;
  }
  public resetAttributeDefinition() {
    this._attributeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionInput() {
    return this._attributeDefinition.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#metadata Group#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#metadata_url Group#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#subject_format Group#subject_format}
  */
  readonly subjectFormat: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesToTerraform, false)(struct!.attributes),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    subject_format: cdktf.stringToTerraform(struct!.subjectFormat),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesList",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.metadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_format: {
      value: cdktf.stringToHclTerraform(struct!.subjectFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataUrl = this._metadataUrl;
    }
    if (this._subjectFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectFormat = this._subjectFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._metadata = undefined;
      this._metadataUrl = undefined;
      this._subjectFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._metadata = value.metadata;
      this._metadataUrl = value.metadataUrl;
      this._subjectFormat = value.subjectFormat;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_url - computed: true, optional: true, required: false
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
  }

  // subject_format - computed: true, optional: false, required: true
  private _subjectFormat?: string; 
  public get subjectFormat() {
    return this.getStringAttribute('subject_format');
  }
  public set subjectFormat(value: string) {
    this._subjectFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFormatInput() {
    return this._subjectFormat;
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_id Group#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#ldap_client Group#ldap_client}
  */
  readonly ldapClient?: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#oauth2_client Group#oauth2_client}
  */
  readonly oauth2Client?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#owner Group#owner}
  */
  readonly owner?: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#saml2_client Group#saml2_client}
  */
  readonly saml2Client?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#scopes Group#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#technical_administrator Group#technical_administrator}
  */
  readonly technicalAdministrator?: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    ldap_client: groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientToTerraform(struct!.ldapClient),
    name: cdktf.stringToTerraform(struct!.name),
    oauth2_client: groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientToTerraform(struct!.oauth2Client),
    owner: groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerToTerraform(struct!.owner),
    saml2_client: groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientToTerraform(struct!.saml2Client),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    technical_administrator: groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorToTerraform(struct!.technicalAdministrator),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_client: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientToHclTerraform(struct!.ldapClient),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientToHclTerraform(struct!.oauth2Client),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client",
    },
    owner: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner",
    },
    saml2_client: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientToHclTerraform(struct!.saml2Client),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    technical_administrator: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorToHclTerraform(struct!.technicalAdministrator),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._ldapClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapClient = this._ldapClient?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oauth2Client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Client = this._oauth2Client?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._saml2Client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml2Client = this._saml2Client?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._technicalAdministrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technicalAdministrator = this._technicalAdministrator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._ldapClient.internalValue = undefined;
      this._name = undefined;
      this._oauth2Client.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._saml2Client.internalValue = undefined;
      this._scopes = undefined;
      this._technicalAdministrator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._ldapClient.internalValue = value.ldapClient;
      this._name = value.name;
      this._oauth2Client.internalValue = value.oauth2Client;
      this._owner.internalValue = value.owner;
      this._saml2Client.internalValue = value.saml2Client;
      this._scopes = value.scopes;
      this._technicalAdministrator.internalValue = value.technicalAdministrator;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // ldap_client - computed: true, optional: true, required: false
  private _ldapClient = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClientOutputReference(this, "ldap_client");
  public get ldapClient() {
    return this._ldapClient;
  }
  public putLdapClient(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientLdapClient) {
    this._ldapClient.internalValue = value;
  }
  public resetLdapClient() {
    this._ldapClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapClientInput() {
    return this._ldapClient.internalValue;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // oauth2_client - computed: true, optional: true, required: false
  private _oauth2Client = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }
  public putOauth2Client(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOauth2Client) {
    this._oauth2Client.internalValue = value;
  }
  public resetOauth2Client() {
    this._oauth2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientInput() {
    return this._oauth2Client.internalValue;
  }

  // owner - computed: true, optional: true, required: false
  private _owner = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientOwner) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // saml2_client - computed: true, optional: true, required: false
  private _saml2Client = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2ClientOutputReference(this, "saml2_client");
  public get saml2Client() {
    return this._saml2Client;
  }
  public putSaml2Client(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSaml2Client) {
    this._saml2Client.internalValue = value;
  }
  public resetSaml2Client() {
    this._saml2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2ClientInput() {
    return this._saml2Client.internalValue;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // sso_application - computed: true, optional: false, required: false
  public get ssoApplication() {
    return this.getBooleanAttribute('sso_application');
  }

  // technical_administrator - computed: true, optional: true, required: false
  private _technicalAdministrator = new GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministratorOutputReference(this, "technical_administrator");
  public get technicalAdministrator() {
    return this._technicalAdministrator;
  }
  public putTechnicalAdministrator(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientTechnicalAdministrator) {
    this._technicalAdministrator.internalValue = value;
  }
  public resetTechnicalAdministrator() {
    this._technicalAdministrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalAdministratorInput() {
    return this._technicalAdministrator.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client Group#client}
  */
  readonly client?: GroupContentAdministeredSystemsProvisionedInternalLdapClient;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: groupContentAdministeredSystemsProvisionedInternalLdapClientToTerraform(struct!.client),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClient",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client.internalValue = value.client;
    }
  }

  // client - computed: true, optional: true, required: false
  private _client = new GroupContentAdministeredSystemsProvisionedInternalLdapClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: GroupContentAdministeredSystemsProvisionedInternalLdapClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinks {
}

export function groupContentAdministeredSystemsProvisionedLdapGidNumberingLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedLdapGidNumberingLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapGidNumberingPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapGidNumberingPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapGidNumbering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#next_id Group#next_id}
  */
  readonly nextId?: number;
}

export function groupContentAdministeredSystemsProvisionedLdapGidNumberingToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapGidNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    next_id: cdktf.numberToTerraform(struct!.nextId),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapGidNumberingToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapGidNumbering): any {
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
    next_id: {
      value: cdktf.numberToHclTerraform(struct!.nextId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapGidNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapGidNumbering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextId = this._nextId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapGidNumbering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nextId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nextId = value.nextId;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedLdapGidNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // next_id - computed: true, optional: true, required: false
  private _nextId?: number; 
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }
  public set nextId(value: number) {
    this._nextId = value;
  }
  public resetNextId() {
    this._nextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIdInput() {
    return this._nextId;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedLdapGidNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapNumberingLinks {
}

export function groupContentAdministeredSystemsProvisionedLdapNumberingLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedLdapNumberingLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedLdapNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapNumberingLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapNumberingPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapNumberingPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapNumberingPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapNumberingPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedLdapNumberingPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapNumberingPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapNumbering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#next_id Group#next_id}
  */
  readonly nextId?: number;
}

export function groupContentAdministeredSystemsProvisionedLdapNumberingToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    next_id: cdktf.numberToTerraform(struct!.nextId),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapNumberingToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapNumbering): any {
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
    next_id: {
      value: cdktf.numberToHclTerraform(struct!.nextId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapNumbering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextId = this._nextId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapNumbering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nextId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nextId = value.nextId;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedLdapNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // next_id - computed: true, optional: true, required: false
  private _nextId?: number; 
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }
  public set nextId(value: number) {
    this._nextId = value;
  }
  public resetNextId() {
    this._nextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIdInput() {
    return this._nextId;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedLdapNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#gid Group#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#gid_numbering Group#gid_numbering}
  */
  readonly gidNumbering: GroupContentAdministeredSystemsProvisionedLdapGidNumbering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#hashing_scheme Group#hashing_scheme}
  */
  readonly hashingScheme: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#numbering Group#numbering}
  */
  readonly numbering: GroupContentAdministeredSystemsProvisionedLdapNumbering;
}

export function groupContentAdministeredSystemsProvisionedLdapToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    gid_numbering: groupContentAdministeredSystemsProvisionedLdapGidNumberingToTerraform(struct!.gidNumbering),
    hashing_scheme: cdktf.stringToTerraform(struct!.hashingScheme),
    numbering: groupContentAdministeredSystemsProvisionedLdapNumberingToTerraform(struct!.numbering),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gid_numbering: {
      value: groupContentAdministeredSystemsProvisionedLdapGidNumberingToHclTerraform(struct!.gidNumbering),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapGidNumbering",
    },
    hashing_scheme: {
      value: cdktf.stringToHclTerraform(struct!.hashingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numbering: {
      value: groupContentAdministeredSystemsProvisionedLdapNumberingToHclTerraform(struct!.numbering),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapNumbering",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._gidNumbering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gidNumbering = this._gidNumbering?.internalValue;
    }
    if (this._hashingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashingScheme = this._hashingScheme;
    }
    if (this._numbering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numbering = this._numbering?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._gidNumbering.internalValue = undefined;
      this._hashingScheme = undefined;
      this._numbering.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._gidNumbering.internalValue = value.gidNumbering;
      this._hashingScheme = value.hashingScheme;
      this._numbering.internalValue = value.numbering;
    }
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // gid_numbering - computed: true, optional: false, required: true
  private _gidNumbering = new GroupContentAdministeredSystemsProvisionedLdapGidNumberingOutputReference(this, "gid_numbering");
  public get gidNumbering() {
    return this._gidNumbering;
  }
  public putGidNumbering(value: GroupContentAdministeredSystemsProvisionedLdapGidNumbering) {
    this._gidNumbering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidNumberingInput() {
    return this._gidNumbering.internalValue;
  }

  // hashing_scheme - computed: true, optional: false, required: true
  private _hashingScheme?: string; 
  public get hashingScheme() {
    return this.getStringAttribute('hashing_scheme');
  }
  public set hashingScheme(value: string) {
    this._hashingScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingSchemeInput() {
    return this._hashingScheme;
  }

  // numbering - computed: true, optional: false, required: true
  private _numbering = new GroupContentAdministeredSystemsProvisionedLdapNumberingOutputReference(this, "numbering");
  public get numbering() {
    return this._numbering;
  }
  public putNumbering(value: GroupContentAdministeredSystemsProvisionedLdapNumbering) {
    this._numbering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberingInput() {
    return this._numbering.internalValue;
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks {
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#format Group#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#freely_useable Group#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#list Group#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#required Group#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#unique Group#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    freely_useable: cdktf.booleanToTerraform(struct!.freelyUseable),
    list: cdktf.booleanToTerraform(struct!.list),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    unique: cdktf.booleanToTerraform(struct!.unique),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freely_useable: {
      value: cdktf.booleanToHclTerraform(struct!.freelyUseable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.booleanToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._freelyUseable !== undefined) {
      hasAnyValues = true;
      internalValueResult.freelyUseable = this._freelyUseable;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._freelyUseable = undefined;
      this._list = undefined;
      this._name = undefined;
      this._required = undefined;
      this._unique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._freelyUseable = value.freelyUseable;
      this._list = value.list;
      this._name = value.name;
      this._required = value.required;
      this._unique = value.unique;
    }
  }

  // format - computed: true, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // freely_useable - computed: true, optional: true, required: false
  private _freelyUseable?: boolean | cdktf.IResolvable; 
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }
  public set freelyUseable(value: boolean | cdktf.IResolvable) {
    this._freelyUseable = value;
  }
  public resetFreelyUseable() {
    this._freelyUseable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freelyUseableInput() {
    return this._freelyUseable;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: true, required: false
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attribute_definition Group#attribute_definition}
  */
  readonly attributeDefinition?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#script Group#script}
  */
  readonly script?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definition: groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionToTerraform(struct!.attributeDefinition),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definition: {
      value: groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionToHclTerraform(struct!.attributeDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDefinition = this._attributeDefinition?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = undefined;
      this._name = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = value.attributeDefinition;
      this._name = value.name;
      this._script = value.script;
    }
  }

  // attribute_definition - computed: true, optional: true, required: false
  private _attributeDefinition = new GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }
  public putAttributeDefinition(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition) {
    this._attributeDefinition.internalValue = value;
  }
  public resetAttributeDefinition() {
    this._attributeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionInput() {
    return this._attributeDefinition.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinks {
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._name = value.name;
    }
  }

  // account_validity_supported - computed: true, optional: false, required: false
  public get accountValiditySupported() {
    return this.getBooleanAttribute('account_validity_supported');
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinks {
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#next_id Group#next_id}
  */
  readonly nextId?: number;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    next_id: cdktf.numberToTerraform(struct!.nextId),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering | cdktf.IResolvable): any {
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
    next_id: {
      value: cdktf.numberToHclTerraform(struct!.nextId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextId = this._nextId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nextId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nextId = value.nextId;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // next_id - computed: true, optional: true, required: false
  private _nextId?: number; 
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }
  public set nextId(value: number) {
    this._nextId = value;
  }
  public resetNextId() {
    this._nextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIdInput() {
    return this._nextId;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinks {
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#next_id Group#next_id}
  */
  readonly nextId?: number;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    next_id: cdktf.numberToTerraform(struct!.nextId),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering | cdktf.IResolvable): any {
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
    next_id: {
      value: cdktf.numberToHclTerraform(struct!.nextId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextId = this._nextId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nextId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nextId = value.nextId;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // next_id - computed: true, optional: true, required: false
  private _nextId?: number; 
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }
  public set nextId(value: number) {
    this._nextId = value;
  }
  public resetNextId() {
    this._nextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIdInput() {
    return this._nextId;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface GroupContentAdministeredSystemsProvisionedLdapDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#accounts_writable Group#accounts_writable}
  */
  readonly accountsWritable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#directory Group#directory}
  */
  readonly directory: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#gid Group#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#gid_numbering Group#gid_numbering}
  */
  readonly gidNumbering?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#group_dn Group#group_dn}
  */
  readonly groupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#hashing_scheme Group#hashing_scheme}
  */
  readonly hashingScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#numbering Group#numbering}
  */
  readonly numbering?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#object_classes Group#object_classes}
  */
  readonly objectClasses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#sam_account_name_scheme Group#sam_account_name_scheme}
  */
  readonly samAccountNameScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#ssh_public_key_support Group#ssh_public_key_support}
  */
  readonly sshPublicKeySupport?: string;
}

export function groupContentAdministeredSystemsProvisionedLdapDirectoryToTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts_writable: cdktf.booleanToTerraform(struct!.accountsWritable),
    attributes: cdktf.listMapper(groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesToTerraform, false)(struct!.attributes),
    directory: groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryToTerraform(struct!.directory),
    gid: cdktf.numberToTerraform(struct!.gid),
    gid_numbering: groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingToTerraform(struct!.gidNumbering),
    group_dn: cdktf.stringToTerraform(struct!.groupDn),
    hashing_scheme: cdktf.stringToTerraform(struct!.hashingScheme),
    numbering: groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingToTerraform(struct!.numbering),
    object_classes: cdktf.stringToTerraform(struct!.objectClasses),
    sam_account_name_scheme: cdktf.stringToTerraform(struct!.samAccountNameScheme),
    ssh_public_key_support: cdktf.stringToTerraform(struct!.sshPublicKeySupport),
  }
}


export function groupContentAdministeredSystemsProvisionedLdapDirectoryToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts_writable: {
      value: cdktf.booleanToHclTerraform(struct!.accountsWritable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attributes: {
      value: cdktf.listMapperHcl(groupContentAdministeredSystemsProvisionedLdapDirectoryAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesList",
    },
    directory: {
      value: groupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gid_numbering: {
      value: groupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingToHclTerraform(struct!.gidNumbering),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering",
    },
    group_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashing_scheme: {
      value: cdktf.stringToHclTerraform(struct!.hashingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numbering: {
      value: groupContentAdministeredSystemsProvisionedLdapDirectoryNumberingToHclTerraform(struct!.numbering),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering",
    },
    object_classes: {
      value: cdktf.stringToHclTerraform(struct!.objectClasses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_account_name_scheme: {
      value: cdktf.stringToHclTerraform(struct!.samAccountNameScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key_support: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKeySupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedLdapDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedLdapDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountsWritable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountsWritable = this._accountsWritable;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._gidNumbering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gidNumbering = this._gidNumbering?.internalValue;
    }
    if (this._groupDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDn = this._groupDn;
    }
    if (this._hashingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashingScheme = this._hashingScheme;
    }
    if (this._numbering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numbering = this._numbering?.internalValue;
    }
    if (this._objectClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectClasses = this._objectClasses;
    }
    if (this._samAccountNameScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.samAccountNameScheme = this._samAccountNameScheme;
    }
    if (this._sshPublicKeySupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeySupport = this._sshPublicKeySupport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedLdapDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountsWritable = undefined;
      this._attributes.internalValue = undefined;
      this._directory.internalValue = undefined;
      this._gid = undefined;
      this._gidNumbering.internalValue = undefined;
      this._groupDn = undefined;
      this._hashingScheme = undefined;
      this._numbering.internalValue = undefined;
      this._objectClasses = undefined;
      this._samAccountNameScheme = undefined;
      this._sshPublicKeySupport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountsWritable = value.accountsWritable;
      this._attributes.internalValue = value.attributes;
      this._directory.internalValue = value.directory;
      this._gid = value.gid;
      this._gidNumbering.internalValue = value.gidNumbering;
      this._groupDn = value.groupDn;
      this._hashingScheme = value.hashingScheme;
      this._numbering.internalValue = value.numbering;
      this._objectClasses = value.objectClasses;
      this._samAccountNameScheme = value.samAccountNameScheme;
      this._sshPublicKeySupport = value.sshPublicKeySupport;
    }
  }

  // accounts_writable - computed: true, optional: true, required: false
  private _accountsWritable?: boolean | cdktf.IResolvable; 
  public get accountsWritable() {
    return this.getBooleanAttribute('accounts_writable');
  }
  public set accountsWritable(value: boolean | cdktf.IResolvable) {
    this._accountsWritable = value;
  }
  public resetAccountsWritable() {
    this._accountsWritable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsWritableInput() {
    return this._accountsWritable;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // directory - computed: true, optional: false, required: true
  private _directory = new GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory) {
    this._directory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // gid_numbering - computed: true, optional: true, required: false
  private _gidNumbering = new GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumberingOutputReference(this, "gid_numbering");
  public get gidNumbering() {
    return this._gidNumbering;
  }
  public putGidNumbering(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering) {
    this._gidNumbering.internalValue = value;
  }
  public resetGidNumbering() {
    this._gidNumbering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidNumberingInput() {
    return this._gidNumbering.internalValue;
  }

  // group_dn - computed: true, optional: false, required: true
  private _groupDn?: string; 
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }
  public set groupDn(value: string) {
    this._groupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // hashing_scheme - computed: true, optional: true, required: false
  private _hashingScheme?: string; 
  public get hashingScheme() {
    return this.getStringAttribute('hashing_scheme');
  }
  public set hashingScheme(value: string) {
    this._hashingScheme = value;
  }
  public resetHashingScheme() {
    this._hashingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingSchemeInput() {
    return this._hashingScheme;
  }

  // numbering - computed: true, optional: true, required: false
  private _numbering = new GroupContentAdministeredSystemsProvisionedLdapDirectoryNumberingOutputReference(this, "numbering");
  public get numbering() {
    return this._numbering;
  }
  public putNumbering(value: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering) {
    this._numbering.internalValue = value;
  }
  public resetNumbering() {
    this._numbering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberingInput() {
    return this._numbering.internalValue;
  }

  // object_classes - computed: true, optional: true, required: false
  private _objectClasses?: string; 
  public get objectClasses() {
    return this.getStringAttribute('object_classes');
  }
  public set objectClasses(value: string) {
    this._objectClasses = value;
  }
  public resetObjectClasses() {
    this._objectClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectClassesInput() {
    return this._objectClasses;
  }

  // sam_account_name_scheme - computed: true, optional: true, required: false
  private _samAccountNameScheme?: string; 
  public get samAccountNameScheme() {
    return this.getStringAttribute('sam_account_name_scheme');
  }
  public set samAccountNameScheme(value: string) {
    this._samAccountNameScheme = value;
  }
  public resetSamAccountNameScheme() {
    this._samAccountNameScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samAccountNameSchemeInput() {
    return this._samAccountNameScheme;
  }

  // ssh_public_key_support - computed: true, optional: true, required: false
  private _sshPublicKeySupport?: string; 
  public get sshPublicKeySupport() {
    return this.getStringAttribute('ssh_public_key_support');
  }
  public set sshPublicKeySupport(value: string) {
    this._sshPublicKeySupport = value;
  }
  public resetSshPublicKeySupport() {
    this._sshPublicKeySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeySupportInput() {
    return this._sshPublicKeySupport;
  }
}
export interface GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinks {
}

export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks {
}

export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitToTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit;
}

export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemToTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupContentAdministeredSystemsProvisionedNamespaceBaseSystemToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: groupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // admin_permissions - computed: true, optional: false, required: false
  public get adminPermissions() {
    return this.getBooleanAttribute('admin_permissions');
  }

  // can_write_accounts - computed: true, optional: false, required: false
  public get canWriteAccounts() {
    return this.getBooleanAttribute('can_write_accounts');
  }

  // content_admin_permissions - computed: true, optional: false, required: false
  public get contentAdminPermissions() {
    return this.getBooleanAttribute('content_admin_permissions');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // owner_permissions - computed: true, optional: false, required: false
  public get ownerPermissions() {
    return this.getBooleanAttribute('owner_permissions');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsProvisionedNamespace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#base_system Group#base_system}
  */
  readonly baseSystem: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#group_dn Group#group_dn}
  */
  readonly groupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#service_account_dn Group#service_account_dn}
  */
  readonly serviceAccountDn: string;
}

export function groupContentAdministeredSystemsProvisionedNamespaceToTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_system: groupContentAdministeredSystemsProvisionedNamespaceBaseSystemToTerraform(struct!.baseSystem),
    group_dn: cdktf.stringToTerraform(struct!.groupDn),
    service_account_dn: cdktf.stringToTerraform(struct!.serviceAccountDn),
  }
}


export function groupContentAdministeredSystemsProvisionedNamespaceToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_system: {
      value: groupContentAdministeredSystemsProvisionedNamespaceBaseSystemToHclTerraform(struct!.baseSystem),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem",
    },
    group_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_dn: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedNamespace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSystem = this._baseSystem?.internalValue;
    }
    if (this._groupDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDn = this._groupDn;
    }
    if (this._serviceAccountDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountDn = this._serviceAccountDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseSystem.internalValue = undefined;
      this._groupDn = undefined;
      this._serviceAccountDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseSystem.internalValue = value.baseSystem;
      this._groupDn = value.groupDn;
      this._serviceAccountDn = value.serviceAccountDn;
    }
  }

  // base_system - computed: true, optional: false, required: true
  private _baseSystem = new GroupContentAdministeredSystemsProvisionedNamespaceBaseSystemOutputReference(this, "base_system");
  public get baseSystem() {
    return this._baseSystem;
  }
  public putBaseSystem(value: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem) {
    this._baseSystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSystemInput() {
    return this._baseSystem.internalValue;
  }

  // group_dn - computed: true, optional: false, required: true
  private _groupDn?: string; 
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }
  public set groupDn(value: string) {
    this._groupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // service_account_dn - computed: true, optional: false, required: true
  private _serviceAccountDn?: string; 
  public get serviceAccountDn() {
    return this.getStringAttribute('service_account_dn');
  }
  public set serviceAccountDn(value: string) {
    this._serviceAccountDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountDnInput() {
    return this._serviceAccountDn;
  }
}
export interface GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinks {
}

export function groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#format Group#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#freely_useable Group#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#list Group#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#required Group#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#unique Group#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionToTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    freely_useable: cdktf.booleanToTerraform(struct!.freelyUseable),
    list: cdktf.booleanToTerraform(struct!.list),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    unique: cdktf.booleanToTerraform(struct!.unique),
  }
}


export function groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freely_useable: {
      value: cdktf.booleanToHclTerraform(struct!.freelyUseable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.booleanToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._freelyUseable !== undefined) {
      hasAnyValues = true;
      internalValueResult.freelyUseable = this._freelyUseable;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._freelyUseable = undefined;
      this._list = undefined;
      this._name = undefined;
      this._required = undefined;
      this._unique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._freelyUseable = value.freelyUseable;
      this._list = value.list;
      this._name = value.name;
      this._required = value.required;
      this._unique = value.unique;
    }
  }

  // format - computed: true, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // freely_useable - computed: true, optional: true, required: false
  private _freelyUseable?: boolean | cdktf.IResolvable; 
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }
  public set freelyUseable(value: boolean | cdktf.IResolvable) {
    this._freelyUseable = value;
  }
  public resetFreelyUseable() {
    this._freelyUseable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freelyUseableInput() {
    return this._freelyUseable;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: true, required: false
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }
}
export interface GroupContentAdministeredSystemsProvisionedScimAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attribute_definition Group#attribute_definition}
  */
  readonly attributeDefinition?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#script Group#script}
  */
  readonly script?: string;
}

export function groupContentAdministeredSystemsProvisionedScimAttributesToTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definition: groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionToTerraform(struct!.attributeDefinition),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function groupContentAdministeredSystemsProvisionedScimAttributesToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedScimAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definition: {
      value: groupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionToHclTerraform(struct!.attributeDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedScimAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedScimAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDefinition = this._attributeDefinition?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedScimAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = undefined;
      this._name = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = value.attributeDefinition;
      this._name = value.name;
      this._script = value.script;
    }
  }

  // attribute_definition - computed: true, optional: true, required: false
  private _attributeDefinition = new GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }
  public putAttributeDefinition(value: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition) {
    this._attributeDefinition.internalValue = value;
  }
  public resetAttributeDefinition() {
    this._attributeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionInput() {
    return this._attributeDefinition.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class GroupContentAdministeredSystemsProvisionedScimAttributesList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedScimAttributes[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedScimAttributesOutputReference {
    return new GroupContentAdministeredSystemsProvisionedScimAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedScim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupContentAdministeredSystemsProvisionedScimAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#authentication_scheme Group#authentication_scheme}
  */
  readonly authenticationScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#basic_auth_password Group#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#basic_auth_username Group#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#bearer_token Group#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#connector_configuration Group#connector_configuration}
  */
  readonly connectorConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#custom_header_name Group#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#custom_header_value Group#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#external_id_supported Group#external_id_supported}
  */
  readonly externalIdSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#filter_active_users_supported Group#filter_active_users_supported}
  */
  readonly filterActiveUsersSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#groups_supported Group#groups_supported}
  */
  readonly groupsSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#page_size Group#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#password_supported Group#password_supported}
  */
  readonly passwordSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#update_strategy Group#update_strategy}
  */
  readonly updateStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#url Group#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#use_scim_json_mimetype Group#use_scim_json_mimetype}
  */
  readonly useScimJsonMimetype?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#vendor_escaped Group#vendor_escaped}
  */
  readonly vendorEscaped?: string;
}

export function groupContentAdministeredSystemsProvisionedScimToTerraform(struct?: GroupContentAdministeredSystemsProvisionedScim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(groupContentAdministeredSystemsProvisionedScimAttributesToTerraform, false)(struct!.attributes),
    authentication_scheme: cdktf.stringToTerraform(struct!.authenticationScheme),
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_username: cdktf.stringToTerraform(struct!.basicAuthUsername),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    connector_configuration: cdktf.stringToTerraform(struct!.connectorConfiguration),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    external_id_supported: cdktf.booleanToTerraform(struct!.externalIdSupported),
    filter_active_users_supported: cdktf.booleanToTerraform(struct!.filterActiveUsersSupported),
    groups_supported: cdktf.booleanToTerraform(struct!.groupsSupported),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
    password_supported: cdktf.booleanToTerraform(struct!.passwordSupported),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
    url: cdktf.stringToTerraform(struct!.url),
    use_scim_json_mimetype: cdktf.booleanToTerraform(struct!.useScimJsonMimetype),
    vendor_escaped: cdktf.stringToTerraform(struct!.vendorEscaped),
  }
}


export function groupContentAdministeredSystemsProvisionedScimToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedScim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(groupContentAdministeredSystemsProvisionedScimAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "GroupContentAdministeredSystemsProvisionedScimAttributesList",
    },
    authentication_scheme: {
      value: cdktf.stringToHclTerraform(struct!.authenticationScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_username: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_configuration: {
      value: cdktf.stringToHclTerraform(struct!.connectorConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id_supported: {
      value: cdktf.booleanToHclTerraform(struct!.externalIdSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_active_users_supported: {
      value: cdktf.booleanToHclTerraform(struct!.filterActiveUsersSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups_supported: {
      value: cdktf.booleanToHclTerraform(struct!.groupsSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    page_size: {
      value: cdktf.numberToHclTerraform(struct!.pageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_supported: {
      value: cdktf.booleanToHclTerraform(struct!.passwordSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_scim_json_mimetype: {
      value: cdktf.booleanToHclTerraform(struct!.useScimJsonMimetype),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor_escaped: {
      value: cdktf.stringToHclTerraform(struct!.vendorEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsProvisionedScimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedScim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._authenticationScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationScheme = this._authenticationScheme;
    }
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUsername = this._basicAuthUsername;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._connectorConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorConfiguration = this._connectorConfiguration;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._externalIdSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIdSupported = this._externalIdSupported;
    }
    if (this._filterActiveUsersSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActiveUsersSupported = this._filterActiveUsersSupported;
    }
    if (this._groupsSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsSupported = this._groupsSupported;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    if (this._passwordSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSupported = this._passwordSupported;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useScimJsonMimetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.useScimJsonMimetype = this._useScimJsonMimetype;
    }
    if (this._vendorEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorEscaped = this._vendorEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedScim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._authenticationScheme = undefined;
      this._basicAuthPassword = undefined;
      this._basicAuthUsername = undefined;
      this._bearerToken = undefined;
      this._connectorConfiguration = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._externalIdSupported = undefined;
      this._filterActiveUsersSupported = undefined;
      this._groupsSupported = undefined;
      this._pageSize = undefined;
      this._passwordSupported = undefined;
      this._updateStrategy = undefined;
      this._url = undefined;
      this._useScimJsonMimetype = undefined;
      this._vendorEscaped = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._authenticationScheme = value.authenticationScheme;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUsername = value.basicAuthUsername;
      this._bearerToken = value.bearerToken;
      this._connectorConfiguration = value.connectorConfiguration;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._externalIdSupported = value.externalIdSupported;
      this._filterActiveUsersSupported = value.filterActiveUsersSupported;
      this._groupsSupported = value.groupsSupported;
      this._pageSize = value.pageSize;
      this._passwordSupported = value.passwordSupported;
      this._updateStrategy = value.updateStrategy;
      this._url = value.url;
      this._useScimJsonMimetype = value.useScimJsonMimetype;
      this._vendorEscaped = value.vendorEscaped;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new GroupContentAdministeredSystemsProvisionedScimAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GroupContentAdministeredSystemsProvisionedScimAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // authentication_scheme - computed: true, optional: true, required: false
  private _authenticationScheme?: string; 
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }
  public set authenticationScheme(value: string) {
    this._authenticationScheme = value;
  }
  public resetAuthenticationScheme() {
    this._authenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSchemeInput() {
    return this._authenticationScheme;
  }

  // basic_auth_password - computed: true, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: true, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // bearer_token - computed: true, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // connector_configuration - computed: true, optional: true, required: false
  private _connectorConfiguration?: string; 
  public get connectorConfiguration() {
    return this.getStringAttribute('connector_configuration');
  }
  public set connectorConfiguration(value: string) {
    this._connectorConfiguration = value;
  }
  public resetConnectorConfiguration() {
    this._connectorConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigurationInput() {
    return this._connectorConfiguration;
  }

  // custom_header_name - computed: true, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_header_value - computed: true, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
  }

  // external_id_supported - computed: true, optional: true, required: false
  private _externalIdSupported?: boolean | cdktf.IResolvable; 
  public get externalIdSupported() {
    return this.getBooleanAttribute('external_id_supported');
  }
  public set externalIdSupported(value: boolean | cdktf.IResolvable) {
    this._externalIdSupported = value;
  }
  public resetExternalIdSupported() {
    this._externalIdSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdSupportedInput() {
    return this._externalIdSupported;
  }

  // filter_active_users_supported - computed: true, optional: true, required: false
  private _filterActiveUsersSupported?: boolean | cdktf.IResolvable; 
  public get filterActiveUsersSupported() {
    return this.getBooleanAttribute('filter_active_users_supported');
  }
  public set filterActiveUsersSupported(value: boolean | cdktf.IResolvable) {
    this._filterActiveUsersSupported = value;
  }
  public resetFilterActiveUsersSupported() {
    this._filterActiveUsersSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActiveUsersSupportedInput() {
    return this._filterActiveUsersSupported;
  }

  // groups_supported - computed: true, optional: true, required: false
  private _groupsSupported?: boolean | cdktf.IResolvable; 
  public get groupsSupported() {
    return this.getBooleanAttribute('groups_supported');
  }
  public set groupsSupported(value: boolean | cdktf.IResolvable) {
    this._groupsSupported = value;
  }
  public resetGroupsSupported() {
    this._groupsSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsSupportedInput() {
    return this._groupsSupported;
  }

  // page_size - computed: true, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // password_supported - computed: true, optional: true, required: false
  private _passwordSupported?: boolean | cdktf.IResolvable; 
  public get passwordSupported() {
    return this.getBooleanAttribute('password_supported');
  }
  public set passwordSupported(value: boolean | cdktf.IResolvable) {
    this._passwordSupported = value;
  }
  public resetPasswordSupported() {
    this._passwordSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSupportedInput() {
    return this._passwordSupported;
  }

  // update_strategy - computed: true, optional: true, required: false
  private _updateStrategy?: string; 
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }
  public set updateStrategy(value: string) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }

  // url - computed: true, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_scim_json_mimetype - computed: true, optional: true, required: false
  private _useScimJsonMimetype?: boolean | cdktf.IResolvable; 
  public get useScimJsonMimetype() {
    return this.getBooleanAttribute('use_scim_json_mimetype');
  }
  public set useScimJsonMimetype(value: boolean | cdktf.IResolvable) {
    this._useScimJsonMimetype = value;
  }
  public resetUseScimJsonMimetype() {
    this._useScimJsonMimetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScimJsonMimetypeInput() {
    return this._useScimJsonMimetype;
  }

  // vendor_escaped - computed: true, optional: true, required: false
  private _vendorEscaped?: string; 
  public get vendorEscaped() {
    return this.getStringAttribute('vendor_escaped');
  }
  public set vendorEscaped(value: string) {
    this._vendorEscaped = value;
  }
  public resetVendorEscaped() {
    this._vendorEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorEscapedInput() {
    return this._vendorEscaped;
  }
}
export interface GroupContentAdministeredSystemsTechnicalAdministratorLinks {
}

export function groupContentAdministeredSystemsTechnicalAdministratorLinksToTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsTechnicalAdministratorLinksToHclTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsTechnicalAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsTechnicalAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsTechnicalAdministratorLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsTechnicalAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsTechnicalAdministratorLinksOutputReference {
    return new GroupContentAdministeredSystemsTechnicalAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinks {
}

export function groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinksToTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinksToHclTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinksOutputReference {
    return new GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissionsToTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference {
    return new GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitToTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitToHclTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystemsTechnicalAdministratorPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupContentAdministeredSystemsTechnicalAdministratorPermissionsToTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupContentAdministeredSystemsTechnicalAdministratorPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsTechnicalAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsTechnicalAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsTechnicalAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupContentAdministeredSystemsTechnicalAdministratorPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsTechnicalAdministratorPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsTechnicalAdministratorPermissionsOutputReference {
    return new GroupContentAdministeredSystemsTechnicalAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsTechnicalAdministrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit;
}

export function groupContentAdministeredSystemsTechnicalAdministratorToTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupContentAdministeredSystemsTechnicalAdministratorToHclTerraform(struct?: GroupContentAdministeredSystemsTechnicalAdministrator): any {
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
    organizational_unit: {
      value: groupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsTechnicalAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsTechnicalAdministrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsTechnicalAdministrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsTechnicalAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupContentAdministeredSystemsTechnicalAdministratorOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsTechnicalAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupContentAdministeredSystems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#abstract_provisioned_ldap Group#abstract_provisioned_ldap}
  */
  readonly abstractProvisionedLdap?: GroupContentAdministeredSystemsAbstractProvisionedLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#cleanup_period Group#cleanup_period}
  */
  readonly cleanupPeriod: GroupContentAdministeredSystemsCleanupPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#content_administrator Group#content_administrator}
  */
  readonly contentAdministrator?: GroupContentAdministeredSystemsContentAdministrator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#group_on_system_provisioning Group#group_on_system_provisioning}
  */
  readonly groupOnSystemProvisioning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsOrganizationalUnit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#owner Group#owner}
  */
  readonly owner: GroupContentAdministeredSystemsOwner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_a_d Group#provisioned_a_d}
  */
  readonly provisionedAD?: GroupContentAdministeredSystemsProvisionedAD;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_azure_oidc_directory Group#provisioned_azure_oidc_directory}
  */
  readonly provisionedAzureOidcDirectory?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_azure_sync_ldap_directory Group#provisioned_azure_sync_ldap_directory}
  */
  readonly provisionedAzureSyncLdapDirectory?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_azure_tenant Group#provisioned_azure_tenant}
  */
  readonly provisionedAzureTenant?: GroupContentAdministeredSystemsProvisionedAzureTenant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_internal_ldap Group#provisioned_internal_ldap}
  */
  readonly provisionedInternalLdap?: GroupContentAdministeredSystemsProvisionedInternalLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_ldap Group#provisioned_ldap}
  */
  readonly provisionedLdap?: GroupContentAdministeredSystemsProvisionedLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_ldap_directory Group#provisioned_ldap_directory}
  */
  readonly provisionedLdapDirectory?: GroupContentAdministeredSystemsProvisionedLdapDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_namespace Group#provisioned_namespace}
  */
  readonly provisionedNamespace?: GroupContentAdministeredSystemsProvisionedNamespace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#provisioned_scim Group#provisioned_scim}
  */
  readonly provisionedScim?: GroupContentAdministeredSystemsProvisionedScim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#self_service_existing_groups Group#self_service_existing_groups}
  */
  readonly selfServiceExistingGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#self_service_new_groups Group#self_service_new_groups}
  */
  readonly selfServiceNewGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#self_service_new_namespaces Group#self_service_new_namespaces}
  */
  readonly selfServiceNewNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#self_service_service_accounts Group#self_service_service_accounts}
  */
  readonly selfServiceServiceAccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#should_destroy_unknown_accounts Group#should_destroy_unknown_accounts}
  */
  readonly shouldDestroyUnknownAccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#technical_administrator Group#technical_administrator}
  */
  readonly technicalAdministrator: GroupContentAdministeredSystemsTechnicalAdministrator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#username_prefix Group#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function groupContentAdministeredSystemsToTerraform(struct?: GroupContentAdministeredSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abstract_provisioned_ldap: groupContentAdministeredSystemsAbstractProvisionedLdapToTerraform(struct!.abstractProvisionedLdap),
    active: cdktf.booleanToTerraform(struct!.active),
    cleanup_period: groupContentAdministeredSystemsCleanupPeriodToTerraform(struct!.cleanupPeriod),
    content_administrator: groupContentAdministeredSystemsContentAdministratorToTerraform(struct!.contentAdministrator),
    group_on_system_provisioning: cdktf.stringToTerraform(struct!.groupOnSystemProvisioning),
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupContentAdministeredSystemsOrganizationalUnitToTerraform(struct!.organizationalUnit),
    owner: groupContentAdministeredSystemsOwnerToTerraform(struct!.owner),
    provisioned_a_d: groupContentAdministeredSystemsProvisionedADToTerraform(struct!.provisionedAD),
    provisioned_azure_oidc_directory: groupContentAdministeredSystemsProvisionedAzureOidcDirectoryToTerraform(struct!.provisionedAzureOidcDirectory),
    provisioned_azure_sync_ldap_directory: groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryToTerraform(struct!.provisionedAzureSyncLdapDirectory),
    provisioned_azure_tenant: groupContentAdministeredSystemsProvisionedAzureTenantToTerraform(struct!.provisionedAzureTenant),
    provisioned_internal_ldap: groupContentAdministeredSystemsProvisionedInternalLdapToTerraform(struct!.provisionedInternalLdap),
    provisioned_ldap: groupContentAdministeredSystemsProvisionedLdapToTerraform(struct!.provisionedLdap),
    provisioned_ldap_directory: groupContentAdministeredSystemsProvisionedLdapDirectoryToTerraform(struct!.provisionedLdapDirectory),
    provisioned_namespace: groupContentAdministeredSystemsProvisionedNamespaceToTerraform(struct!.provisionedNamespace),
    provisioned_scim: groupContentAdministeredSystemsProvisionedScimToTerraform(struct!.provisionedScim),
    self_service_existing_groups: cdktf.booleanToTerraform(struct!.selfServiceExistingGroups),
    self_service_new_groups: cdktf.booleanToTerraform(struct!.selfServiceNewGroups),
    self_service_new_namespaces: cdktf.booleanToTerraform(struct!.selfServiceNewNamespaces),
    self_service_service_accounts: cdktf.booleanToTerraform(struct!.selfServiceServiceAccounts),
    should_destroy_unknown_accounts: cdktf.booleanToTerraform(struct!.shouldDestroyUnknownAccounts),
    technical_administrator: groupContentAdministeredSystemsTechnicalAdministratorToTerraform(struct!.technicalAdministrator),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function groupContentAdministeredSystemsToHclTerraform(struct?: GroupContentAdministeredSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abstract_provisioned_ldap: {
      value: groupContentAdministeredSystemsAbstractProvisionedLdapToHclTerraform(struct!.abstractProvisionedLdap),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsAbstractProvisionedLdap",
    },
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cleanup_period: {
      value: groupContentAdministeredSystemsCleanupPeriodToHclTerraform(struct!.cleanupPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsCleanupPeriod",
    },
    content_administrator: {
      value: groupContentAdministeredSystemsContentAdministratorToHclTerraform(struct!.contentAdministrator),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsContentAdministrator",
    },
    group_on_system_provisioning: {
      value: cdktf.stringToHclTerraform(struct!.groupOnSystemProvisioning),
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
    organizational_unit: {
      value: groupContentAdministeredSystemsOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsOrganizationalUnit",
    },
    owner: {
      value: groupContentAdministeredSystemsOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsOwner",
    },
    provisioned_a_d: {
      value: groupContentAdministeredSystemsProvisionedADToHclTerraform(struct!.provisionedAD),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedAD",
    },
    provisioned_azure_oidc_directory: {
      value: groupContentAdministeredSystemsProvisionedAzureOidcDirectoryToHclTerraform(struct!.provisionedAzureOidcDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedAzureOidcDirectory",
    },
    provisioned_azure_sync_ldap_directory: {
      value: groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryToHclTerraform(struct!.provisionedAzureSyncLdapDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory",
    },
    provisioned_azure_tenant: {
      value: groupContentAdministeredSystemsProvisionedAzureTenantToHclTerraform(struct!.provisionedAzureTenant),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedAzureTenant",
    },
    provisioned_internal_ldap: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapToHclTerraform(struct!.provisionedInternalLdap),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdap",
    },
    provisioned_ldap: {
      value: groupContentAdministeredSystemsProvisionedLdapToHclTerraform(struct!.provisionedLdap),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdap",
    },
    provisioned_ldap_directory: {
      value: groupContentAdministeredSystemsProvisionedLdapDirectoryToHclTerraform(struct!.provisionedLdapDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedLdapDirectory",
    },
    provisioned_namespace: {
      value: groupContentAdministeredSystemsProvisionedNamespaceToHclTerraform(struct!.provisionedNamespace),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedNamespace",
    },
    provisioned_scim: {
      value: groupContentAdministeredSystemsProvisionedScimToHclTerraform(struct!.provisionedScim),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedScim",
    },
    self_service_existing_groups: {
      value: cdktf.booleanToHclTerraform(struct!.selfServiceExistingGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_service_new_groups: {
      value: cdktf.booleanToHclTerraform(struct!.selfServiceNewGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_service_new_namespaces: {
      value: cdktf.booleanToHclTerraform(struct!.selfServiceNewNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_service_service_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.selfServiceServiceAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_destroy_unknown_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDestroyUnknownAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    technical_administrator: {
      value: groupContentAdministeredSystemsTechnicalAdministratorToHclTerraform(struct!.technicalAdministrator),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsTechnicalAdministrator",
    },
    username_prefix: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupContentAdministeredSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abstractProvisionedLdap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abstractProvisionedLdap = this._abstractProvisionedLdap?.internalValue;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._cleanupPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPeriod = this._cleanupPeriod?.internalValue;
    }
    if (this._contentAdministrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAdministrator = this._contentAdministrator?.internalValue;
    }
    if (this._groupOnSystemProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupOnSystemProvisioning = this._groupOnSystemProvisioning;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._provisionedAD?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedAD = this._provisionedAD?.internalValue;
    }
    if (this._provisionedAzureOidcDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedAzureOidcDirectory = this._provisionedAzureOidcDirectory?.internalValue;
    }
    if (this._provisionedAzureSyncLdapDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedAzureSyncLdapDirectory = this._provisionedAzureSyncLdapDirectory?.internalValue;
    }
    if (this._provisionedAzureTenant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedAzureTenant = this._provisionedAzureTenant?.internalValue;
    }
    if (this._provisionedInternalLdap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedInternalLdap = this._provisionedInternalLdap?.internalValue;
    }
    if (this._provisionedLdap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedLdap = this._provisionedLdap?.internalValue;
    }
    if (this._provisionedLdapDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedLdapDirectory = this._provisionedLdapDirectory?.internalValue;
    }
    if (this._provisionedNamespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedNamespace = this._provisionedNamespace?.internalValue;
    }
    if (this._provisionedScim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedScim = this._provisionedScim?.internalValue;
    }
    if (this._selfServiceExistingGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceExistingGroups = this._selfServiceExistingGroups;
    }
    if (this._selfServiceNewGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceNewGroups = this._selfServiceNewGroups;
    }
    if (this._selfServiceNewNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceNewNamespaces = this._selfServiceNewNamespaces;
    }
    if (this._selfServiceServiceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceServiceAccounts = this._selfServiceServiceAccounts;
    }
    if (this._shouldDestroyUnknownAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDestroyUnknownAccounts = this._shouldDestroyUnknownAccounts;
    }
    if (this._technicalAdministrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technicalAdministrator = this._technicalAdministrator?.internalValue;
    }
    if (this._usernamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abstractProvisionedLdap.internalValue = undefined;
      this._active = undefined;
      this._cleanupPeriod.internalValue = undefined;
      this._contentAdministrator.internalValue = undefined;
      this._groupOnSystemProvisioning = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._provisionedAD.internalValue = undefined;
      this._provisionedAzureOidcDirectory.internalValue = undefined;
      this._provisionedAzureSyncLdapDirectory.internalValue = undefined;
      this._provisionedAzureTenant.internalValue = undefined;
      this._provisionedInternalLdap.internalValue = undefined;
      this._provisionedLdap.internalValue = undefined;
      this._provisionedLdapDirectory.internalValue = undefined;
      this._provisionedNamespace.internalValue = undefined;
      this._provisionedScim.internalValue = undefined;
      this._selfServiceExistingGroups = undefined;
      this._selfServiceNewGroups = undefined;
      this._selfServiceNewNamespaces = undefined;
      this._selfServiceServiceAccounts = undefined;
      this._shouldDestroyUnknownAccounts = undefined;
      this._technicalAdministrator.internalValue = undefined;
      this._usernamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abstractProvisionedLdap.internalValue = value.abstractProvisionedLdap;
      this._active = value.active;
      this._cleanupPeriod.internalValue = value.cleanupPeriod;
      this._contentAdministrator.internalValue = value.contentAdministrator;
      this._groupOnSystemProvisioning = value.groupOnSystemProvisioning;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
      this._owner.internalValue = value.owner;
      this._provisionedAD.internalValue = value.provisionedAD;
      this._provisionedAzureOidcDirectory.internalValue = value.provisionedAzureOidcDirectory;
      this._provisionedAzureSyncLdapDirectory.internalValue = value.provisionedAzureSyncLdapDirectory;
      this._provisionedAzureTenant.internalValue = value.provisionedAzureTenant;
      this._provisionedInternalLdap.internalValue = value.provisionedInternalLdap;
      this._provisionedLdap.internalValue = value.provisionedLdap;
      this._provisionedLdapDirectory.internalValue = value.provisionedLdapDirectory;
      this._provisionedNamespace.internalValue = value.provisionedNamespace;
      this._provisionedScim.internalValue = value.provisionedScim;
      this._selfServiceExistingGroups = value.selfServiceExistingGroups;
      this._selfServiceNewGroups = value.selfServiceNewGroups;
      this._selfServiceNewNamespaces = value.selfServiceNewNamespaces;
      this._selfServiceServiceAccounts = value.selfServiceServiceAccounts;
      this._shouldDestroyUnknownAccounts = value.shouldDestroyUnknownAccounts;
      this._technicalAdministrator.internalValue = value.technicalAdministrator;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // abstract_provisioned_ldap - computed: true, optional: true, required: false
  private _abstractProvisionedLdap = new GroupContentAdministeredSystemsAbstractProvisionedLdapOutputReference(this, "abstract_provisioned_ldap");
  public get abstractProvisionedLdap() {
    return this._abstractProvisionedLdap;
  }
  public putAbstractProvisionedLdap(value: GroupContentAdministeredSystemsAbstractProvisionedLdap) {
    this._abstractProvisionedLdap.internalValue = value;
  }
  public resetAbstractProvisionedLdap() {
    this._abstractProvisionedLdap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abstractProvisionedLdapInput() {
    return this._abstractProvisionedLdap.internalValue;
  }

  // account_count - computed: true, optional: false, required: false
  public get accountCount() {
    return this.getNumberAttribute('account_count');
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // admin_permissions - computed: true, optional: false, required: false
  public get adminPermissions() {
    return this.getBooleanAttribute('admin_permissions');
  }

  // can_write_accounts - computed: true, optional: false, required: false
  public get canWriteAccounts() {
    return this.getBooleanAttribute('can_write_accounts');
  }

  // cleanup_period - computed: true, optional: false, required: true
  private _cleanupPeriod = new GroupContentAdministeredSystemsCleanupPeriodOutputReference(this, "cleanup_period");
  public get cleanupPeriod() {
    return this._cleanupPeriod;
  }
  public putCleanupPeriod(value: GroupContentAdministeredSystemsCleanupPeriod) {
    this._cleanupPeriod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPeriodInput() {
    return this._cleanupPeriod.internalValue;
  }

  // content_admin_permissions - computed: true, optional: false, required: false
  public get contentAdminPermissions() {
    return this.getBooleanAttribute('content_admin_permissions');
  }

  // content_administrator - computed: true, optional: true, required: false
  private _contentAdministrator = new GroupContentAdministeredSystemsContentAdministratorOutputReference(this, "content_administrator");
  public get contentAdministrator() {
    return this._contentAdministrator;
  }
  public putContentAdministrator(value: GroupContentAdministeredSystemsContentAdministrator) {
    this._contentAdministrator.internalValue = value;
  }
  public resetContentAdministrator() {
    this._contentAdministrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAdministratorInput() {
    return this._contentAdministrator.internalValue;
  }

  // external_uuid - computed: true, optional: false, required: false
  public get externalUuid() {
    return this.getStringAttribute('external_uuid');
  }

  // group_on_system_provisioning - computed: true, optional: true, required: false
  private _groupOnSystemProvisioning?: string; 
  public get groupOnSystemProvisioning() {
    return this.getStringAttribute('group_on_system_provisioning');
  }
  public set groupOnSystemProvisioning(value: string) {
    this._groupOnSystemProvisioning = value;
  }
  public resetGroupOnSystemProvisioning() {
    this._groupOnSystemProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOnSystemProvisioningInput() {
    return this._groupOnSystemProvisioning;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupContentAdministeredSystemsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupContentAdministeredSystemsOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupContentAdministeredSystemsOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // owner - computed: true, optional: false, required: true
  private _owner = new GroupContentAdministeredSystemsOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: GroupContentAdministeredSystemsOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // owner_permissions - computed: true, optional: false, required: false
  public get ownerPermissions() {
    return this.getBooleanAttribute('owner_permissions');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // provisioned_a_d - computed: true, optional: true, required: false
  private _provisionedAD = new GroupContentAdministeredSystemsProvisionedADOutputReference(this, "provisioned_a_d");
  public get provisionedAD() {
    return this._provisionedAD;
  }
  public putProvisionedAD(value: GroupContentAdministeredSystemsProvisionedAD) {
    this._provisionedAD.internalValue = value;
  }
  public resetProvisionedAD() {
    this._provisionedAD.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedADInput() {
    return this._provisionedAD.internalValue;
  }

  // provisioned_azure_oidc_directory - computed: true, optional: true, required: false
  private _provisionedAzureOidcDirectory = new GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryOutputReference(this, "provisioned_azure_oidc_directory");
  public get provisionedAzureOidcDirectory() {
    return this._provisionedAzureOidcDirectory;
  }
  public putProvisionedAzureOidcDirectory(value: GroupContentAdministeredSystemsProvisionedAzureOidcDirectory) {
    this._provisionedAzureOidcDirectory.internalValue = value;
  }
  public resetProvisionedAzureOidcDirectory() {
    this._provisionedAzureOidcDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedAzureOidcDirectoryInput() {
    return this._provisionedAzureOidcDirectory.internalValue;
  }

  // provisioned_azure_sync_ldap_directory - computed: true, optional: true, required: false
  private _provisionedAzureSyncLdapDirectory = new GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryOutputReference(this, "provisioned_azure_sync_ldap_directory");
  public get provisionedAzureSyncLdapDirectory() {
    return this._provisionedAzureSyncLdapDirectory;
  }
  public putProvisionedAzureSyncLdapDirectory(value: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory) {
    this._provisionedAzureSyncLdapDirectory.internalValue = value;
  }
  public resetProvisionedAzureSyncLdapDirectory() {
    this._provisionedAzureSyncLdapDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedAzureSyncLdapDirectoryInput() {
    return this._provisionedAzureSyncLdapDirectory.internalValue;
  }

  // provisioned_azure_tenant - computed: true, optional: true, required: false
  private _provisionedAzureTenant = new GroupContentAdministeredSystemsProvisionedAzureTenantOutputReference(this, "provisioned_azure_tenant");
  public get provisionedAzureTenant() {
    return this._provisionedAzureTenant;
  }
  public putProvisionedAzureTenant(value: GroupContentAdministeredSystemsProvisionedAzureTenant) {
    this._provisionedAzureTenant.internalValue = value;
  }
  public resetProvisionedAzureTenant() {
    this._provisionedAzureTenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedAzureTenantInput() {
    return this._provisionedAzureTenant.internalValue;
  }

  // provisioned_internal_ldap - computed: true, optional: true, required: false
  private _provisionedInternalLdap = new GroupContentAdministeredSystemsProvisionedInternalLdapOutputReference(this, "provisioned_internal_ldap");
  public get provisionedInternalLdap() {
    return this._provisionedInternalLdap;
  }
  public putProvisionedInternalLdap(value: GroupContentAdministeredSystemsProvisionedInternalLdap) {
    this._provisionedInternalLdap.internalValue = value;
  }
  public resetProvisionedInternalLdap() {
    this._provisionedInternalLdap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedInternalLdapInput() {
    return this._provisionedInternalLdap.internalValue;
  }

  // provisioned_ldap - computed: true, optional: true, required: false
  private _provisionedLdap = new GroupContentAdministeredSystemsProvisionedLdapOutputReference(this, "provisioned_ldap");
  public get provisionedLdap() {
    return this._provisionedLdap;
  }
  public putProvisionedLdap(value: GroupContentAdministeredSystemsProvisionedLdap) {
    this._provisionedLdap.internalValue = value;
  }
  public resetProvisionedLdap() {
    this._provisionedLdap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedLdapInput() {
    return this._provisionedLdap.internalValue;
  }

  // provisioned_ldap_directory - computed: true, optional: true, required: false
  private _provisionedLdapDirectory = new GroupContentAdministeredSystemsProvisionedLdapDirectoryOutputReference(this, "provisioned_ldap_directory");
  public get provisionedLdapDirectory() {
    return this._provisionedLdapDirectory;
  }
  public putProvisionedLdapDirectory(value: GroupContentAdministeredSystemsProvisionedLdapDirectory) {
    this._provisionedLdapDirectory.internalValue = value;
  }
  public resetProvisionedLdapDirectory() {
    this._provisionedLdapDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedLdapDirectoryInput() {
    return this._provisionedLdapDirectory.internalValue;
  }

  // provisioned_namespace - computed: true, optional: true, required: false
  private _provisionedNamespace = new GroupContentAdministeredSystemsProvisionedNamespaceOutputReference(this, "provisioned_namespace");
  public get provisionedNamespace() {
    return this._provisionedNamespace;
  }
  public putProvisionedNamespace(value: GroupContentAdministeredSystemsProvisionedNamespace) {
    this._provisionedNamespace.internalValue = value;
  }
  public resetProvisionedNamespace() {
    this._provisionedNamespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedNamespaceInput() {
    return this._provisionedNamespace.internalValue;
  }

  // provisioned_scim - computed: true, optional: true, required: false
  private _provisionedScim = new GroupContentAdministeredSystemsProvisionedScimOutputReference(this, "provisioned_scim");
  public get provisionedScim() {
    return this._provisionedScim;
  }
  public putProvisionedScim(value: GroupContentAdministeredSystemsProvisionedScim) {
    this._provisionedScim.internalValue = value;
  }
  public resetProvisionedScim() {
    this._provisionedScim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedScimInput() {
    return this._provisionedScim.internalValue;
  }

  // self_service_existing_groups - computed: true, optional: true, required: false
  private _selfServiceExistingGroups?: boolean | cdktf.IResolvable; 
  public get selfServiceExistingGroups() {
    return this.getBooleanAttribute('self_service_existing_groups');
  }
  public set selfServiceExistingGroups(value: boolean | cdktf.IResolvable) {
    this._selfServiceExistingGroups = value;
  }
  public resetSelfServiceExistingGroups() {
    this._selfServiceExistingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceExistingGroupsInput() {
    return this._selfServiceExistingGroups;
  }

  // self_service_new_groups - computed: true, optional: true, required: false
  private _selfServiceNewGroups?: boolean | cdktf.IResolvable; 
  public get selfServiceNewGroups() {
    return this.getBooleanAttribute('self_service_new_groups');
  }
  public set selfServiceNewGroups(value: boolean | cdktf.IResolvable) {
    this._selfServiceNewGroups = value;
  }
  public resetSelfServiceNewGroups() {
    this._selfServiceNewGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceNewGroupsInput() {
    return this._selfServiceNewGroups;
  }

  // self_service_new_namespaces - computed: true, optional: true, required: false
  private _selfServiceNewNamespaces?: boolean | cdktf.IResolvable; 
  public get selfServiceNewNamespaces() {
    return this.getBooleanAttribute('self_service_new_namespaces');
  }
  public set selfServiceNewNamespaces(value: boolean | cdktf.IResolvable) {
    this._selfServiceNewNamespaces = value;
  }
  public resetSelfServiceNewNamespaces() {
    this._selfServiceNewNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceNewNamespacesInput() {
    return this._selfServiceNewNamespaces;
  }

  // self_service_service_accounts - computed: true, optional: true, required: false
  private _selfServiceServiceAccounts?: boolean | cdktf.IResolvable; 
  public get selfServiceServiceAccounts() {
    return this.getBooleanAttribute('self_service_service_accounts');
  }
  public set selfServiceServiceAccounts(value: boolean | cdktf.IResolvable) {
    this._selfServiceServiceAccounts = value;
  }
  public resetSelfServiceServiceAccounts() {
    this._selfServiceServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceServiceAccountsInput() {
    return this._selfServiceServiceAccounts;
  }

  // should_destroy_unknown_accounts - computed: true, optional: true, required: false
  private _shouldDestroyUnknownAccounts?: boolean | cdktf.IResolvable; 
  public get shouldDestroyUnknownAccounts() {
    return this.getBooleanAttribute('should_destroy_unknown_accounts');
  }
  public set shouldDestroyUnknownAccounts(value: boolean | cdktf.IResolvable) {
    this._shouldDestroyUnknownAccounts = value;
  }
  public resetShouldDestroyUnknownAccounts() {
    this._shouldDestroyUnknownAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDestroyUnknownAccountsInput() {
    return this._shouldDestroyUnknownAccounts;
  }

  // technical_administrator - computed: true, optional: false, required: true
  private _technicalAdministrator = new GroupContentAdministeredSystemsTechnicalAdministratorOutputReference(this, "technical_administrator");
  public get technicalAdministrator() {
    return this._technicalAdministrator;
  }
  public putTechnicalAdministrator(value: GroupContentAdministeredSystemsTechnicalAdministrator) {
    this._technicalAdministrator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalAdministratorInput() {
    return this._technicalAdministrator.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username_prefix - computed: true, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupContentAdministeredSystemsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystems[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsOutputReference {
    return new GroupContentAdministeredSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesAuditorGroupForLinks {
}

export function groupGlobalRolesAuditorGroupForLinksToTerraform(struct?: GroupGlobalRolesAuditorGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGlobalRolesAuditorGroupForLinksToHclTerraform(struct?: GroupGlobalRolesAuditorGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGlobalRolesAuditorGroupForLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesAuditorGroupForLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesAuditorGroupForLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupGlobalRolesAuditorGroupForLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupGlobalRolesAuditorGroupForLinksOutputReference {
    return new GroupGlobalRolesAuditorGroupForLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesAuditorGroupForPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupGlobalRolesAuditorGroupForPermissionsToTerraform(struct?: GroupGlobalRolesAuditorGroupForPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupGlobalRolesAuditorGroupForPermissionsToHclTerraform(struct?: GroupGlobalRolesAuditorGroupForPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupGlobalRolesAuditorGroupForPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesAuditorGroupForPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesAuditorGroupForPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupGlobalRolesAuditorGroupForPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesAuditorGroupForPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesAuditorGroupForPermissionsOutputReference {
    return new GroupGlobalRolesAuditorGroupForPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesAuditorGroupFor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupGlobalRolesAuditorGroupForToTerraform(struct?: GroupGlobalRolesAuditorGroupFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupGlobalRolesAuditorGroupForToHclTerraform(struct?: GroupGlobalRolesAuditorGroupFor | cdktf.IResolvable): any {
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

export class GroupGlobalRolesAuditorGroupForOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesAuditorGroupFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupGlobalRolesAuditorGroupFor | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupGlobalRolesAuditorGroupForLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupGlobalRolesAuditorGroupForPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupGlobalRolesAuditorGroupForList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesAuditorGroupFor[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesAuditorGroupForOutputReference {
    return new GroupGlobalRolesAuditorGroupForOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesCreateGroupApproveGroupForLinks {
}

export function groupGlobalRolesCreateGroupApproveGroupForLinksToTerraform(struct?: GroupGlobalRolesCreateGroupApproveGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGlobalRolesCreateGroupApproveGroupForLinksToHclTerraform(struct?: GroupGlobalRolesCreateGroupApproveGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGlobalRolesCreateGroupApproveGroupForLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesCreateGroupApproveGroupForLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesCreateGroupApproveGroupForLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupGlobalRolesCreateGroupApproveGroupForLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupGlobalRolesCreateGroupApproveGroupForLinksOutputReference {
    return new GroupGlobalRolesCreateGroupApproveGroupForLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesCreateGroupApproveGroupForPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupGlobalRolesCreateGroupApproveGroupForPermissionsToTerraform(struct?: GroupGlobalRolesCreateGroupApproveGroupForPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupGlobalRolesCreateGroupApproveGroupForPermissionsToHclTerraform(struct?: GroupGlobalRolesCreateGroupApproveGroupForPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupGlobalRolesCreateGroupApproveGroupForPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesCreateGroupApproveGroupForPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesCreateGroupApproveGroupForPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupGlobalRolesCreateGroupApproveGroupForPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesCreateGroupApproveGroupForPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesCreateGroupApproveGroupForPermissionsOutputReference {
    return new GroupGlobalRolesCreateGroupApproveGroupForPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesCreateGroupApproveGroupFor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupGlobalRolesCreateGroupApproveGroupForToTerraform(struct?: GroupGlobalRolesCreateGroupApproveGroupFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupGlobalRolesCreateGroupApproveGroupForToHclTerraform(struct?: GroupGlobalRolesCreateGroupApproveGroupFor | cdktf.IResolvable): any {
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

export class GroupGlobalRolesCreateGroupApproveGroupForOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesCreateGroupApproveGroupFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupGlobalRolesCreateGroupApproveGroupFor | cdktf.IResolvable | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new GroupGlobalRolesCreateGroupApproveGroupForLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupGlobalRolesCreateGroupApproveGroupForPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupGlobalRolesCreateGroupApproveGroupForList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesCreateGroupApproveGroupFor[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesCreateGroupApproveGroupForOutputReference {
    return new GroupGlobalRolesCreateGroupApproveGroupForOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesEnableTechAdminApproveGroupForLinks {
}

export function groupGlobalRolesEnableTechAdminApproveGroupForLinksToTerraform(struct?: GroupGlobalRolesEnableTechAdminApproveGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGlobalRolesEnableTechAdminApproveGroupForLinksToHclTerraform(struct?: GroupGlobalRolesEnableTechAdminApproveGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGlobalRolesEnableTechAdminApproveGroupForLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesEnableTechAdminApproveGroupForLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesEnableTechAdminApproveGroupForLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupGlobalRolesEnableTechAdminApproveGroupForLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupGlobalRolesEnableTechAdminApproveGroupForLinksOutputReference {
    return new GroupGlobalRolesEnableTechAdminApproveGroupForLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesEnableTechAdminApproveGroupForPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupGlobalRolesEnableTechAdminApproveGroupForPermissionsToTerraform(struct?: GroupGlobalRolesEnableTechAdminApproveGroupForPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupGlobalRolesEnableTechAdminApproveGroupForPermissionsToHclTerraform(struct?: GroupGlobalRolesEnableTechAdminApproveGroupForPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupGlobalRolesEnableTechAdminApproveGroupForPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesEnableTechAdminApproveGroupForPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesEnableTechAdminApproveGroupForPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupGlobalRolesEnableTechAdminApproveGroupForPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesEnableTechAdminApproveGroupForPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesEnableTechAdminApproveGroupForPermissionsOutputReference {
    return new GroupGlobalRolesEnableTechAdminApproveGroupForPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
