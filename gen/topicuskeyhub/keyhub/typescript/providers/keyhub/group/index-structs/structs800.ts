import * as cdktf from 'cdktf';
import { GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateLinksList,
GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificatePermissionsList,
GroupContentAdministeredSystemsAbstractProvisionedLdap,
groupContentAdministeredSystemsAbstractProvisionedLdapToTerraform,
groupContentAdministeredSystemsAbstractProvisionedLdapToHclTerraform,
GroupContentAdministeredSystemsAbstractProvisionedLdapOutputReference,
GroupContentAdministeredSystemsCleanupPeriod,
groupContentAdministeredSystemsCleanupPeriodToTerraform,
groupContentAdministeredSystemsCleanupPeriodToHclTerraform,
GroupContentAdministeredSystemsCleanupPeriodOutputReference,
GroupContentAdministeredSystemsContentAdministrator,
groupContentAdministeredSystemsContentAdministratorToTerraform,
groupContentAdministeredSystemsContentAdministratorToHclTerraform,
GroupContentAdministeredSystemsContentAdministratorOutputReference,
GroupContentAdministeredSystemsLinksList,
GroupContentAdministeredSystemsOrganizationalUnit,
groupContentAdministeredSystemsOrganizationalUnitToTerraform,
groupContentAdministeredSystemsOrganizationalUnitToHclTerraform,
GroupContentAdministeredSystemsOrganizationalUnitOutputReference,
GroupContentAdministeredSystemsOwner,
groupContentAdministeredSystemsOwnerToTerraform,
groupContentAdministeredSystemsOwnerToHclTerraform,
GroupContentAdministeredSystemsOwnerOutputReference,
GroupContentAdministeredSystemsPermissionsList,
GroupContentAdministeredSystemsProvisionedAD,
groupContentAdministeredSystemsProvisionedADToTerraform,
groupContentAdministeredSystemsProvisionedADToHclTerraform,
GroupContentAdministeredSystemsProvisionedADOutputReference,
GroupContentAdministeredSystemsProvisionedAzureOidcDirectory,
groupContentAdministeredSystemsProvisionedAzureOidcDirectoryToTerraform,
groupContentAdministeredSystemsProvisionedAzureOidcDirectoryToHclTerraform,
GroupContentAdministeredSystemsProvisionedAzureOidcDirectoryOutputReference,
GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory,
groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryToTerraform,
groupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryToHclTerraform,
GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectoryOutputReference,
GroupContentAdministeredSystemsProvisionedAzureTenant,
groupContentAdministeredSystemsProvisionedAzureTenantToTerraform,
groupContentAdministeredSystemsProvisionedAzureTenantToHclTerraform,
GroupContentAdministeredSystemsProvisionedAzureTenantOutputReference } from './structs400'
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate {
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

export function groupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate | cdktf.IResolvable): any {
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


export function groupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate | cdktf.IResolvable): any {
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

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate | cdktf.IResolvable | undefined) {
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
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificatePermissionsList(this, "permissions", false);
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
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinks {
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinksToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinksToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinks | undefined) {
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

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinksOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissions {
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

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissionsToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissions): any {
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


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissionsToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissions): any {
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

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissions | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissions | undefined) {
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

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissionsOutputReference {
    return new GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#color Group#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecret): any {
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

export class GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecret | undefined {
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

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecret | undefined) {
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
  private _links = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretLinksList(this, "links", false);
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
  private _permissions = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretPermissionsList(this, "permissions", false);
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
export interface GroupContentAdministeredSystemsProvisionedInternalLdapClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_certificate Group#client_certificate}
  */
  readonly clientCertificate?: GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#share_secret_in_vault Group#share_secret_in_vault}
  */
  readonly shareSecretInVault?: boolean | cdktf.IResolvable;
}

export function groupContentAdministeredSystemsProvisionedInternalLdapClientToTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: groupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateToTerraform(struct!.clientCertificate),
    share_secret_in_vault: cdktf.booleanToTerraform(struct!.shareSecretInVault),
  }
}


export function groupContentAdministeredSystemsProvisionedInternalLdapClientToHclTerraform(struct?: GroupContentAdministeredSystemsProvisionedInternalLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: groupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate",
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

  public set internalValue(value: GroupContentAdministeredSystemsProvisionedInternalLdapClient | cdktf.IResolvable | undefined) {
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
  private _clientCertificate = new GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GroupContentAdministeredSystemsProvisionedInternalLdapClientClientCertificate) {
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
  private _sharedSecret = new GroupContentAdministeredSystemsProvisionedInternalLdapClientSharedSecretOutputReference(this, "shared_secret");
  public get sharedSecret() {
    return this._sharedSecret;
  }

  // used_for_provisioning - computed: true, optional: false, required: false
  public get usedForProvisioning() {
    return this.getBooleanAttribute('used_for_provisioning');
  }
}
export interface GroupContentAdministeredSystemsProvisionedInternalLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client Group#client}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#next_id Group#next_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#next_id Group#next_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#gid Group#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#gid_numbering Group#gid_numbering}
  */
  readonly gidNumbering: GroupContentAdministeredSystemsProvisionedLdapGidNumbering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#hashing_scheme Group#hashing_scheme}
  */
  readonly hashingScheme: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#numbering Group#numbering}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#format Group#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#freely_useable Group#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#list Group#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#required Group#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#unique Group#unique}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attribute_definition Group#attribute_definition}
  */
  readonly attributeDefinition?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#script Group#script}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#next_id Group#next_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#next_id Group#next_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#accounts_writable Group#accounts_writable}
  */
  readonly accountsWritable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupContentAdministeredSystemsProvisionedLdapDirectoryAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#directory Group#directory}
  */
  readonly directory: GroupContentAdministeredSystemsProvisionedLdapDirectoryDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#gid Group#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#gid_numbering Group#gid_numbering}
  */
  readonly gidNumbering?: GroupContentAdministeredSystemsProvisionedLdapDirectoryGidNumbering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#group_dn Group#group_dn}
  */
  readonly groupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#hashing_scheme Group#hashing_scheme}
  */
  readonly hashingScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#numbering Group#numbering}
  */
  readonly numbering?: GroupContentAdministeredSystemsProvisionedLdapDirectoryNumbering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#object_classes Group#object_classes}
  */
  readonly objectClasses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#sam_account_name_scheme Group#sam_account_name_scheme}
  */
  readonly samAccountNameScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#ssh_public_key_support Group#ssh_public_key_support}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#base_system Group#base_system}
  */
  readonly baseSystem: GroupContentAdministeredSystemsProvisionedNamespaceBaseSystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#group_dn Group#group_dn}
  */
  readonly groupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#service_account_dn Group#service_account_dn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#format Group#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#freely_useable Group#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#list Group#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#required Group#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#unique Group#unique}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attribute_definition Group#attribute_definition}
  */
  readonly attributeDefinition?: GroupContentAdministeredSystemsProvisionedScimAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#script Group#script}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupContentAdministeredSystemsProvisionedScimAttributes[] | cdktf.IResolvable;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#custom_header_name Group#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#custom_header_value Group#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#url Group#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#vendor_escaped Group#vendor_escaped}
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
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    url: cdktf.stringToTerraform(struct!.url),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
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
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._url = undefined;
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
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._url = value.url;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#abstract_provisioned_ldap Group#abstract_provisioned_ldap}
  */
  readonly abstractProvisionedLdap?: GroupContentAdministeredSystemsAbstractProvisionedLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#cleanup_period Group#cleanup_period}
  */
  readonly cleanupPeriod: GroupContentAdministeredSystemsCleanupPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#content_administrator Group#content_administrator}
  */
  readonly contentAdministrator?: GroupContentAdministeredSystemsContentAdministrator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#group_on_system_provisioning Group#group_on_system_provisioning}
  */
  readonly groupOnSystemProvisioning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupContentAdministeredSystemsOrganizationalUnit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#owner Group#owner}
  */
  readonly owner: GroupContentAdministeredSystemsOwner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_a_d Group#provisioned_a_d}
  */
  readonly provisionedAD?: GroupContentAdministeredSystemsProvisionedAD;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_azure_oidc_directory Group#provisioned_azure_oidc_directory}
  */
  readonly provisionedAzureOidcDirectory?: GroupContentAdministeredSystemsProvisionedAzureOidcDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_azure_sync_ldap_directory Group#provisioned_azure_sync_ldap_directory}
  */
  readonly provisionedAzureSyncLdapDirectory?: GroupContentAdministeredSystemsProvisionedAzureSyncLdapDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_azure_tenant Group#provisioned_azure_tenant}
  */
  readonly provisionedAzureTenant?: GroupContentAdministeredSystemsProvisionedAzureTenant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_internal_ldap Group#provisioned_internal_ldap}
  */
  readonly provisionedInternalLdap?: GroupContentAdministeredSystemsProvisionedInternalLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_ldap Group#provisioned_ldap}
  */
  readonly provisionedLdap?: GroupContentAdministeredSystemsProvisionedLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_ldap_directory Group#provisioned_ldap_directory}
  */
  readonly provisionedLdapDirectory?: GroupContentAdministeredSystemsProvisionedLdapDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_namespace Group#provisioned_namespace}
  */
  readonly provisionedNamespace?: GroupContentAdministeredSystemsProvisionedNamespace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioned_scim Group#provisioned_scim}
  */
  readonly provisionedScim?: GroupContentAdministeredSystemsProvisionedScim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#self_service_existing_groups Group#self_service_existing_groups}
  */
  readonly selfServiceExistingGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#self_service_new_groups Group#self_service_new_groups}
  */
  readonly selfServiceNewGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#self_service_new_namespaces Group#self_service_new_namespaces}
  */
  readonly selfServiceNewNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#self_service_service_accounts Group#self_service_service_accounts}
  */
  readonly selfServiceServiceAccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#should_destroy_unknown_accounts Group#should_destroy_unknown_accounts}
  */
  readonly shouldDestroyUnknownAccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#technical_administrator Group#technical_administrator}
  */
  readonly technicalAdministrator: GroupContentAdministeredSystemsTechnicalAdministrator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#username_prefix Group#username_prefix}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
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
export interface GroupGlobalRolesEnableTechAdminApproveGroupFor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupGlobalRolesEnableTechAdminApproveGroupForToTerraform(struct?: GroupGlobalRolesEnableTechAdminApproveGroupFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupGlobalRolesEnableTechAdminApproveGroupForToHclTerraform(struct?: GroupGlobalRolesEnableTechAdminApproveGroupFor | cdktf.IResolvable): any {
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

export class GroupGlobalRolesEnableTechAdminApproveGroupForOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesEnableTechAdminApproveGroupFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupGlobalRolesEnableTechAdminApproveGroupFor | cdktf.IResolvable | undefined) {
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
  private _links = new GroupGlobalRolesEnableTechAdminApproveGroupForLinksList(this, "links", false);
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
  private _permissions = new GroupGlobalRolesEnableTechAdminApproveGroupForPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupGlobalRolesEnableTechAdminApproveGroupForList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesEnableTechAdminApproveGroupFor[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesEnableTechAdminApproveGroupForOutputReference {
    return new GroupGlobalRolesEnableTechAdminApproveGroupForOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesRecoveryFallbackGroupForLinks {
}

export function groupGlobalRolesRecoveryFallbackGroupForLinksToTerraform(struct?: GroupGlobalRolesRecoveryFallbackGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGlobalRolesRecoveryFallbackGroupForLinksToHclTerraform(struct?: GroupGlobalRolesRecoveryFallbackGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGlobalRolesRecoveryFallbackGroupForLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesRecoveryFallbackGroupForLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesRecoveryFallbackGroupForLinks | undefined) {
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

export class GroupGlobalRolesRecoveryFallbackGroupForLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupGlobalRolesRecoveryFallbackGroupForLinksOutputReference {
    return new GroupGlobalRolesRecoveryFallbackGroupForLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesRecoveryFallbackGroupForPermissions {
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

export function groupGlobalRolesRecoveryFallbackGroupForPermissionsToTerraform(struct?: GroupGlobalRolesRecoveryFallbackGroupForPermissions): any {
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


export function groupGlobalRolesRecoveryFallbackGroupForPermissionsToHclTerraform(struct?: GroupGlobalRolesRecoveryFallbackGroupForPermissions): any {
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

export class GroupGlobalRolesRecoveryFallbackGroupForPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesRecoveryFallbackGroupForPermissions | undefined {
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

  public set internalValue(value: GroupGlobalRolesRecoveryFallbackGroupForPermissions | undefined) {
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

export class GroupGlobalRolesRecoveryFallbackGroupForPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesRecoveryFallbackGroupForPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesRecoveryFallbackGroupForPermissionsOutputReference {
    return new GroupGlobalRolesRecoveryFallbackGroupForPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesRecoveryFallbackGroupFor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupGlobalRolesRecoveryFallbackGroupForToTerraform(struct?: GroupGlobalRolesRecoveryFallbackGroupFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupGlobalRolesRecoveryFallbackGroupForToHclTerraform(struct?: GroupGlobalRolesRecoveryFallbackGroupFor | cdktf.IResolvable): any {
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

export class GroupGlobalRolesRecoveryFallbackGroupForOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesRecoveryFallbackGroupFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupGlobalRolesRecoveryFallbackGroupFor | cdktf.IResolvable | undefined) {
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
  private _links = new GroupGlobalRolesRecoveryFallbackGroupForLinksList(this, "links", false);
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
  private _permissions = new GroupGlobalRolesRecoveryFallbackGroupForPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupGlobalRolesRecoveryFallbackGroupForList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesRecoveryFallbackGroupFor[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesRecoveryFallbackGroupForOutputReference {
    return new GroupGlobalRolesRecoveryFallbackGroupForOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesRemoveGroupApproveGroupForLinks {
}

export function groupGlobalRolesRemoveGroupApproveGroupForLinksToTerraform(struct?: GroupGlobalRolesRemoveGroupApproveGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGlobalRolesRemoveGroupApproveGroupForLinksToHclTerraform(struct?: GroupGlobalRolesRemoveGroupApproveGroupForLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGlobalRolesRemoveGroupApproveGroupForLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesRemoveGroupApproveGroupForLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRolesRemoveGroupApproveGroupForLinks | undefined) {
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

export class GroupGlobalRolesRemoveGroupApproveGroupForLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupGlobalRolesRemoveGroupApproveGroupForLinksOutputReference {
    return new GroupGlobalRolesRemoveGroupApproveGroupForLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesRemoveGroupApproveGroupForPermissions {
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

export function groupGlobalRolesRemoveGroupApproveGroupForPermissionsToTerraform(struct?: GroupGlobalRolesRemoveGroupApproveGroupForPermissions): any {
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


export function groupGlobalRolesRemoveGroupApproveGroupForPermissionsToHclTerraform(struct?: GroupGlobalRolesRemoveGroupApproveGroupForPermissions): any {
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

export class GroupGlobalRolesRemoveGroupApproveGroupForPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesRemoveGroupApproveGroupForPermissions | undefined {
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

  public set internalValue(value: GroupGlobalRolesRemoveGroupApproveGroupForPermissions | undefined) {
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

export class GroupGlobalRolesRemoveGroupApproveGroupForPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesRemoveGroupApproveGroupForPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesRemoveGroupApproveGroupForPermissionsOutputReference {
    return new GroupGlobalRolesRemoveGroupApproveGroupForPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRolesRemoveGroupApproveGroupFor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupGlobalRolesRemoveGroupApproveGroupForToTerraform(struct?: GroupGlobalRolesRemoveGroupApproveGroupFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupGlobalRolesRemoveGroupApproveGroupForToHclTerraform(struct?: GroupGlobalRolesRemoveGroupApproveGroupFor | cdktf.IResolvable): any {
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

export class GroupGlobalRolesRemoveGroupApproveGroupForOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGlobalRolesRemoveGroupApproveGroupFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupGlobalRolesRemoveGroupApproveGroupFor | cdktf.IResolvable | undefined) {
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
  private _links = new GroupGlobalRolesRemoveGroupApproveGroupForLinksList(this, "links", false);
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
  private _permissions = new GroupGlobalRolesRemoveGroupApproveGroupForPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupGlobalRolesRemoveGroupApproveGroupForList extends cdktf.ComplexList {
  public internalValue? : GroupGlobalRolesRemoveGroupApproveGroupFor[] | cdktf.IResolvable

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
  public get(index: number): GroupGlobalRolesRemoveGroupApproveGroupForOutputReference {
    return new GroupGlobalRolesRemoveGroupApproveGroupForOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGlobalRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#auditor_group_for Group#auditor_group_for}
  */
  readonly auditorGroupFor?: GroupGlobalRolesAuditorGroupFor[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#create_group_approve_group_for Group#create_group_approve_group_for}
  */
  readonly createGroupApproveGroupFor?: GroupGlobalRolesCreateGroupApproveGroupFor[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#enable_tech_admin_approve_group_for Group#enable_tech_admin_approve_group_for}
  */
  readonly enableTechAdminApproveGroupFor?: GroupGlobalRolesEnableTechAdminApproveGroupFor[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#recovery_fallback_group_for Group#recovery_fallback_group_for}
  */
  readonly recoveryFallbackGroupFor?: GroupGlobalRolesRecoveryFallbackGroupFor[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#remove_group_approve_group_for Group#remove_group_approve_group_for}
  */
  readonly removeGroupApproveGroupFor?: GroupGlobalRolesRemoveGroupApproveGroupFor[] | cdktf.IResolvable;
}

export function groupGlobalRolesToTerraform(struct?: GroupGlobalRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auditor_group_for: cdktf.listMapper(groupGlobalRolesAuditorGroupForToTerraform, false)(struct!.auditorGroupFor),
    create_group_approve_group_for: cdktf.listMapper(groupGlobalRolesCreateGroupApproveGroupForToTerraform, false)(struct!.createGroupApproveGroupFor),
    enable_tech_admin_approve_group_for: cdktf.listMapper(groupGlobalRolesEnableTechAdminApproveGroupForToTerraform, false)(struct!.enableTechAdminApproveGroupFor),
    recovery_fallback_group_for: cdktf.listMapper(groupGlobalRolesRecoveryFallbackGroupForToTerraform, false)(struct!.recoveryFallbackGroupFor),
    remove_group_approve_group_for: cdktf.listMapper(groupGlobalRolesRemoveGroupApproveGroupForToTerraform, false)(struct!.removeGroupApproveGroupFor),
  }
}


export function groupGlobalRolesToHclTerraform(struct?: GroupGlobalRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auditor_group_for: {
      value: cdktf.listMapperHcl(groupGlobalRolesAuditorGroupForToHclTerraform, false)(struct!.auditorGroupFor),
      isBlock: true,
      type: "list",
      storageClassType: "GroupGlobalRolesAuditorGroupForList",
    },
    create_group_approve_group_for: {
      value: cdktf.listMapperHcl(groupGlobalRolesCreateGroupApproveGroupForToHclTerraform, false)(struct!.createGroupApproveGroupFor),
      isBlock: true,
      type: "list",
      storageClassType: "GroupGlobalRolesCreateGroupApproveGroupForList",
    },
    enable_tech_admin_approve_group_for: {
      value: cdktf.listMapperHcl(groupGlobalRolesEnableTechAdminApproveGroupForToHclTerraform, false)(struct!.enableTechAdminApproveGroupFor),
      isBlock: true,
      type: "list",
      storageClassType: "GroupGlobalRolesEnableTechAdminApproveGroupForList",
    },
    recovery_fallback_group_for: {
      value: cdktf.listMapperHcl(groupGlobalRolesRecoveryFallbackGroupForToHclTerraform, false)(struct!.recoveryFallbackGroupFor),
      isBlock: true,
      type: "list",
      storageClassType: "GroupGlobalRolesRecoveryFallbackGroupForList",
    },
    remove_group_approve_group_for: {
      value: cdktf.listMapperHcl(groupGlobalRolesRemoveGroupApproveGroupForToHclTerraform, false)(struct!.removeGroupApproveGroupFor),
      isBlock: true,
      type: "list",
      storageClassType: "GroupGlobalRolesRemoveGroupApproveGroupForList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupGlobalRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupGlobalRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditorGroupFor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditorGroupFor = this._auditorGroupFor?.internalValue;
    }
    if (this._createGroupApproveGroupFor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createGroupApproveGroupFor = this._createGroupApproveGroupFor?.internalValue;
    }
    if (this._enableTechAdminApproveGroupFor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTechAdminApproveGroupFor = this._enableTechAdminApproveGroupFor?.internalValue;
    }
    if (this._recoveryFallbackGroupFor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryFallbackGroupFor = this._recoveryFallbackGroupFor?.internalValue;
    }
    if (this._removeGroupApproveGroupFor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeGroupApproveGroupFor = this._removeGroupApproveGroupFor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGlobalRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditorGroupFor.internalValue = undefined;
      this._createGroupApproveGroupFor.internalValue = undefined;
      this._enableTechAdminApproveGroupFor.internalValue = undefined;
      this._recoveryFallbackGroupFor.internalValue = undefined;
      this._removeGroupApproveGroupFor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditorGroupFor.internalValue = value.auditorGroupFor;
      this._createGroupApproveGroupFor.internalValue = value.createGroupApproveGroupFor;
      this._enableTechAdminApproveGroupFor.internalValue = value.enableTechAdminApproveGroupFor;
      this._recoveryFallbackGroupFor.internalValue = value.recoveryFallbackGroupFor;
      this._removeGroupApproveGroupFor.internalValue = value.removeGroupApproveGroupFor;
    }
  }

  // auditor_group_for - computed: true, optional: true, required: false
  private _auditorGroupFor = new GroupGlobalRolesAuditorGroupForList(this, "auditor_group_for", false);
  public get auditorGroupFor() {
    return this._auditorGroupFor;
  }
  public putAuditorGroupFor(value: GroupGlobalRolesAuditorGroupFor[] | cdktf.IResolvable) {
    this._auditorGroupFor.internalValue = value;
  }
  public resetAuditorGroupFor() {
    this._auditorGroupFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorGroupForInput() {
    return this._auditorGroupFor.internalValue;
  }

  // create_group_approve_group_for - computed: true, optional: true, required: false
  private _createGroupApproveGroupFor = new GroupGlobalRolesCreateGroupApproveGroupForList(this, "create_group_approve_group_for", false);
  public get createGroupApproveGroupFor() {
    return this._createGroupApproveGroupFor;
  }
  public putCreateGroupApproveGroupFor(value: GroupGlobalRolesCreateGroupApproveGroupFor[] | cdktf.IResolvable) {
    this._createGroupApproveGroupFor.internalValue = value;
  }
  public resetCreateGroupApproveGroupFor() {
    this._createGroupApproveGroupFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGroupApproveGroupForInput() {
    return this._createGroupApproveGroupFor.internalValue;
  }

  // enable_tech_admin_approve_group_for - computed: true, optional: true, required: false
  private _enableTechAdminApproveGroupFor = new GroupGlobalRolesEnableTechAdminApproveGroupForList(this, "enable_tech_admin_approve_group_for", false);
  public get enableTechAdminApproveGroupFor() {
    return this._enableTechAdminApproveGroupFor;
  }
  public putEnableTechAdminApproveGroupFor(value: GroupGlobalRolesEnableTechAdminApproveGroupFor[] | cdktf.IResolvable) {
    this._enableTechAdminApproveGroupFor.internalValue = value;
  }
  public resetEnableTechAdminApproveGroupFor() {
    this._enableTechAdminApproveGroupFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTechAdminApproveGroupForInput() {
    return this._enableTechAdminApproveGroupFor.internalValue;
  }

  // recovery_fallback_group_for - computed: true, optional: true, required: false
  private _recoveryFallbackGroupFor = new GroupGlobalRolesRecoveryFallbackGroupForList(this, "recovery_fallback_group_for", false);
  public get recoveryFallbackGroupFor() {
    return this._recoveryFallbackGroupFor;
  }
  public putRecoveryFallbackGroupFor(value: GroupGlobalRolesRecoveryFallbackGroupFor[] | cdktf.IResolvable) {
    this._recoveryFallbackGroupFor.internalValue = value;
  }
  public resetRecoveryFallbackGroupFor() {
    this._recoveryFallbackGroupFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryFallbackGroupForInput() {
    return this._recoveryFallbackGroupFor.internalValue;
  }

  // remove_group_approve_group_for - computed: true, optional: true, required: false
  private _removeGroupApproveGroupFor = new GroupGlobalRolesRemoveGroupApproveGroupForList(this, "remove_group_approve_group_for", false);
  public get removeGroupApproveGroupFor() {
    return this._removeGroupApproveGroupFor;
  }
  public putRemoveGroupApproveGroupFor(value: GroupGlobalRolesRemoveGroupApproveGroupFor[] | cdktf.IResolvable) {
    this._removeGroupApproveGroupFor.internalValue = value;
  }
  public resetRemoveGroupApproveGroupFor() {
    this._removeGroupApproveGroupFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeGroupApproveGroupForInput() {
    return this._removeGroupApproveGroupFor.internalValue;
  }
}
export interface GroupGroupAccessInfo {
}

export function groupGroupAccessInfoToTerraform(struct?: GroupGroupAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGroupAccessInfoToHclTerraform(struct?: GroupGroupAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGroupAccessInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupGroupAccessInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGroupAccessInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_accounts - computed: true, optional: false, required: false
  public get businessAccounts() {
    return this.getBooleanAttribute('business_accounts');
  }
}
export interface GroupGroupauditinginfo {
}

export function groupGroupauditinginfoToTerraform(struct?: GroupGroupauditinginfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGroupauditinginfoToHclTerraform(struct?: GroupGroupauditinginfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGroupauditinginfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupGroupauditinginfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGroupauditinginfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_due_date - computed: true, optional: false, required: false
  public get auditDueDate() {
    return this.getStringAttribute('audit_due_date');
  }

  // last_audit_date - computed: true, optional: false, required: false
  public get lastAuditDate() {
    return this.getStringAttribute('last_audit_date');
  }

  // nr_accounts - computed: true, optional: false, required: false
  public get nrAccounts() {
    return this.getNumberAttribute('nr_accounts');
  }

  // nr_disabled_accounts - computed: true, optional: false, required: false
  public get nrDisabledAccounts() {
    return this.getNumberAttribute('nr_disabled_accounts');
  }

  // nr_disabled_managers - computed: true, optional: false, required: false
  public get nrDisabledManagers() {
    return this.getNumberAttribute('nr_disabled_managers');
  }

  // nr_expired_vault_records - computed: true, optional: false, required: false
  public get nrExpiredVaultRecords() {
    return this.getNumberAttribute('nr_expired_vault_records');
  }

  // nr_managers - computed: true, optional: false, required: false
  public get nrManagers() {
    return this.getNumberAttribute('nr_managers');
  }

  // nr_vault_records_with_end_date - computed: true, optional: false, required: false
  public get nrVaultRecordsWithEndDate() {
    return this.getNumberAttribute('nr_vault_records_with_end_date');
  }
}
export interface GroupGroupinfo {
}

export function groupGroupinfoToTerraform(struct?: GroupGroupinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupGroupinfoToHclTerraform(struct?: GroupGroupinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupGroupinfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupGroupinfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGroupinfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nr_accounts - computed: true, optional: false, required: false
  public get nrAccounts() {
    return this.getNumberAttribute('nr_accounts');
  }

  // nr_accounts_with_vault - computed: true, optional: false, required: false
  public get nrAccountsWithVault() {
    return this.getNumberAttribute('nr_accounts_with_vault');
  }

  // nr_audits - computed: true, optional: false, required: false
  public get nrAudits() {
    return this.getNumberAttribute('nr_audits');
  }

  // nr_clients - computed: true, optional: false, required: false
  public get nrClients() {
    return this.getNumberAttribute('nr_clients');
  }

  // nr_provisioned_systems - computed: true, optional: false, required: false
  public get nrProvisionedSystems() {
    return this.getNumberAttribute('nr_provisioned_systems');
  }

  // nr_vault_records - computed: true, optional: false, required: false
  public get nrVaultRecords() {
    return this.getNumberAttribute('nr_vault_records');
  }
}
export interface GroupHelpdeskLinks {
}

export function groupHelpdeskLinksToTerraform(struct?: GroupHelpdeskLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupHelpdeskLinksToHclTerraform(struct?: GroupHelpdeskLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupHelpdeskLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupHelpdeskLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupHelpdeskLinks | undefined) {
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

export class GroupHelpdeskLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupHelpdeskLinksOutputReference {
    return new GroupHelpdeskLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupHelpdeskPermissions {
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

export function groupHelpdeskPermissionsToTerraform(struct?: GroupHelpdeskPermissions): any {
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


export function groupHelpdeskPermissionsToHclTerraform(struct?: GroupHelpdeskPermissions): any {
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

export class GroupHelpdeskPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupHelpdeskPermissions | undefined {
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

  public set internalValue(value: GroupHelpdeskPermissions | undefined) {
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

export class GroupHelpdeskPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupHelpdeskPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupHelpdeskPermissionsOutputReference {
    return new GroupHelpdeskPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupHelpdeskStatus {
}

export function groupHelpdeskStatusToTerraform(struct?: GroupHelpdeskStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupHelpdeskStatusToHclTerraform(struct?: GroupHelpdeskStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupHelpdeskStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupHelpdeskStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupHelpdeskStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // accounts - computed: true, optional: false, required: false
  public get accounts() {
    return this.getNumberAttribute('accounts');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface GroupHelpdesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#domain_restriction Group#domain_restriction}
  */
  readonly domainRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#fully_resolved_issuer Group#fully_resolved_issuer}
  */
  readonly fullyResolvedIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#status Group#status}
  */
  readonly status?: GroupHelpdeskStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type Group#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#username_customizable Group#username_customizable}
  */
  readonly usernameCustomizable?: boolean | cdktf.IResolvable;
}

export function groupHelpdeskToTerraform(struct?: GroupHelpdesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_restriction: cdktf.stringToTerraform(struct!.domainRestriction),
    fully_resolved_issuer: cdktf.stringToTerraform(struct!.fullyResolvedIssuer),
    name: cdktf.stringToTerraform(struct!.name),
    status: groupHelpdeskStatusToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    username_customizable: cdktf.booleanToTerraform(struct!.usernameCustomizable),
  }
}


export function groupHelpdeskToHclTerraform(struct?: GroupHelpdesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_restriction: {
      value: cdktf.stringToHclTerraform(struct!.domainRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fully_resolved_issuer: {
      value: cdktf.stringToHclTerraform(struct!.fullyResolvedIssuer),
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
    status: {
      value: groupHelpdeskStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupHelpdeskStatus",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_customizable: {
      value: cdktf.booleanToHclTerraform(struct!.usernameCustomizable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupHelpdeskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupHelpdesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainRestriction = this._domainRestriction;
    }
    if (this._fullyResolvedIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullyResolvedIssuer = this._fullyResolvedIssuer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernameCustomizable !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameCustomizable = this._usernameCustomizable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupHelpdesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainRestriction = undefined;
      this._fullyResolvedIssuer = undefined;
      this._name = undefined;
      this._status.internalValue = undefined;
      this._type = undefined;
      this._usernameCustomizable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainRestriction = value.domainRestriction;
      this._fullyResolvedIssuer = value.fullyResolvedIssuer;
      this._name = value.name;
      this._status.internalValue = value.status;
      this._type = value.type;
      this._usernameCustomizable = value.usernameCustomizable;
    }
  }

  // domain_restriction - computed: true, optional: true, required: false
  private _domainRestriction?: string; 
  public get domainRestriction() {
    return this.getStringAttribute('domain_restriction');
  }
  public set domainRestriction(value: string) {
    this._domainRestriction = value;
  }
  public resetDomainRestriction() {
    this._domainRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRestrictionInput() {
    return this._domainRestriction;
  }

  // fully_resolved_issuer - computed: true, optional: true, required: false
  private _fullyResolvedIssuer?: string; 
  public get fullyResolvedIssuer() {
    return this.getStringAttribute('fully_resolved_issuer');
  }
  public set fullyResolvedIssuer(value: string) {
    this._fullyResolvedIssuer = value;
  }
  public resetFullyResolvedIssuer() {
    this._fullyResolvedIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyResolvedIssuerInput() {
    return this._fullyResolvedIssuer;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupHelpdeskLinksList(this, "links", false);
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
  private _permissions = new GroupHelpdeskPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // status - computed: true, optional: true, required: false
  private _status = new GroupHelpdeskStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: GroupHelpdeskStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
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

  // username_customizable - computed: true, optional: true, required: false
  private _usernameCustomizable?: boolean | cdktf.IResolvable; 
  public get usernameCustomizable() {
    return this.getBooleanAttribute('username_customizable');
  }
  public set usernameCustomizable(value: boolean | cdktf.IResolvable) {
    this._usernameCustomizable = value;
  }
  public resetUsernameCustomizable() {
    this._usernameCustomizable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCustomizableInput() {
    return this._usernameCustomizable;
  }
}

export class GroupHelpdeskList extends cdktf.ComplexList {
  public internalValue? : GroupHelpdesk[] | cdktf.IResolvable

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
  public get(index: number): GroupHelpdeskOutputReference {
    return new GroupHelpdeskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupLinks {
}

export function groupLinksToTerraform(struct?: GroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupLinksToHclTerraform(struct?: GroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupLinks | undefined) {
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

export class GroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupLinksOutputReference {
    return new GroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupMarkersMarkers {
}

export function groupMarkersMarkersToTerraform(struct?: GroupMarkersMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupMarkersMarkersToHclTerraform(struct?: GroupMarkersMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupMarkersMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupMarkersMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMarkersMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GroupMarkersMarkersList extends cdktf.ComplexList {
  public internalValue? : GroupMarkersMarkers[] | cdktf.IResolvable

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
  public get(index: number): GroupMarkersMarkersOutputReference {
    return new GroupMarkersMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#markers Group#markers}
  */
  readonly markers?: GroupMarkersMarkers[] | cdktf.IResolvable;
}

export function groupMarkersToTerraform(struct?: GroupMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    markers: cdktf.listMapper(groupMarkersMarkersToTerraform, false)(struct!.markers),
  }
}


export function groupMarkersToHclTerraform(struct?: GroupMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    markers: {
      value: cdktf.listMapperHcl(groupMarkersMarkersToHclTerraform, false)(struct!.markers),
      isBlock: true,
      type: "list",
      storageClassType: "GroupMarkersMarkersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupMarkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupMarkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._markers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.markers = this._markers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMarkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._markers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._markers.internalValue = value.markers;
    }
  }

  // markers - computed: true, optional: true, required: false
  private _markers = new GroupMarkersMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: GroupMarkersMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }
}
export interface GroupMyaccountDirectoryLinks {
}

export function groupMyaccountDirectoryLinksToTerraform(struct?: GroupMyaccountDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupMyaccountDirectoryLinksToHclTerraform(struct?: GroupMyaccountDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupMyaccountDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupMyaccountDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMyaccountDirectoryLinks | undefined) {
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

export class GroupMyaccountDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupMyaccountDirectoryLinksOutputReference {
    return new GroupMyaccountDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupMyaccountDirectoryPermissions {
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

export function groupMyaccountDirectoryPermissionsToTerraform(struct?: GroupMyaccountDirectoryPermissions): any {
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


export function groupMyaccountDirectoryPermissionsToHclTerraform(struct?: GroupMyaccountDirectoryPermissions): any {
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

export class GroupMyaccountDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupMyaccountDirectoryPermissions | undefined {
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

  public set internalValue(value: GroupMyaccountDirectoryPermissions | undefined) {
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

export class GroupMyaccountDirectoryPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupMyaccountDirectoryPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupMyaccountDirectoryPermissionsOutputReference {
    return new GroupMyaccountDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupMyaccountDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupMyaccountDirectoryToTerraform(struct?: GroupMyaccountDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupMyaccountDirectoryToHclTerraform(struct?: GroupMyaccountDirectory): any {
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

export class GroupMyaccountDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupMyaccountDirectory | undefined {
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

  public set internalValue(value: GroupMyaccountDirectory | undefined) {
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
  private _links = new GroupMyaccountDirectoryLinksList(this, "links", false);
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
  private _permissions = new GroupMyaccountDirectoryPermissionsList(this, "permissions", false);
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
export interface GroupMyaccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#end_date Group#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#rights Group#rights}
  */
  readonly rights: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#uuid Group#uuid}
  */
  readonly uuid: string;
}

export function groupMyaccountToTerraform(struct?: GroupMyaccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    rights: cdktf.stringToTerraform(struct!.rights),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function groupMyaccountToHclTerraform(struct?: GroupMyaccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rights: {
      value: cdktf.stringToHclTerraform(struct!.rights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupMyaccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupMyaccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._rights !== undefined) {
      hasAnyValues = true;
      internalValueResult.rights = this._rights;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMyaccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._rights = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._rights = value.rights;
      this._uuid = value.uuid;
    }
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new GroupMyaccountDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }

  // disconnected_nested - computed: true, optional: false, required: false
  public get disconnectedNested() {
    return this.getBooleanAttribute('disconnected_nested');
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // last_used - computed: true, optional: false, required: false
  public get lastUsed() {
    return this.getStringAttribute('last_used');
  }

  // nested - computed: true, optional: false, required: false
  public get nested() {
    return this.getBooleanAttribute('nested');
  }

  // provisioning_end_time - computed: true, optional: false, required: false
  public get provisioningEndTime() {
    return this.getStringAttribute('provisioning_end_time');
  }

  // provisioning_permission_end_time - computed: true, optional: false, required: false
  public get provisioningPermissionEndTime() {
    return this.getStringAttribute('provisioning_permission_end_time');
  }

  // rights - computed: true, optional: false, required: true
  private _rights?: string; 
  public get rights() {
    return this.getStringAttribute('rights');
  }
  public set rights(value: string) {
    this._rights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightsInput() {
    return this._rights;
  }

  // two_factor_status - computed: true, optional: false, required: false
  public get twoFactorStatus() {
    return this.getStringAttribute('two_factor_status');
  }

  // uuid - computed: true, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // visible_for_provisioning - computed: true, optional: false, required: false
  public get visibleForProvisioning() {
    return this.getBooleanAttribute('visible_for_provisioning');
  }
}
export interface GroupMydelegatedaccountDirectoryLinks {
}

export function groupMydelegatedaccountDirectoryLinksToTerraform(struct?: GroupMydelegatedaccountDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupMydelegatedaccountDirectoryLinksToHclTerraform(struct?: GroupMydelegatedaccountDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupMydelegatedaccountDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupMydelegatedaccountDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMydelegatedaccountDirectoryLinks | undefined) {
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

export class GroupMydelegatedaccountDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupMydelegatedaccountDirectoryLinksOutputReference {
    return new GroupMydelegatedaccountDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupMydelegatedaccountDirectoryPermissions {
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

export function groupMydelegatedaccountDirectoryPermissionsToTerraform(struct?: GroupMydelegatedaccountDirectoryPermissions): any {
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


export function groupMydelegatedaccountDirectoryPermissionsToHclTerraform(struct?: GroupMydelegatedaccountDirectoryPermissions): any {
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

export class GroupMydelegatedaccountDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupMydelegatedaccountDirectoryPermissions | undefined {
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

  public set internalValue(value: GroupMydelegatedaccountDirectoryPermissions | undefined) {
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

export class GroupMydelegatedaccountDirectoryPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupMydelegatedaccountDirectoryPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupMydelegatedaccountDirectoryPermissionsOutputReference {
    return new GroupMydelegatedaccountDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupMydelegatedaccountDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupMydelegatedaccountDirectoryToTerraform(struct?: GroupMydelegatedaccountDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupMydelegatedaccountDirectoryToHclTerraform(struct?: GroupMydelegatedaccountDirectory): any {
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

export class GroupMydelegatedaccountDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupMydelegatedaccountDirectory | undefined {
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

  public set internalValue(value: GroupMydelegatedaccountDirectory | undefined) {
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
  private _links = new GroupMydelegatedaccountDirectoryLinksList(this, "links", false);
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
  private _permissions = new GroupMydelegatedaccountDirectoryPermissionsList(this, "permissions", false);
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
export interface GroupMydelegatedaccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#end_date Group#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#rights Group#rights}
  */
  readonly rights: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#uuid Group#uuid}
  */
  readonly uuid: string;
}

export function groupMydelegatedaccountToTerraform(struct?: GroupMydelegatedaccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    rights: cdktf.stringToTerraform(struct!.rights),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function groupMydelegatedaccountToHclTerraform(struct?: GroupMydelegatedaccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rights: {
      value: cdktf.stringToHclTerraform(struct!.rights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupMydelegatedaccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupMydelegatedaccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._rights !== undefined) {
      hasAnyValues = true;
      internalValueResult.rights = this._rights;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMydelegatedaccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._rights = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._rights = value.rights;
      this._uuid = value.uuid;
    }
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new GroupMydelegatedaccountDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }

  // disconnected_nested - computed: true, optional: false, required: false
  public get disconnectedNested() {
    return this.getBooleanAttribute('disconnected_nested');
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // last_used - computed: true, optional: false, required: false
  public get lastUsed() {
    return this.getStringAttribute('last_used');
  }

  // nested - computed: true, optional: false, required: false
  public get nested() {
    return this.getBooleanAttribute('nested');
  }

  // provisioning_end_time - computed: true, optional: false, required: false
  public get provisioningEndTime() {
    return this.getStringAttribute('provisioning_end_time');
  }

  // provisioning_permission_end_time - computed: true, optional: false, required: false
  public get provisioningPermissionEndTime() {
    return this.getStringAttribute('provisioning_permission_end_time');
  }

  // rights - computed: true, optional: false, required: true
  private _rights?: string; 
  public get rights() {
    return this.getStringAttribute('rights');
  }
  public set rights(value: string) {
    this._rights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightsInput() {
    return this._rights;
  }

  // two_factor_status - computed: true, optional: false, required: false
  public get twoFactorStatus() {
    return this.getStringAttribute('two_factor_status');
  }

  // uuid - computed: true, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // visible_for_provisioning - computed: true, optional: false, required: false
  public get visibleForProvisioning() {
    return this.getBooleanAttribute('visible_for_provisioning');
  }
}
export interface GroupNestedGroupsLinks {
}

export function groupNestedGroupsLinksToTerraform(struct?: GroupNestedGroupsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupNestedGroupsLinksToHclTerraform(struct?: GroupNestedGroupsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupNestedGroupsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupNestedGroupsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupNestedGroupsLinks | undefined) {
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

export class GroupNestedGroupsLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupNestedGroupsLinksOutputReference {
    return new GroupNestedGroupsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupNestedGroupsOrganizationalUnitLinks {
}

export function groupNestedGroupsOrganizationalUnitLinksToTerraform(struct?: GroupNestedGroupsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupNestedGroupsOrganizationalUnitLinksToHclTerraform(struct?: GroupNestedGroupsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupNestedGroupsOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupNestedGroupsOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupNestedGroupsOrganizationalUnitLinks | undefined) {
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

export class GroupNestedGroupsOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupNestedGroupsOrganizationalUnitLinksOutputReference {
    return new GroupNestedGroupsOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupNestedGroupsOrganizationalUnitPermissions {
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

export function groupNestedGroupsOrganizationalUnitPermissionsToTerraform(struct?: GroupNestedGroupsOrganizationalUnitPermissions): any {
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


export function groupNestedGroupsOrganizationalUnitPermissionsToHclTerraform(struct?: GroupNestedGroupsOrganizationalUnitPermissions): any {
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

export class GroupNestedGroupsOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupNestedGroupsOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: GroupNestedGroupsOrganizationalUnitPermissions | undefined) {
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

export class GroupNestedGroupsOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupNestedGroupsOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupNestedGroupsOrganizationalUnitPermissionsOutputReference {
    return new GroupNestedGroupsOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupNestedGroupsOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupNestedGroupsOrganizationalUnitToTerraform(struct?: GroupNestedGroupsOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupNestedGroupsOrganizationalUnitToHclTerraform(struct?: GroupNestedGroupsOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupNestedGroupsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupNestedGroupsOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupNestedGroupsOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new GroupNestedGroupsOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new GroupNestedGroupsOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupNestedGroupsPermissions {
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

export function groupNestedGroupsPermissionsToTerraform(struct?: GroupNestedGroupsPermissions): any {
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


export function groupNestedGroupsPermissionsToHclTerraform(struct?: GroupNestedGroupsPermissions): any {
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

export class GroupNestedGroupsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupNestedGroupsPermissions | undefined {
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

  public set internalValue(value: GroupNestedGroupsPermissions | undefined) {
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

export class GroupNestedGroupsPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupNestedGroupsPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupNestedGroupsPermissionsOutputReference {
    return new GroupNestedGroupsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupNestedGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupNestedGroupsOrganizationalUnit;
}

export function groupNestedGroupsToTerraform(struct?: GroupNestedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupNestedGroupsOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupNestedGroupsToHclTerraform(struct?: GroupNestedGroups): any {
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
      value: groupNestedGroupsOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupNestedGroupsOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupNestedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupNestedGroups | undefined {
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

  public set internalValue(value: GroupNestedGroups | undefined) {
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
  private _links = new GroupNestedGroupsLinksList(this, "links", false);
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
  private _organizationalUnit = new GroupNestedGroupsOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupNestedGroupsOrganizationalUnit) {
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
  private _permissions = new GroupNestedGroupsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupNestedGroupsList extends cdktf.ComplexList {
  public internalValue? : GroupNestedGroups[] | cdktf.IResolvable

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
  public get(index: number): GroupNestedGroupsOutputReference {
    return new GroupNestedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesDirectoryLinks {
}

export function groupOwnedAccessProfilesDirectoryLinksToTerraform(struct?: GroupOwnedAccessProfilesDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedAccessProfilesDirectoryLinksToHclTerraform(struct?: GroupOwnedAccessProfilesDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedAccessProfilesDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedAccessProfilesDirectoryLinks | undefined) {
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

export class GroupOwnedAccessProfilesDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedAccessProfilesDirectoryLinksOutputReference {
    return new GroupOwnedAccessProfilesDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesDirectoryPermissions {
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

export function groupOwnedAccessProfilesDirectoryPermissionsToTerraform(struct?: GroupOwnedAccessProfilesDirectoryPermissions): any {
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


export function groupOwnedAccessProfilesDirectoryPermissionsToHclTerraform(struct?: GroupOwnedAccessProfilesDirectoryPermissions): any {
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

export class GroupOwnedAccessProfilesDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesDirectoryPermissions | undefined {
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

  public set internalValue(value: GroupOwnedAccessProfilesDirectoryPermissions | undefined) {
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

export class GroupOwnedAccessProfilesDirectoryPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedAccessProfilesDirectoryPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedAccessProfilesDirectoryPermissionsOutputReference {
    return new GroupOwnedAccessProfilesDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedAccessProfilesDirectoryToTerraform(struct?: GroupOwnedAccessProfilesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedAccessProfilesDirectoryToHclTerraform(struct?: GroupOwnedAccessProfilesDirectory | cdktf.IResolvable): any {
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

export class GroupOwnedAccessProfilesDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedAccessProfilesDirectory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupOwnedAccessProfilesDirectory | cdktf.IResolvable | undefined) {
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
  private _links = new GroupOwnedAccessProfilesDirectoryLinksList(this, "links", false);
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
  private _permissions = new GroupOwnedAccessProfilesDirectoryPermissionsList(this, "permissions", false);
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
export interface GroupOwnedAccessProfilesLinks {
}

export function groupOwnedAccessProfilesLinksToTerraform(struct?: GroupOwnedAccessProfilesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedAccessProfilesLinksToHclTerraform(struct?: GroupOwnedAccessProfilesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedAccessProfilesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedAccessProfilesLinks | undefined) {
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

export class GroupOwnedAccessProfilesLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedAccessProfilesLinksOutputReference {
    return new GroupOwnedAccessProfilesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesOwnerLinks {
}

export function groupOwnedAccessProfilesOwnerLinksToTerraform(struct?: GroupOwnedAccessProfilesOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedAccessProfilesOwnerLinksToHclTerraform(struct?: GroupOwnedAccessProfilesOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedAccessProfilesOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedAccessProfilesOwnerLinks | undefined) {
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

export class GroupOwnedAccessProfilesOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedAccessProfilesOwnerLinksOutputReference {
    return new GroupOwnedAccessProfilesOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesOwnerOrganizationalUnitLinks {
}

export function groupOwnedAccessProfilesOwnerOrganizationalUnitLinksToTerraform(struct?: GroupOwnedAccessProfilesOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedAccessProfilesOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedAccessProfilesOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedAccessProfilesOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedAccessProfilesOwnerOrganizationalUnitLinks | undefined) {
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

export class GroupOwnedAccessProfilesOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedAccessProfilesOwnerOrganizationalUnitLinksOutputReference {
    return new GroupOwnedAccessProfilesOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissions {
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

export function groupOwnedAccessProfilesOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissions): any {
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


export function groupOwnedAccessProfilesOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissions): any {
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

export class GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissions | undefined) {
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

export class GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedAccessProfilesOwnerOrganizationalUnitToTerraform(struct?: GroupOwnedAccessProfilesOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedAccessProfilesOwnerOrganizationalUnitToHclTerraform(struct?: GroupOwnedAccessProfilesOwnerOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupOwnedAccessProfilesOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedAccessProfilesOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupOwnedAccessProfilesOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new GroupOwnedAccessProfilesOwnerOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new GroupOwnedAccessProfilesOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedAccessProfilesOwnerPermissions {
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

export function groupOwnedAccessProfilesOwnerPermissionsToTerraform(struct?: GroupOwnedAccessProfilesOwnerPermissions): any {
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


export function groupOwnedAccessProfilesOwnerPermissionsToHclTerraform(struct?: GroupOwnedAccessProfilesOwnerPermissions): any {
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

export class GroupOwnedAccessProfilesOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesOwnerPermissions | undefined {
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

  public set internalValue(value: GroupOwnedAccessProfilesOwnerPermissions | undefined) {
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

export class GroupOwnedAccessProfilesOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedAccessProfilesOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedAccessProfilesOwnerPermissionsOutputReference {
    return new GroupOwnedAccessProfilesOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfilesOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedAccessProfilesOwnerOrganizationalUnit;
}

export function groupOwnedAccessProfilesOwnerToTerraform(struct?: GroupOwnedAccessProfilesOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedAccessProfilesOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedAccessProfilesOwnerToHclTerraform(struct?: GroupOwnedAccessProfilesOwner): any {
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
      value: groupOwnedAccessProfilesOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedAccessProfilesOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedAccessProfilesOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedAccessProfilesOwner | undefined {
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

  public set internalValue(value: GroupOwnedAccessProfilesOwner | undefined) {
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
  private _links = new GroupOwnedAccessProfilesOwnerLinksList(this, "links", false);
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
  private _organizationalUnit = new GroupOwnedAccessProfilesOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedAccessProfilesOwnerOrganizationalUnit) {
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
  private _permissions = new GroupOwnedAccessProfilesOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedAccessProfilesPermissions {
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

export function groupOwnedAccessProfilesPermissionsToTerraform(struct?: GroupOwnedAccessProfilesPermissions): any {
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


export function groupOwnedAccessProfilesPermissionsToHclTerraform(struct?: GroupOwnedAccessProfilesPermissions): any {
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

export class GroupOwnedAccessProfilesPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfilesPermissions | undefined {
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

  public set internalValue(value: GroupOwnedAccessProfilesPermissions | undefined) {
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

export class GroupOwnedAccessProfilesPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedAccessProfilesPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedAccessProfilesPermissionsOutputReference {
    return new GroupOwnedAccessProfilesPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedAccessProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#activate_rule_script Group#activate_rule_script}
  */
  readonly activateRuleScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#directory Group#directory}
  */
  readonly directory?: GroupOwnedAccessProfilesDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#match_rule_script Group#match_rule_script}
  */
  readonly matchRuleScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#owner Group#owner}
  */
  readonly owner: GroupOwnedAccessProfilesOwner;
}

export function groupOwnedAccessProfilesToTerraform(struct?: GroupOwnedAccessProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rule_script: cdktf.stringToTerraform(struct!.activateRuleScript),
    description: cdktf.stringToTerraform(struct!.description),
    directory: groupOwnedAccessProfilesDirectoryToTerraform(struct!.directory),
    match_rule_script: cdktf.stringToTerraform(struct!.matchRuleScript),
    name: cdktf.stringToTerraform(struct!.name),
    owner: groupOwnedAccessProfilesOwnerToTerraform(struct!.owner),
  }
}


export function groupOwnedAccessProfilesToHclTerraform(struct?: GroupOwnedAccessProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rule_script: {
      value: cdktf.stringToHclTerraform(struct!.activateRuleScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: groupOwnedAccessProfilesDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedAccessProfilesDirectory",
    },
    match_rule_script: {
      value: cdktf.stringToHclTerraform(struct!.matchRuleScript),
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
    owner: {
      value: groupOwnedAccessProfilesOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedAccessProfilesOwner",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedAccessProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedAccessProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRuleScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRuleScript = this._activateRuleScript;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._matchRuleScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRuleScript = this._matchRuleScript;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedAccessProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activateRuleScript = undefined;
      this._description = undefined;
      this._directory.internalValue = undefined;
      this._matchRuleScript = undefined;
      this._name = undefined;
      this._owner.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activateRuleScript = value.activateRuleScript;
      this._description = value.description;
      this._directory.internalValue = value.directory;
      this._matchRuleScript = value.matchRuleScript;
      this._name = value.name;
      this._owner.internalValue = value.owner;
    }
  }

  // activate_rule_script - computed: true, optional: true, required: false
  private _activateRuleScript?: string; 
  public get activateRuleScript() {
    return this.getStringAttribute('activate_rule_script');
  }
  public set activateRuleScript(value: string) {
    this._activateRuleScript = value;
  }
  public resetActivateRuleScript() {
    this._activateRuleScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRuleScriptInput() {
    return this._activateRuleScript;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directory - computed: true, optional: true, required: false
  private _directory = new GroupOwnedAccessProfilesDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: GroupOwnedAccessProfilesDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedAccessProfilesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // match_rule_script - computed: true, optional: true, required: false
  private _matchRuleScript?: string; 
  public get matchRuleScript() {
    return this.getStringAttribute('match_rule_script');
  }
  public set matchRuleScript(value: string) {
    this._matchRuleScript = value;
  }
  public resetMatchRuleScript() {
    this._matchRuleScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleScriptInput() {
    return this._matchRuleScript;
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

  // owner - computed: true, optional: false, required: true
  private _owner = new GroupOwnedAccessProfilesOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: GroupOwnedAccessProfilesOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedAccessProfilesPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupOwnedAccessProfilesList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedAccessProfiles[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedAccessProfilesOutputReference {
    return new GroupOwnedAccessProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsLdapClientClientCertificateLinks {
}

export function groupOwnedClientsLdapClientClientCertificateLinksToTerraform(struct?: GroupOwnedClientsLdapClientClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsLdapClientClientCertificateLinksToHclTerraform(struct?: GroupOwnedClientsLdapClientClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsLdapClientClientCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsLdapClientClientCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsLdapClientClientCertificateLinks | undefined) {
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

export class GroupOwnedClientsLdapClientClientCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsLdapClientClientCertificateLinksOutputReference {
    return new GroupOwnedClientsLdapClientClientCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsLdapClientClientCertificatePermissions {
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

export function groupOwnedClientsLdapClientClientCertificatePermissionsToTerraform(struct?: GroupOwnedClientsLdapClientClientCertificatePermissions): any {
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


export function groupOwnedClientsLdapClientClientCertificatePermissionsToHclTerraform(struct?: GroupOwnedClientsLdapClientClientCertificatePermissions): any {
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

export class GroupOwnedClientsLdapClientClientCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsLdapClientClientCertificatePermissions | undefined {
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

  public set internalValue(value: GroupOwnedClientsLdapClientClientCertificatePermissions | undefined) {
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

export class GroupOwnedClientsLdapClientClientCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsLdapClientClientCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsLdapClientClientCertificatePermissionsOutputReference {
    return new GroupOwnedClientsLdapClientClientCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsLdapClientClientCertificate {
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

export function groupOwnedClientsLdapClientClientCertificateToTerraform(struct?: GroupOwnedClientsLdapClientClientCertificate | cdktf.IResolvable): any {
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


export function groupOwnedClientsLdapClientClientCertificateToHclTerraform(struct?: GroupOwnedClientsLdapClientClientCertificate | cdktf.IResolvable): any {
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

export class GroupOwnedClientsLdapClientClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsLdapClientClientCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupOwnedClientsLdapClientClientCertificate | cdktf.IResolvable | undefined) {
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
  private _links = new GroupOwnedClientsLdapClientClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedClientsLdapClientClientCertificatePermissionsList(this, "permissions", false);
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
export interface GroupOwnedClientsLdapClientSharedSecretLinks {
}

export function groupOwnedClientsLdapClientSharedSecretLinksToTerraform(struct?: GroupOwnedClientsLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsLdapClientSharedSecretLinksToHclTerraform(struct?: GroupOwnedClientsLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsLdapClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsLdapClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsLdapClientSharedSecretLinks | undefined) {
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

export class GroupOwnedClientsLdapClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsLdapClientSharedSecretLinksOutputReference {
    return new GroupOwnedClientsLdapClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsLdapClientSharedSecretPermissions {
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

export function groupOwnedClientsLdapClientSharedSecretPermissionsToTerraform(struct?: GroupOwnedClientsLdapClientSharedSecretPermissions): any {
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


export function groupOwnedClientsLdapClientSharedSecretPermissionsToHclTerraform(struct?: GroupOwnedClientsLdapClientSharedSecretPermissions): any {
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

export class GroupOwnedClientsLdapClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsLdapClientSharedSecretPermissions | undefined {
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

  public set internalValue(value: GroupOwnedClientsLdapClientSharedSecretPermissions | undefined) {
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

export class GroupOwnedClientsLdapClientSharedSecretPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsLdapClientSharedSecretPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsLdapClientSharedSecretPermissionsOutputReference {
    return new GroupOwnedClientsLdapClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsLdapClientSharedSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#color Group#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedClientsLdapClientSharedSecretToTerraform(struct?: GroupOwnedClientsLdapClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedClientsLdapClientSharedSecretToHclTerraform(struct?: GroupOwnedClientsLdapClientSharedSecret): any {
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

export class GroupOwnedClientsLdapClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsLdapClientSharedSecret | undefined {
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

  public set internalValue(value: GroupOwnedClientsLdapClientSharedSecret | undefined) {
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
  private _links = new GroupOwnedClientsLdapClientSharedSecretLinksList(this, "links", false);
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
  private _permissions = new GroupOwnedClientsLdapClientSharedSecretPermissionsList(this, "permissions", false);
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
export interface GroupOwnedClientsLdapClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_certificate Group#client_certificate}
  */
  readonly clientCertificate?: GroupOwnedClientsLdapClientClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#share_secret_in_vault Group#share_secret_in_vault}
  */
  readonly shareSecretInVault?: boolean | cdktf.IResolvable;
}

export function groupOwnedClientsLdapClientToTerraform(struct?: GroupOwnedClientsLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: groupOwnedClientsLdapClientClientCertificateToTerraform(struct!.clientCertificate),
    share_secret_in_vault: cdktf.booleanToTerraform(struct!.shareSecretInVault),
  }
}


export function groupOwnedClientsLdapClientToHclTerraform(struct?: GroupOwnedClientsLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: groupOwnedClientsLdapClientClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsLdapClientClientCertificate",
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

export class GroupOwnedClientsLdapClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsLdapClient | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupOwnedClientsLdapClient | cdktf.IResolvable | undefined) {
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
  private _clientCertificate = new GroupOwnedClientsLdapClientClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GroupOwnedClientsLdapClientClientCertificate) {
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
  private _sharedSecret = new GroupOwnedClientsLdapClientSharedSecretOutputReference(this, "shared_secret");
  public get sharedSecret() {
    return this._sharedSecret;
  }

  // used_for_provisioning - computed: true, optional: false, required: false
  public get usedForProvisioning() {
    return this.getBooleanAttribute('used_for_provisioning');
  }
}
export interface GroupOwnedClientsLinks {
}

export function groupOwnedClientsLinksToTerraform(struct?: GroupOwnedClientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsLinksToHclTerraform(struct?: GroupOwnedClientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsLinks | undefined) {
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

export class GroupOwnedClientsLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsLinksOutputReference {
    return new GroupOwnedClientsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOauth2ClientAccountPermissions {
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

export function groupOwnedClientsOauth2ClientAccountPermissionsToTerraform(struct?: GroupOwnedClientsOauth2ClientAccountPermissions): any {
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


export function groupOwnedClientsOauth2ClientAccountPermissionsToHclTerraform(struct?: GroupOwnedClientsOauth2ClientAccountPermissions): any {
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

export class GroupOwnedClientsOauth2ClientAccountPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsOauth2ClientAccountPermissions | undefined {
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

  public set internalValue(value: GroupOwnedClientsOauth2ClientAccountPermissions | undefined) {
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

export class GroupOwnedClientsOauth2ClientAccountPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsOauth2ClientAccountPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsOauth2ClientAccountPermissionsOutputReference {
    return new GroupOwnedClientsOauth2ClientAccountPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOauth2ClientSharedSecretLinks {
}

export function groupOwnedClientsOauth2ClientSharedSecretLinksToTerraform(struct?: GroupOwnedClientsOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsOauth2ClientSharedSecretLinksToHclTerraform(struct?: GroupOwnedClientsOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsOauth2ClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsOauth2ClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsOauth2ClientSharedSecretLinks | undefined) {
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

export class GroupOwnedClientsOauth2ClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsOauth2ClientSharedSecretLinksOutputReference {
    return new GroupOwnedClientsOauth2ClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOauth2ClientSharedSecretPermissions {
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

export function groupOwnedClientsOauth2ClientSharedSecretPermissionsToTerraform(struct?: GroupOwnedClientsOauth2ClientSharedSecretPermissions): any {
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


export function groupOwnedClientsOauth2ClientSharedSecretPermissionsToHclTerraform(struct?: GroupOwnedClientsOauth2ClientSharedSecretPermissions): any {
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

export class GroupOwnedClientsOauth2ClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsOauth2ClientSharedSecretPermissions | undefined {
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

  public set internalValue(value: GroupOwnedClientsOauth2ClientSharedSecretPermissions | undefined) {
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

export class GroupOwnedClientsOauth2ClientSharedSecretPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsOauth2ClientSharedSecretPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsOauth2ClientSharedSecretPermissionsOutputReference {
    return new GroupOwnedClientsOauth2ClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOauth2ClientSharedSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#color Group#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedClientsOauth2ClientSharedSecretToTerraform(struct?: GroupOwnedClientsOauth2ClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedClientsOauth2ClientSharedSecretToHclTerraform(struct?: GroupOwnedClientsOauth2ClientSharedSecret): any {
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

export class GroupOwnedClientsOauth2ClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsOauth2ClientSharedSecret | undefined {
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

  public set internalValue(value: GroupOwnedClientsOauth2ClientSharedSecret | undefined) {
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
  private _links = new GroupOwnedClientsOauth2ClientSharedSecretLinksList(this, "links", false);
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
  private _permissions = new GroupOwnedClientsOauth2ClientSharedSecretPermissionsList(this, "permissions", false);
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
export interface GroupOwnedClientsOauth2Client {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#callback_uri Group#callback_uri}
  */
  readonly callbackUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#debug_mode Group#debug_mode}
  */
  readonly debugMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#id_token_claims Group#id_token_claims}
  */
  readonly idTokenClaims?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#initiate_login_uri Group#initiate_login_uri}
  */
  readonly initiateLoginUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#profile Group#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#resource_uris Group#resource_uris}
  */
  readonly resourceUris?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#share_secret_in_vault Group#share_secret_in_vault}
  */
  readonly shareSecretInVault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#show_landing_page Group#show_landing_page}
  */
  readonly showLandingPage?: boolean | cdktf.IResolvable;
}

export function groupOwnedClientsOauth2ClientToTerraform(struct?: GroupOwnedClientsOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
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


export function groupOwnedClientsOauth2ClientToHclTerraform(struct?: GroupOwnedClientsOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GroupOwnedClientsOauth2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsOauth2Client | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
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

  public set internalValue(value: GroupOwnedClientsOauth2Client | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
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
      this._attributes = value.attributes;
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
  private _accountPermissions = new GroupOwnedClientsOauth2ClientAccountPermissionsList(this, "account_permissions", false);
  public get accountPermissions() {
    return this._accountPermissions;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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
  private _sharedSecret = new GroupOwnedClientsOauth2ClientSharedSecretOutputReference(this, "shared_secret");
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
export interface GroupOwnedClientsOwnerLinks {
}

export function groupOwnedClientsOwnerLinksToTerraform(struct?: GroupOwnedClientsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsOwnerLinksToHclTerraform(struct?: GroupOwnedClientsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsOwnerLinks | undefined) {
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

export class GroupOwnedClientsOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsOwnerLinksOutputReference {
    return new GroupOwnedClientsOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOwnerOrganizationalUnitLinks {
}

export function groupOwnedClientsOwnerOrganizationalUnitLinksToTerraform(struct?: GroupOwnedClientsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedClientsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsOwnerOrganizationalUnitLinks | undefined) {
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

export class GroupOwnedClientsOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsOwnerOrganizationalUnitLinksOutputReference {
    return new GroupOwnedClientsOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOwnerOrganizationalUnitPermissions {
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

export function groupOwnedClientsOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedClientsOwnerOrganizationalUnitPermissions): any {
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


export function groupOwnedClientsOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedClientsOwnerOrganizationalUnitPermissions): any {
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

export class GroupOwnedClientsOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsOwnerOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: GroupOwnedClientsOwnerOrganizationalUnitPermissions | undefined) {
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

export class GroupOwnedClientsOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedClientsOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedClientsOwnerOrganizationalUnitToTerraform(struct?: GroupOwnedClientsOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedClientsOwnerOrganizationalUnitToHclTerraform(struct?: GroupOwnedClientsOwnerOrganizationalUnit | cdktf.IResolvable): any {
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

export class GroupOwnedClientsOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupOwnedClientsOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new GroupOwnedClientsOwnerOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new GroupOwnedClientsOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedClientsOwnerPermissions {
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

export function groupOwnedClientsOwnerPermissionsToTerraform(struct?: GroupOwnedClientsOwnerPermissions): any {
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


export function groupOwnedClientsOwnerPermissionsToHclTerraform(struct?: GroupOwnedClientsOwnerPermissions): any {
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

export class GroupOwnedClientsOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsOwnerPermissions | undefined {
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

  public set internalValue(value: GroupOwnedClientsOwnerPermissions | undefined) {
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

export class GroupOwnedClientsOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsOwnerPermissionsOutputReference {
    return new GroupOwnedClientsOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedClientsOwnerOrganizationalUnit;
}

export function groupOwnedClientsOwnerToTerraform(struct?: GroupOwnedClientsOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedClientsOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedClientsOwnerToHclTerraform(struct?: GroupOwnedClientsOwner | cdktf.IResolvable): any {
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
      value: groupOwnedClientsOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedClientsOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsOwner | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupOwnedClientsOwner | cdktf.IResolvable | undefined) {
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
  private _links = new GroupOwnedClientsOwnerLinksList(this, "links", false);
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
  private _organizationalUnit = new GroupOwnedClientsOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedClientsOwnerOrganizationalUnit) {
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
  private _permissions = new GroupOwnedClientsOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedClientsPermissions {
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

export function groupOwnedClientsPermissionsToTerraform(struct?: GroupOwnedClientsPermissions): any {
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


export function groupOwnedClientsPermissionsToHclTerraform(struct?: GroupOwnedClientsPermissions): any {
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

export class GroupOwnedClientsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsPermissions | undefined {
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

  public set internalValue(value: GroupOwnedClientsPermissions | undefined) {
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

export class GroupOwnedClientsPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsPermissionsOutputReference {
    return new GroupOwnedClientsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsSaml2Client {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#metadata Group#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#metadata_url Group#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#subject_format Group#subject_format}
  */
  readonly subjectFormat: string;
}

export function groupOwnedClientsSaml2ClientToTerraform(struct?: GroupOwnedClientsSaml2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    subject_format: cdktf.stringToTerraform(struct!.subjectFormat),
  }
}


export function groupOwnedClientsSaml2ClientToHclTerraform(struct?: GroupOwnedClientsSaml2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GroupOwnedClientsSaml2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsSaml2Client | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
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

  public set internalValue(value: GroupOwnedClientsSaml2Client | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
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
      this._attributes = value.attributes;
      this._metadata = value.metadata;
      this._metadataUrl = value.metadataUrl;
      this._subjectFormat = value.subjectFormat;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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
export interface GroupOwnedClientsTechnicalAdministratorLinks {
}

export function groupOwnedClientsTechnicalAdministratorLinksToTerraform(struct?: GroupOwnedClientsTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsTechnicalAdministratorLinksToHclTerraform(struct?: GroupOwnedClientsTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsTechnicalAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsTechnicalAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsTechnicalAdministratorLinks | undefined) {
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

export class GroupOwnedClientsTechnicalAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsTechnicalAdministratorLinksOutputReference {
    return new GroupOwnedClientsTechnicalAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
