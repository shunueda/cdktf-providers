import * as cdktf from 'cdktf';
import { GroupWebhooksClientCertificateLinksList,
GroupWebhooksClientCertificatePermissionsList,
GroupWebhooksAccount,
groupWebhooksAccountToTerraform,
groupWebhooksAccountToHclTerraform,
GroupWebhooksAccountOutputReference,
GroupWebhooksClient,
groupWebhooksClientToTerraform,
groupWebhooksClientToHclTerraform,
GroupWebhooksClientOutputReference } from './structs1600'
export interface GroupWebhooksClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupWebhooksClientCertificateToTerraform(struct?: GroupWebhooksClientCertificate | cdktf.IResolvable): any {
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


export function groupWebhooksClientCertificateToHclTerraform(struct?: GroupWebhooksClientCertificate | cdktf.IResolvable): any {
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

export class GroupWebhooksClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupWebhooksClientCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupWebhooksClientCertificate | cdktf.IResolvable | undefined) {
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
  private _links = new GroupWebhooksClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupWebhooksClientCertificatePermissionsList(this, "permissions", false);
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
export interface GroupWebhooksDirectoryLinks {
}

export function groupWebhooksDirectoryLinksToTerraform(struct?: GroupWebhooksDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupWebhooksDirectoryLinksToHclTerraform(struct?: GroupWebhooksDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupWebhooksDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooksDirectoryLinks | undefined) {
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

export class GroupWebhooksDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupWebhooksDirectoryLinksOutputReference {
    return new GroupWebhooksDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksDirectoryPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupWebhooksDirectoryPermissionsToTerraform(struct?: GroupWebhooksDirectoryPermissions): any {
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


export function groupWebhooksDirectoryPermissionsToHclTerraform(struct?: GroupWebhooksDirectoryPermissions): any {
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

export class GroupWebhooksDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksDirectoryPermissions | undefined {
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

  public set internalValue(value: GroupWebhooksDirectoryPermissions | undefined) {
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

export class GroupWebhooksDirectoryPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooksDirectoryPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksDirectoryPermissionsOutputReference {
    return new GroupWebhooksDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupWebhooksDirectoryToTerraform(struct?: GroupWebhooksDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupWebhooksDirectoryToHclTerraform(struct?: GroupWebhooksDirectory | cdktf.IResolvable): any {
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

export class GroupWebhooksDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupWebhooksDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GroupWebhooksDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _links = new GroupWebhooksDirectoryLinksList(this, "links", false);
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
  private _permissions = new GroupWebhooksDirectoryPermissionsList(this, "permissions", false);
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
export interface GroupWebhooksGroupLinks {
}

export function groupWebhooksGroupLinksToTerraform(struct?: GroupWebhooksGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupWebhooksGroupLinksToHclTerraform(struct?: GroupWebhooksGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupWebhooksGroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksGroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooksGroupLinks | undefined) {
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

export class GroupWebhooksGroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupWebhooksGroupLinksOutputReference {
    return new GroupWebhooksGroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksGroupOrganizationalUnitLinks {
}

export function groupWebhooksGroupOrganizationalUnitLinksToTerraform(struct?: GroupWebhooksGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupWebhooksGroupOrganizationalUnitLinksToHclTerraform(struct?: GroupWebhooksGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupWebhooksGroupOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksGroupOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooksGroupOrganizationalUnitLinks | undefined) {
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

export class GroupWebhooksGroupOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupWebhooksGroupOrganizationalUnitLinksOutputReference {
    return new GroupWebhooksGroupOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksGroupOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupWebhooksGroupOrganizationalUnitPermissionsToTerraform(struct?: GroupWebhooksGroupOrganizationalUnitPermissions): any {
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


export function groupWebhooksGroupOrganizationalUnitPermissionsToHclTerraform(struct?: GroupWebhooksGroupOrganizationalUnitPermissions): any {
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

export class GroupWebhooksGroupOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksGroupOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: GroupWebhooksGroupOrganizationalUnitPermissions | undefined) {
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

export class GroupWebhooksGroupOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooksGroupOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksGroupOrganizationalUnitPermissionsOutputReference {
    return new GroupWebhooksGroupOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksGroupOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupWebhooksGroupOrganizationalUnitToTerraform(struct?: GroupWebhooksGroupOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupWebhooksGroupOrganizationalUnitToHclTerraform(struct?: GroupWebhooksGroupOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupWebhooksGroupOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupWebhooksGroupOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupWebhooksGroupOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new GroupWebhooksGroupOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new GroupWebhooksGroupOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupWebhooksGroupPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupWebhooksGroupPermissionsToTerraform(struct?: GroupWebhooksGroupPermissions): any {
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


export function groupWebhooksGroupPermissionsToHclTerraform(struct?: GroupWebhooksGroupPermissions): any {
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

export class GroupWebhooksGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksGroupPermissions | undefined {
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

  public set internalValue(value: GroupWebhooksGroupPermissions | undefined) {
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

export class GroupWebhooksGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooksGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksGroupPermissionsOutputReference {
    return new GroupWebhooksGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupWebhooksGroupOrganizationalUnit;
}

export function groupWebhooksGroupToTerraform(struct?: GroupWebhooksGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupWebhooksGroupOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupWebhooksGroupToHclTerraform(struct?: GroupWebhooksGroup | cdktf.IResolvable): any {
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
      value: groupWebhooksGroupOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksGroupOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupWebhooksGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupWebhooksGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupWebhooksGroup | cdktf.IResolvable | undefined) {
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
  private _links = new GroupWebhooksGroupLinksList(this, "links", false);
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
  private _organizationalUnit = new GroupWebhooksGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupWebhooksGroupOrganizationalUnit) {
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
  private _permissions = new GroupWebhooksGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupWebhooksLinks {
}

export function groupWebhooksLinksToTerraform(struct?: GroupWebhooksLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupWebhooksLinksToHclTerraform(struct?: GroupWebhooksLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupWebhooksLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooksLinks | undefined) {
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

export class GroupWebhooksLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupWebhooksLinksOutputReference {
    return new GroupWebhooksLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupWebhooksPermissionsToTerraform(struct?: GroupWebhooksPermissions): any {
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


export function groupWebhooksPermissionsToHclTerraform(struct?: GroupWebhooksPermissions): any {
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

export class GroupWebhooksPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksPermissions | undefined {
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

  public set internalValue(value: GroupWebhooksPermissions | undefined) {
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

export class GroupWebhooksPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooksPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksPermissionsOutputReference {
    return new GroupWebhooksPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksSystemLinks {
}

export function groupWebhooksSystemLinksToTerraform(struct?: GroupWebhooksSystemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupWebhooksSystemLinksToHclTerraform(struct?: GroupWebhooksSystemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupWebhooksSystemLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksSystemLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooksSystemLinks | undefined) {
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

export class GroupWebhooksSystemLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupWebhooksSystemLinksOutputReference {
    return new GroupWebhooksSystemLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksSystemOrganizationalUnitLinks {
}

export function groupWebhooksSystemOrganizationalUnitLinksToTerraform(struct?: GroupWebhooksSystemOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupWebhooksSystemOrganizationalUnitLinksToHclTerraform(struct?: GroupWebhooksSystemOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupWebhooksSystemOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksSystemOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooksSystemOrganizationalUnitLinks | undefined) {
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

export class GroupWebhooksSystemOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupWebhooksSystemOrganizationalUnitLinksOutputReference {
    return new GroupWebhooksSystemOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksSystemOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupWebhooksSystemOrganizationalUnitPermissionsToTerraform(struct?: GroupWebhooksSystemOrganizationalUnitPermissions): any {
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


export function groupWebhooksSystemOrganizationalUnitPermissionsToHclTerraform(struct?: GroupWebhooksSystemOrganizationalUnitPermissions): any {
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

export class GroupWebhooksSystemOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksSystemOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: GroupWebhooksSystemOrganizationalUnitPermissions | undefined) {
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

export class GroupWebhooksSystemOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooksSystemOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksSystemOrganizationalUnitPermissionsOutputReference {
    return new GroupWebhooksSystemOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksSystemOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupWebhooksSystemOrganizationalUnitToTerraform(struct?: GroupWebhooksSystemOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupWebhooksSystemOrganizationalUnitToHclTerraform(struct?: GroupWebhooksSystemOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupWebhooksSystemOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupWebhooksSystemOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupWebhooksSystemOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new GroupWebhooksSystemOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new GroupWebhooksSystemOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupWebhooksSystemPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupWebhooksSystemPermissionsToTerraform(struct?: GroupWebhooksSystemPermissions): any {
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


export function groupWebhooksSystemPermissionsToHclTerraform(struct?: GroupWebhooksSystemPermissions): any {
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

export class GroupWebhooksSystemPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksSystemPermissions | undefined {
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

  public set internalValue(value: GroupWebhooksSystemPermissions | undefined) {
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

export class GroupWebhooksSystemPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooksSystemPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksSystemPermissionsOutputReference {
    return new GroupWebhooksSystemPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupWebhooksSystemOrganizationalUnit;
}

export function groupWebhooksSystemToTerraform(struct?: GroupWebhooksSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupWebhooksSystemOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupWebhooksSystemToHclTerraform(struct?: GroupWebhooksSystem | cdktf.IResolvable): any {
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
      value: groupWebhooksSystemOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksSystemOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupWebhooksSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupWebhooksSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GroupWebhooksSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
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
  private _links = new GroupWebhooksSystemLinksList(this, "links", false);
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
  private _organizationalUnit = new GroupWebhooksSystemOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupWebhooksSystemOrganizationalUnit) {
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
  private _permissions = new GroupWebhooksSystemPermissionsList(this, "permissions", false);
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
export interface GroupWebhooksTrustedCertificateLinks {
}

export function groupWebhooksTrustedCertificateLinksToTerraform(struct?: GroupWebhooksTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupWebhooksTrustedCertificateLinksToHclTerraform(struct?: GroupWebhooksTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupWebhooksTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooksTrustedCertificateLinks | undefined) {
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

export class GroupWebhooksTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupWebhooksTrustedCertificateLinksOutputReference {
    return new GroupWebhooksTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksTrustedCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupWebhooksTrustedCertificatePermissionsToTerraform(struct?: GroupWebhooksTrustedCertificatePermissions): any {
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


export function groupWebhooksTrustedCertificatePermissionsToHclTerraform(struct?: GroupWebhooksTrustedCertificatePermissions): any {
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

export class GroupWebhooksTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooksTrustedCertificatePermissions | undefined {
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

  public set internalValue(value: GroupWebhooksTrustedCertificatePermissions | undefined) {
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

export class GroupWebhooksTrustedCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooksTrustedCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksTrustedCertificatePermissionsOutputReference {
    return new GroupWebhooksTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupWebhooksTrustedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupWebhooksTrustedCertificateToTerraform(struct?: GroupWebhooksTrustedCertificate | cdktf.IResolvable): any {
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


export function groupWebhooksTrustedCertificateToHclTerraform(struct?: GroupWebhooksTrustedCertificate | cdktf.IResolvable): any {
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

export class GroupWebhooksTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupWebhooksTrustedCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupWebhooksTrustedCertificate | cdktf.IResolvable | undefined) {
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
  private _links = new GroupWebhooksTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupWebhooksTrustedCertificatePermissionsList(this, "permissions", false);
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
export interface GroupWebhooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#account Group#account}
  */
  readonly account?: GroupWebhooksAccount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#all_types Group#all_types}
  */
  readonly allTypes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#authentication_scheme Group#authentication_scheme}
  */
  readonly authenticationScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#basic_auth_password Group#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#basic_auth_username Group#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#bearer_token Group#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client Group#client}
  */
  readonly client?: GroupWebhooksClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_certificate Group#client_certificate}
  */
  readonly clientCertificate?: GroupWebhooksClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#custom_header_name Group#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#custom_header_value Group#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#directory Group#directory}
  */
  readonly directory?: GroupWebhooksDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#group Group#group}
  */
  readonly group?: GroupWebhooksGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#system Group#system}
  */
  readonly systemAttribute?: GroupWebhooksSystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#tls Group#tls}
  */
  readonly tls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#trusted_certificate Group#trusted_certificate}
  */
  readonly trustedCertificate?: GroupWebhooksTrustedCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#types Group#types}
  */
  readonly types?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#url Group#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#verbose_payloads Group#verbose_payloads}
  */
  readonly verbosePayloads?: boolean | cdktf.IResolvable;
}

export function groupWebhooksToTerraform(struct?: GroupWebhooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: groupWebhooksAccountToTerraform(struct!.account),
    active: cdktf.booleanToTerraform(struct!.active),
    all_types: cdktf.booleanToTerraform(struct!.allTypes),
    authentication_scheme: cdktf.stringToTerraform(struct!.authenticationScheme),
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_username: cdktf.stringToTerraform(struct!.basicAuthUsername),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    client: groupWebhooksClientToTerraform(struct!.client),
    client_certificate: groupWebhooksClientCertificateToTerraform(struct!.clientCertificate),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    directory: groupWebhooksDirectoryToTerraform(struct!.directory),
    group: groupWebhooksGroupToTerraform(struct!.group),
    name: cdktf.stringToTerraform(struct!.name),
    system: groupWebhooksSystemToTerraform(struct!.systemAttribute),
    tls: cdktf.stringToTerraform(struct!.tls),
    trusted_certificate: groupWebhooksTrustedCertificateToTerraform(struct!.trustedCertificate),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    url: cdktf.stringToTerraform(struct!.url),
    verbose_payloads: cdktf.booleanToTerraform(struct!.verbosePayloads),
  }
}


export function groupWebhooksToHclTerraform(struct?: GroupWebhooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: groupWebhooksAccountToHclTerraform(struct!.account),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksAccount",
    },
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_types: {
      value: cdktf.booleanToHclTerraform(struct!.allTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    client: {
      value: groupWebhooksClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksClient",
    },
    client_certificate: {
      value: groupWebhooksClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksClientCertificate",
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
    directory: {
      value: groupWebhooksDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksDirectory",
    },
    group: {
      value: groupWebhooksGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksGroup",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: groupWebhooksSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksSystem",
    },
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_certificate: {
      value: groupWebhooksTrustedCertificateToHclTerraform(struct!.trustedCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupWebhooksTrustedCertificate",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbose_payloads: {
      value: cdktf.booleanToHclTerraform(struct!.verbosePayloads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupWebhooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._allTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTypes = this._allTypes;
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
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._trustedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificate = this._trustedCertificate?.internalValue;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._verbosePayloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbosePayloads = this._verbosePayloads;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupWebhooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account.internalValue = undefined;
      this._active = undefined;
      this._allTypes = undefined;
      this._authenticationScheme = undefined;
      this._basicAuthPassword = undefined;
      this._basicAuthUsername = undefined;
      this._bearerToken = undefined;
      this._client.internalValue = undefined;
      this._clientCertificate.internalValue = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._directory.internalValue = undefined;
      this._group.internalValue = undefined;
      this._name = undefined;
      this._system.internalValue = undefined;
      this._tls = undefined;
      this._trustedCertificate.internalValue = undefined;
      this._types = undefined;
      this._url = undefined;
      this._verbosePayloads = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account.internalValue = value.account;
      this._active = value.active;
      this._allTypes = value.allTypes;
      this._authenticationScheme = value.authenticationScheme;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUsername = value.basicAuthUsername;
      this._bearerToken = value.bearerToken;
      this._client.internalValue = value.client;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._directory.internalValue = value.directory;
      this._group.internalValue = value.group;
      this._name = value.name;
      this._system.internalValue = value.systemAttribute;
      this._tls = value.tls;
      this._trustedCertificate.internalValue = value.trustedCertificate;
      this._types = value.types;
      this._url = value.url;
      this._verbosePayloads = value.verbosePayloads;
    }
  }

  // account - computed: true, optional: true, required: false
  private _account = new GroupWebhooksAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }
  public putAccount(value: GroupWebhooksAccount) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
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

  // all_types - computed: true, optional: true, required: false
  private _allTypes?: boolean | cdktf.IResolvable; 
  public get allTypes() {
    return this.getBooleanAttribute('all_types');
  }
  public set allTypes(value: boolean | cdktf.IResolvable) {
    this._allTypes = value;
  }
  public resetAllTypes() {
    this._allTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTypesInput() {
    return this._allTypes;
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

  // client - computed: true, optional: true, required: false
  private _client = new GroupWebhooksClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: GroupWebhooksClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new GroupWebhooksClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GroupWebhooksClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
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

  // directory - computed: true, optional: true, required: false
  private _directory = new GroupWebhooksDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: GroupWebhooksDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // group - computed: true, optional: true, required: false
  private _group = new GroupWebhooksGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: GroupWebhooksGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupWebhooksLinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupWebhooksPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // system - computed: true, optional: true, required: false
  private _system = new GroupWebhooksSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: GroupWebhooksSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // trusted_certificate - computed: true, optional: true, required: false
  private _trustedCertificate = new GroupWebhooksTrustedCertificateOutputReference(this, "trusted_certificate");
  public get trustedCertificate() {
    return this._trustedCertificate;
  }
  public putTrustedCertificate(value: GroupWebhooksTrustedCertificate) {
    this._trustedCertificate.internalValue = value;
  }
  public resetTrustedCertificate() {
    this._trustedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificateInput() {
    return this._trustedCertificate.internalValue;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // verbose_payloads - computed: true, optional: true, required: false
  private _verbosePayloads?: boolean | cdktf.IResolvable; 
  public get verbosePayloads() {
    return this.getBooleanAttribute('verbose_payloads');
  }
  public set verbosePayloads(value: boolean | cdktf.IResolvable) {
    this._verbosePayloads = value;
  }
  public resetVerbosePayloads() {
    this._verbosePayloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosePayloadsInput() {
    return this._verbosePayloads;
  }
}

export class GroupWebhooksList extends cdktf.ComplexList {
  public internalValue? : GroupWebhooks[] | cdktf.IResolvable

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
  public get(index: number): GroupWebhooksOutputReference {
    return new GroupWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
