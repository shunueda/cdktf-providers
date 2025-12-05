// https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientapplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#accessprofileclients Clientapplication#accessprofileclients}
  */
  readonly accessprofileclients?: ClientapplicationAccessprofileclients[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#additional Clientapplication#additional}
  */
  readonly additional?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#client_id Clientapplication#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#delete_tile Clientapplication#delete_tile}
  */
  readonly deleteTile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#generate_secret Clientapplication#generate_secret}
  */
  readonly generateSecret?: ClientapplicationGenerateSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#groupclients Clientapplication#groupclients}
  */
  readonly groupclients?: ClientapplicationGroupclients[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#ldap_client Clientapplication#ldap_client}
  */
  readonly ldapClient?: ClientapplicationLdapClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#oauth2_client Clientapplication#oauth2_client}
  */
  readonly oauth2Client?: ClientapplicationOauth2Client;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#owner_uuid Clientapplication#owner_uuid}
  */
  readonly ownerUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#saml2_client Clientapplication#saml2_client}
  */
  readonly saml2Client?: ClientapplicationSaml2Client;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#scopes Clientapplication#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#technical_administrator_uuid Clientapplication#technical_administrator_uuid}
  */
  readonly technicalAdministratorUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#tile Clientapplication#tile}
  */
  readonly tile?: ClientapplicationTile;
}
export interface ClientapplicationAccessprofileclientsClientLinks {
}

export function clientapplicationAccessprofileclientsClientLinksToTerraform(struct?: ClientapplicationAccessprofileclientsClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationAccessprofileclientsClientLinksToHclTerraform(struct?: ClientapplicationAccessprofileclientsClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationAccessprofileclientsClientLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationAccessprofileclientsClientLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationAccessprofileclientsClientLinks | undefined) {
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

export class ClientapplicationAccessprofileclientsClientLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationAccessprofileclientsClientLinksOutputReference {
    return new ClientapplicationAccessprofileclientsClientLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationAccessprofileclientsClientPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationAccessprofileclientsClientPermissionsToTerraform(struct?: ClientapplicationAccessprofileclientsClientPermissions): any {
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


export function clientapplicationAccessprofileclientsClientPermissionsToHclTerraform(struct?: ClientapplicationAccessprofileclientsClientPermissions): any {
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

export class ClientapplicationAccessprofileclientsClientPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationAccessprofileclientsClientPermissions | undefined {
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

  public set internalValue(value: ClientapplicationAccessprofileclientsClientPermissions | undefined) {
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

export class ClientapplicationAccessprofileclientsClientPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationAccessprofileclientsClientPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationAccessprofileclientsClientPermissionsOutputReference {
    return new ClientapplicationAccessprofileclientsClientPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationAccessprofileclientsClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#client_id Clientapplication#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#scopes Clientapplication#scopes}
  */
  readonly scopes?: string[];
}

export function clientapplicationAccessprofileclientsClientToTerraform(struct?: ClientapplicationAccessprofileclientsClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    name: cdktf.stringToTerraform(struct!.name),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function clientapplicationAccessprofileclientsClientToHclTerraform(struct?: ClientapplicationAccessprofileclientsClient): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationAccessprofileclientsClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationAccessprofileclientsClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationAccessprofileclientsClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._name = undefined;
      this._scopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._name = value.name;
      this._scopes = value.scopes;
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

  // links - computed: true, optional: false, required: false
  private _links = new ClientapplicationAccessprofileclientsClientLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationAccessprofileclientsClientPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationAccessprofileclientsLinks {
}

export function clientapplicationAccessprofileclientsLinksToTerraform(struct?: ClientapplicationAccessprofileclientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationAccessprofileclientsLinksToHclTerraform(struct?: ClientapplicationAccessprofileclientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationAccessprofileclientsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationAccessprofileclientsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationAccessprofileclientsLinks | undefined) {
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

export class ClientapplicationAccessprofileclientsLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationAccessprofileclientsLinksOutputReference {
    return new ClientapplicationAccessprofileclientsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationAccessprofileclientsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationAccessprofileclientsPermissionsToTerraform(struct?: ClientapplicationAccessprofileclientsPermissions): any {
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


export function clientapplicationAccessprofileclientsPermissionsToHclTerraform(struct?: ClientapplicationAccessprofileclientsPermissions): any {
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

export class ClientapplicationAccessprofileclientsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationAccessprofileclientsPermissions | undefined {
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

  public set internalValue(value: ClientapplicationAccessprofileclientsPermissions | undefined) {
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

export class ClientapplicationAccessprofileclientsPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationAccessprofileclientsPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationAccessprofileclientsPermissionsOutputReference {
    return new ClientapplicationAccessprofileclientsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationAccessprofileclients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#access_profile_uuid Clientapplication#access_profile_uuid}
  */
  readonly accessProfileUuid: string;
}

export function clientapplicationAccessprofileclientsToTerraform(struct?: ClientapplicationAccessprofileclients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_profile_uuid: cdktf.stringToTerraform(struct!.accessProfileUuid),
  }
}


export function clientapplicationAccessprofileclientsToHclTerraform(struct?: ClientapplicationAccessprofileclients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_profile_uuid: {
      value: cdktf.stringToHclTerraform(struct!.accessProfileUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationAccessprofileclientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationAccessprofileclients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessProfileUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessProfileUuid = this._accessProfileUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationAccessprofileclients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessProfileUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessProfileUuid = value.accessProfileUuid;
    }
  }

  // access_profile_uuid - computed: false, optional: false, required: true
  private _accessProfileUuid?: string; 
  public get accessProfileUuid() {
    return this.getStringAttribute('access_profile_uuid');
  }
  public set accessProfileUuid(value: string) {
    this._accessProfileUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProfileUuidInput() {
    return this._accessProfileUuid;
  }

  // client - computed: true, optional: false, required: false
  private _client = new ClientapplicationAccessprofileclientsClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }

  // links - computed: true, optional: false, required: false
  private _links = new ClientapplicationAccessprofileclientsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ClientapplicationAccessprofileclientsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}

export class ClientapplicationAccessprofileclientsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationAccessprofileclients[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationAccessprofileclientsOutputReference {
    return new ClientapplicationAccessprofileclientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationAudit {
}

export function clientapplicationAuditToTerraform(struct?: ClientapplicationAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationAuditToHclTerraform(struct?: ClientapplicationAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }
}
export interface ClientapplicationGenerateSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#old_secret Clientapplication#old_secret}
  */
  readonly oldSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#regenerate Clientapplication#regenerate}
  */
  readonly regenerate?: boolean | cdktf.IResolvable;
}

export function clientapplicationGenerateSecretToTerraform(struct?: ClientapplicationGenerateSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    old_secret: cdktf.stringToTerraform(struct!.oldSecret),
    regenerate: cdktf.booleanToTerraform(struct!.regenerate),
  }
}


export function clientapplicationGenerateSecretToHclTerraform(struct?: ClientapplicationGenerateSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    old_secret: {
      value: cdktf.stringToHclTerraform(struct!.oldSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regenerate: {
      value: cdktf.booleanToHclTerraform(struct!.regenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGenerateSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGenerateSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oldSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldSecret = this._oldSecret;
    }
    if (this._regenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.regenerate = this._regenerate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGenerateSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oldSecret = undefined;
      this._regenerate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oldSecret = value.oldSecret;
      this._regenerate = value.regenerate;
    }
  }

  // old_secret - computed: false, optional: true, required: false
  private _oldSecret?: string; 
  public get oldSecret() {
    return this.getStringAttribute('old_secret');
  }
  public set oldSecret(value: string) {
    this._oldSecret = value;
  }
  public resetOldSecret() {
    this._oldSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldSecretInput() {
    return this._oldSecret;
  }

  // regenerate - computed: false, optional: true, required: false
  private _regenerate?: boolean | cdktf.IResolvable; 
  public get regenerate() {
    return this.getBooleanAttribute('regenerate');
  }
  public set regenerate(value: boolean | cdktf.IResolvable) {
    this._regenerate = value;
  }
  public resetRegenerate() {
    this._regenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerateInput() {
    return this._regenerate;
  }
}
export interface ClientapplicationGroupclientsClientLinks {
}

export function clientapplicationGroupclientsClientLinksToTerraform(struct?: ClientapplicationGroupclientsClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupclientsClientLinksToHclTerraform(struct?: ClientapplicationGroupclientsClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupclientsClientLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupclientsClientLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupclientsClientLinks | undefined) {
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

export class ClientapplicationGroupclientsClientLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupclientsClientLinksOutputReference {
    return new ClientapplicationGroupclientsClientLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupclientsClientPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupclientsClientPermissionsToTerraform(struct?: ClientapplicationGroupclientsClientPermissions): any {
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


export function clientapplicationGroupclientsClientPermissionsToHclTerraform(struct?: ClientapplicationGroupclientsClientPermissions): any {
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

export class ClientapplicationGroupclientsClientPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupclientsClientPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupclientsClientPermissions | undefined) {
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

export class ClientapplicationGroupclientsClientPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupclientsClientPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupclientsClientPermissionsOutputReference {
    return new ClientapplicationGroupclientsClientPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupclientsClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#client_id Clientapplication#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#scopes Clientapplication#scopes}
  */
  readonly scopes?: string[];
}

export function clientapplicationGroupclientsClientToTerraform(struct?: ClientapplicationGroupclientsClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    name: cdktf.stringToTerraform(struct!.name),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function clientapplicationGroupclientsClientToHclTerraform(struct?: ClientapplicationGroupclientsClient): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupclientsClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupclientsClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupclientsClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._name = undefined;
      this._scopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._name = value.name;
      this._scopes = value.scopes;
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

  // links - computed: true, optional: false, required: false
  private _links = new ClientapplicationGroupclientsClientLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupclientsClientPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupclientsLinks {
}

export function clientapplicationGroupclientsLinksToTerraform(struct?: ClientapplicationGroupclientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupclientsLinksToHclTerraform(struct?: ClientapplicationGroupclientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupclientsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupclientsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupclientsLinks | undefined) {
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

export class ClientapplicationGroupclientsLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupclientsLinksOutputReference {
    return new ClientapplicationGroupclientsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupclientsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupclientsPermissionsToTerraform(struct?: ClientapplicationGroupclientsPermissions): any {
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


export function clientapplicationGroupclientsPermissionsToHclTerraform(struct?: ClientapplicationGroupclientsPermissions): any {
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

export class ClientapplicationGroupclientsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupclientsPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupclientsPermissions | undefined) {
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

export class ClientapplicationGroupclientsPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupclientsPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupclientsPermissionsOutputReference {
    return new ClientapplicationGroupclientsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupclients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#activation_required Clientapplication#activation_required}
  */
  readonly activationRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#group_uuid Clientapplication#group_uuid}
  */
  readonly groupUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#owner_uuid Clientapplication#owner_uuid}
  */
  readonly ownerUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#technical_administrator_uuid Clientapplication#technical_administrator_uuid}
  */
  readonly technicalAdministratorUuid?: string;
}

export function clientapplicationGroupclientsToTerraform(struct?: ClientapplicationGroupclients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_required: cdktf.booleanToTerraform(struct!.activationRequired),
    group_uuid: cdktf.stringToTerraform(struct!.groupUuid),
    owner_uuid: cdktf.stringToTerraform(struct!.ownerUuid),
    technical_administrator_uuid: cdktf.stringToTerraform(struct!.technicalAdministratorUuid),
  }
}


export function clientapplicationGroupclientsToHclTerraform(struct?: ClientapplicationGroupclients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_required: {
      value: cdktf.booleanToHclTerraform(struct!.activationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_uuid: {
      value: cdktf.stringToHclTerraform(struct!.groupUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_uuid: {
      value: cdktf.stringToHclTerraform(struct!.ownerUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technical_administrator_uuid: {
      value: cdktf.stringToHclTerraform(struct!.technicalAdministratorUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupclientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupclients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationRequired = this._activationRequired;
    }
    if (this._groupUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupUuid = this._groupUuid;
    }
    if (this._ownerUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUuid = this._ownerUuid;
    }
    if (this._technicalAdministratorUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.technicalAdministratorUuid = this._technicalAdministratorUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupclients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationRequired = undefined;
      this._groupUuid = undefined;
      this._ownerUuid = undefined;
      this._technicalAdministratorUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationRequired = value.activationRequired;
      this._groupUuid = value.groupUuid;
      this._ownerUuid = value.ownerUuid;
      this._technicalAdministratorUuid = value.technicalAdministratorUuid;
    }
  }

  // activation_required - computed: true, optional: true, required: false
  private _activationRequired?: boolean | cdktf.IResolvable; 
  public get activationRequired() {
    return this.getBooleanAttribute('activation_required');
  }
  public set activationRequired(value: boolean | cdktf.IResolvable) {
    this._activationRequired = value;
  }
  public resetActivationRequired() {
    this._activationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationRequiredInput() {
    return this._activationRequired;
  }

  // client - computed: true, optional: false, required: false
  private _client = new ClientapplicationGroupclientsClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }

  // group_uuid - computed: false, optional: false, required: true
  private _groupUuid?: string; 
  public get groupUuid() {
    return this.getStringAttribute('group_uuid');
  }
  public set groupUuid(value: string) {
    this._groupUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupUuidInput() {
    return this._groupUuid;
  }

  // links - computed: true, optional: false, required: false
  private _links = new ClientapplicationGroupclientsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // owner_uuid - computed: true, optional: true, required: false
  private _ownerUuid?: string; 
  public get ownerUuid() {
    return this.getStringAttribute('owner_uuid');
  }
  public set ownerUuid(value: string) {
    this._ownerUuid = value;
  }
  public resetOwnerUuid() {
    this._ownerUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUuidInput() {
    return this._ownerUuid;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ClientapplicationGroupclientsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // technical_administrator_uuid - computed: true, optional: true, required: false
  private _technicalAdministratorUuid?: string; 
  public get technicalAdministratorUuid() {
    return this.getStringAttribute('technical_administrator_uuid');
  }
  public set technicalAdministratorUuid(value: string) {
    this._technicalAdministratorUuid = value;
  }
  public resetTechnicalAdministratorUuid() {
    this._technicalAdministratorUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalAdministratorUuidInput() {
    return this._technicalAdministratorUuid;
  }
}

export class ClientapplicationGroupclientsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupclients[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupclientsOutputReference {
    return new ClientapplicationGroupclientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuditConfigLinks {
}

export function clientapplicationGroupsAuditConfigLinksToTerraform(struct?: ClientapplicationGroupsAuditConfigLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuditConfigLinksToHclTerraform(struct?: ClientapplicationGroupsAuditConfigLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuditConfigLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuditConfigLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuditConfigLinks | undefined) {
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

export class ClientapplicationGroupsAuditConfigLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuditConfigLinksOutputReference {
    return new ClientapplicationGroupsAuditConfigLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuditConfigPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuditConfigPermissionsToTerraform(struct?: ClientapplicationGroupsAuditConfigPermissions): any {
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


export function clientapplicationGroupsAuditConfigPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuditConfigPermissions): any {
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

export class ClientapplicationGroupsAuditConfigPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuditConfigPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuditConfigPermissions | undefined) {
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

export class ClientapplicationGroupsAuditConfigPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuditConfigPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuditConfigPermissionsOutputReference {
    return new ClientapplicationGroupsAuditConfigPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuditConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#months Clientapplication#months}
  */
  readonly months?: string[];
}

export function clientapplicationGroupsAuditConfigToTerraform(struct?: ClientapplicationGroupsAuditConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
  }
}


export function clientapplicationGroupsAuditConfigToHclTerraform(struct?: ClientapplicationGroupsAuditConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupsAuditConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuditConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuditConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._months = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._months = value.months;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new ClientapplicationGroupsAuditConfigLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // months - computed: true, optional: true, required: false
  private _months?: string[]; 
  public get months() {
    return cdktf.Fn.tolist(this.getListAttribute('months'));
  }
  public set months(value: string[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ClientapplicationGroupsAuditConfigPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface ClientapplicationGroupsAuthorizingGroupAuditingLinks {
}

export function clientapplicationGroupsAuthorizingGroupAuditingLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupAuditingLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupAuditingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupAuditingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupAuditingLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupAuditingLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupAuditingLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupAuditingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinks {
}

export function clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit | cdktf.IResolvable): any {
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

export class ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsAuthorizingGroupAuditingPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupAuditingPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupAuditingPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditingPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupAuditingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupAuditingPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupAuditingPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupAuditingPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupAuditingPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupAuditingPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupAuditingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupAuditing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#organizational_unit Clientapplication#organizational_unit}
  */
  readonly organizationalUnit?: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit;
}

export function clientapplicationGroupsAuthorizingGroupAuditingToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function clientapplicationGroupsAuthorizingGroupAuditingToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupAuditing | cdktf.IResolvable): any {
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
      value: clientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupsAuthorizingGroupAuditingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupAuditing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupAuditing | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupAuditingLinksList(this, "links", false);
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
  private _organizationalUnit = new ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: ClientapplicationGroupsAuthorizingGroupAuditingOrganizationalUnit) {
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupAuditingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsAuthorizingGroupDelegationLinks {
}

export function clientapplicationGroupsAuthorizingGroupDelegationLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupDelegationLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupDelegationLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupDelegationLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupDelegationLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupDelegationLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupDelegationLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupDelegationLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinks {
}

export function clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit | cdktf.IResolvable): any {
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

export class ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsAuthorizingGroupDelegationPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupDelegationPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupDelegationPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegationPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupDelegationPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupDelegationPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupDelegationPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupDelegationPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupDelegationPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupDelegationPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupDelegationPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#organizational_unit Clientapplication#organizational_unit}
  */
  readonly organizationalUnit?: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit;
}

export function clientapplicationGroupsAuthorizingGroupDelegationToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function clientapplicationGroupsAuthorizingGroupDelegationToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupDelegation | cdktf.IResolvable): any {
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
      value: clientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupsAuthorizingGroupDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupDelegation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupDelegation | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupDelegationLinksList(this, "links", false);
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
  private _organizationalUnit = new ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: ClientapplicationGroupsAuthorizingGroupDelegationOrganizationalUnit) {
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupDelegationPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsAuthorizingGroupMembershipLinks {
}

export function clientapplicationGroupsAuthorizingGroupMembershipLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupMembershipLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupMembershipLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupMembershipLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupMembershipLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupMembershipLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupMembershipLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupMembershipLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinks {
}

export function clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit | cdktf.IResolvable): any {
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

export class ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsAuthorizingGroupMembershipPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupMembershipPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupMembershipPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembershipPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupMembershipPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupMembershipPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupMembershipPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupMembershipPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupMembershipPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupMembershipPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupMembershipPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupMembership {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#organizational_unit Clientapplication#organizational_unit}
  */
  readonly organizationalUnit?: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit;
}

export function clientapplicationGroupsAuthorizingGroupMembershipToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembership | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function clientapplicationGroupsAuthorizingGroupMembershipToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupMembership | cdktf.IResolvable): any {
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
      value: clientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupsAuthorizingGroupMembershipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupMembership | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupMembership | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupMembershipLinksList(this, "links", false);
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
  private _organizationalUnit = new ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: ClientapplicationGroupsAuthorizingGroupMembershipOrganizationalUnit) {
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupMembershipPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsAuthorizingGroupProvisioningLinks {
}

export function clientapplicationGroupsAuthorizingGroupProvisioningLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupProvisioningLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupProvisioningLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupProvisioningLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupProvisioningLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupProvisioningLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupProvisioningLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupProvisioningLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinks {
}

export function clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinksToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinksToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinks | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinksOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit | cdktf.IResolvable): any {
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

export class ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsAuthorizingGroupProvisioningPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsAuthorizingGroupProvisioningPermissionsToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningPermissions): any {
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


export function clientapplicationGroupsAuthorizingGroupProvisioningPermissionsToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioningPermissions): any {
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

export class ClientapplicationGroupsAuthorizingGroupProvisioningPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupProvisioningPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupProvisioningPermissions | undefined) {
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

export class ClientapplicationGroupsAuthorizingGroupProvisioningPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsAuthorizingGroupProvisioningPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsAuthorizingGroupProvisioningPermissionsOutputReference {
    return new ClientapplicationGroupsAuthorizingGroupProvisioningPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsAuthorizingGroupProvisioning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#organizational_unit Clientapplication#organizational_unit}
  */
  readonly organizationalUnit?: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit;
}

export function clientapplicationGroupsAuthorizingGroupProvisioningToTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function clientapplicationGroupsAuthorizingGroupProvisioningToHclTerraform(struct?: ClientapplicationGroupsAuthorizingGroupProvisioning | cdktf.IResolvable): any {
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
      value: clientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupsAuthorizingGroupProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsAuthorizingGroupProvisioning | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsAuthorizingGroupProvisioning | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsAuthorizingGroupProvisioningLinksList(this, "links", false);
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
  private _organizationalUnit = new ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: ClientapplicationGroupsAuthorizingGroupProvisioningOrganizationalUnit) {
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
  private _permissions = new ClientapplicationGroupsAuthorizingGroupProvisioningPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsClassificationLinks {
}

export function clientapplicationGroupsClassificationLinksToTerraform(struct?: ClientapplicationGroupsClassificationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsClassificationLinksToHclTerraform(struct?: ClientapplicationGroupsClassificationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsClassificationLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsClassificationLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsClassificationLinks | undefined) {
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

export class ClientapplicationGroupsClassificationLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsClassificationLinksOutputReference {
    return new ClientapplicationGroupsClassificationLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsClassificationPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsClassificationPermissionsToTerraform(struct?: ClientapplicationGroupsClassificationPermissions): any {
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


export function clientapplicationGroupsClassificationPermissionsToHclTerraform(struct?: ClientapplicationGroupsClassificationPermissions): any {
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

export class ClientapplicationGroupsClassificationPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsClassificationPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsClassificationPermissions | undefined) {
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

export class ClientapplicationGroupsClassificationPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsClassificationPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsClassificationPermissionsOutputReference {
    return new ClientapplicationGroupsClassificationPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsClassification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationGroupsClassificationToTerraform(struct?: ClientapplicationGroupsClassification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationGroupsClassificationToHclTerraform(struct?: ClientapplicationGroupsClassification | cdktf.IResolvable): any {
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

export class ClientapplicationGroupsClassificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsClassification | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsClassification | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsClassificationLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupsClassificationPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsLinks {
}

export function clientapplicationGroupsLinksToTerraform(struct?: ClientapplicationGroupsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsLinksToHclTerraform(struct?: ClientapplicationGroupsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsLinks | undefined) {
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

export class ClientapplicationGroupsLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsLinksOutputReference {
    return new ClientapplicationGroupsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsNestedUnderLinks {
}

export function clientapplicationGroupsNestedUnderLinksToTerraform(struct?: ClientapplicationGroupsNestedUnderLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsNestedUnderLinksToHclTerraform(struct?: ClientapplicationGroupsNestedUnderLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsNestedUnderLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsNestedUnderLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsNestedUnderLinks | undefined) {
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

export class ClientapplicationGroupsNestedUnderLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsNestedUnderLinksOutputReference {
    return new ClientapplicationGroupsNestedUnderLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsNestedUnderOrganizationalUnitLinks {
}

export function clientapplicationGroupsNestedUnderOrganizationalUnitLinksToTerraform(struct?: ClientapplicationGroupsNestedUnderOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsNestedUnderOrganizationalUnitLinksToHclTerraform(struct?: ClientapplicationGroupsNestedUnderOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsNestedUnderOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsNestedUnderOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsNestedUnderOrganizationalUnitLinks | undefined) {
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

export class ClientapplicationGroupsNestedUnderOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsNestedUnderOrganizationalUnitLinksOutputReference {
    return new ClientapplicationGroupsNestedUnderOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsNestedUnderOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsNestedUnderOrganizationalUnitPermissionsToTerraform(struct?: ClientapplicationGroupsNestedUnderOrganizationalUnitPermissions): any {
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


export function clientapplicationGroupsNestedUnderOrganizationalUnitPermissionsToHclTerraform(struct?: ClientapplicationGroupsNestedUnderOrganizationalUnitPermissions): any {
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

export class ClientapplicationGroupsNestedUnderOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsNestedUnderOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsNestedUnderOrganizationalUnitPermissions | undefined) {
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

export class ClientapplicationGroupsNestedUnderOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsNestedUnderOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsNestedUnderOrganizationalUnitPermissionsOutputReference {
    return new ClientapplicationGroupsNestedUnderOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsNestedUnderOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationGroupsNestedUnderOrganizationalUnitToTerraform(struct?: ClientapplicationGroupsNestedUnderOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationGroupsNestedUnderOrganizationalUnitToHclTerraform(struct?: ClientapplicationGroupsNestedUnderOrganizationalUnit | cdktf.IResolvable): any {
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

export class ClientapplicationGroupsNestedUnderOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsNestedUnderOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsNestedUnderOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsNestedUnderOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupsNestedUnderOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsNestedUnderPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsNestedUnderPermissionsToTerraform(struct?: ClientapplicationGroupsNestedUnderPermissions): any {
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


export function clientapplicationGroupsNestedUnderPermissionsToHclTerraform(struct?: ClientapplicationGroupsNestedUnderPermissions): any {
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

export class ClientapplicationGroupsNestedUnderPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsNestedUnderPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsNestedUnderPermissions | undefined) {
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

export class ClientapplicationGroupsNestedUnderPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsNestedUnderPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsNestedUnderPermissionsOutputReference {
    return new ClientapplicationGroupsNestedUnderPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsNestedUnder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#organizational_unit Clientapplication#organizational_unit}
  */
  readonly organizationalUnit?: ClientapplicationGroupsNestedUnderOrganizationalUnit;
}

export function clientapplicationGroupsNestedUnderToTerraform(struct?: ClientapplicationGroupsNestedUnder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: clientapplicationGroupsNestedUnderOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function clientapplicationGroupsNestedUnderToHclTerraform(struct?: ClientapplicationGroupsNestedUnder | cdktf.IResolvable): any {
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
      value: clientapplicationGroupsNestedUnderOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsNestedUnderOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupsNestedUnderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsNestedUnder | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsNestedUnder | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsNestedUnderLinksList(this, "links", false);
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
  private _organizationalUnit = new ClientapplicationGroupsNestedUnderOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: ClientapplicationGroupsNestedUnderOrganizationalUnit) {
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
  private _permissions = new ClientapplicationGroupsNestedUnderPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsOrganizationalUnitLinks {
}

export function clientapplicationGroupsOrganizationalUnitLinksToTerraform(struct?: ClientapplicationGroupsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationGroupsOrganizationalUnitLinksToHclTerraform(struct?: ClientapplicationGroupsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationGroupsOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroupsOrganizationalUnitLinks | undefined) {
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

export class ClientapplicationGroupsOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationGroupsOrganizationalUnitLinksOutputReference {
    return new ClientapplicationGroupsOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsOrganizationalUnitPermissionsToTerraform(struct?: ClientapplicationGroupsOrganizationalUnitPermissions): any {
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


export function clientapplicationGroupsOrganizationalUnitPermissionsToHclTerraform(struct?: ClientapplicationGroupsOrganizationalUnitPermissions): any {
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

export class ClientapplicationGroupsOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsOrganizationalUnitPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsOrganizationalUnitPermissions | undefined) {
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

export class ClientapplicationGroupsOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsOrganizationalUnitPermissionsOutputReference {
    return new ClientapplicationGroupsOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroupsOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationGroupsOrganizationalUnitToTerraform(struct?: ClientapplicationGroupsOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationGroupsOrganizationalUnitToHclTerraform(struct?: ClientapplicationGroupsOrganizationalUnit | cdktf.IResolvable): any {
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

export class ClientapplicationGroupsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationGroupsOrganizationalUnit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationGroupsOrganizationalUnit | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationGroupsOrganizationalUnitLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationGroupsOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface ClientapplicationGroupsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationGroupsPermissionsToTerraform(struct?: ClientapplicationGroupsPermissions): any {
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


export function clientapplicationGroupsPermissionsToHclTerraform(struct?: ClientapplicationGroupsPermissions): any {
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

export class ClientapplicationGroupsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroupsPermissions | undefined {
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

  public set internalValue(value: ClientapplicationGroupsPermissions | undefined) {
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

export class ClientapplicationGroupsPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroupsPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsPermissionsOutputReference {
    return new ClientapplicationGroupsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#application_administration Clientapplication#application_administration}
  */
  readonly applicationAdministration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#audit_config Clientapplication#audit_config}
  */
  readonly auditConfig?: ClientapplicationGroupsAuditConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#authorizing_group_auditing Clientapplication#authorizing_group_auditing}
  */
  readonly authorizingGroupAuditing?: ClientapplicationGroupsAuthorizingGroupAuditing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#authorizing_group_delegation Clientapplication#authorizing_group_delegation}
  */
  readonly authorizingGroupDelegation?: ClientapplicationGroupsAuthorizingGroupDelegation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#authorizing_group_membership Clientapplication#authorizing_group_membership}
  */
  readonly authorizingGroupMembership?: ClientapplicationGroupsAuthorizingGroupMembership;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#authorizing_group_provisioning Clientapplication#authorizing_group_provisioning}
  */
  readonly authorizingGroupProvisioning?: ClientapplicationGroupsAuthorizingGroupProvisioning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#classification Clientapplication#classification}
  */
  readonly classification?: ClientapplicationGroupsClassification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#description Clientapplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#extended_access Clientapplication#extended_access}
  */
  readonly extendedAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#hide_audit_trail Clientapplication#hide_audit_trail}
  */
  readonly hideAuditTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#nested_under Clientapplication#nested_under}
  */
  readonly nestedUnder?: ClientapplicationGroupsNestedUnder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#organizational_unit Clientapplication#organizational_unit}
  */
  readonly organizationalUnit?: ClientapplicationGroupsOrganizationalUnit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#private_group Clientapplication#private_group}
  */
  readonly privateGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#profile_administration Clientapplication#profile_administration}
  */
  readonly profileAdministration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#record_trail Clientapplication#record_trail}
  */
  readonly recordTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#rotating_password_required Clientapplication#rotating_password_required}
  */
  readonly rotatingPasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#single_managed Clientapplication#single_managed}
  */
  readonly singleManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#vault_recovery Clientapplication#vault_recovery}
  */
  readonly vaultRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#vault_requires_activation Clientapplication#vault_requires_activation}
  */
  readonly vaultRequiresActivation?: boolean | cdktf.IResolvable;
}

export function clientapplicationGroupsToTerraform(struct?: ClientapplicationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_administration: cdktf.booleanToTerraform(struct!.applicationAdministration),
    audit_config: clientapplicationGroupsAuditConfigToTerraform(struct!.auditConfig),
    authorizing_group_auditing: clientapplicationGroupsAuthorizingGroupAuditingToTerraform(struct!.authorizingGroupAuditing),
    authorizing_group_delegation: clientapplicationGroupsAuthorizingGroupDelegationToTerraform(struct!.authorizingGroupDelegation),
    authorizing_group_membership: clientapplicationGroupsAuthorizingGroupMembershipToTerraform(struct!.authorizingGroupMembership),
    authorizing_group_provisioning: clientapplicationGroupsAuthorizingGroupProvisioningToTerraform(struct!.authorizingGroupProvisioning),
    classification: clientapplicationGroupsClassificationToTerraform(struct!.classification),
    description: cdktf.stringToTerraform(struct!.description),
    extended_access: cdktf.stringToTerraform(struct!.extendedAccess),
    hide_audit_trail: cdktf.booleanToTerraform(struct!.hideAuditTrail),
    name: cdktf.stringToTerraform(struct!.name),
    nested_under: clientapplicationGroupsNestedUnderToTerraform(struct!.nestedUnder),
    organizational_unit: clientapplicationGroupsOrganizationalUnitToTerraform(struct!.organizationalUnit),
    private_group: cdktf.booleanToTerraform(struct!.privateGroup),
    profile_administration: cdktf.booleanToTerraform(struct!.profileAdministration),
    record_trail: cdktf.booleanToTerraform(struct!.recordTrail),
    rotating_password_required: cdktf.booleanToTerraform(struct!.rotatingPasswordRequired),
    single_managed: cdktf.booleanToTerraform(struct!.singleManaged),
    vault_recovery: cdktf.stringToTerraform(struct!.vaultRecovery),
    vault_requires_activation: cdktf.booleanToTerraform(struct!.vaultRequiresActivation),
  }
}


export function clientapplicationGroupsToHclTerraform(struct?: ClientapplicationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_administration: {
      value: cdktf.booleanToHclTerraform(struct!.applicationAdministration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_config: {
      value: clientapplicationGroupsAuditConfigToHclTerraform(struct!.auditConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuditConfig",
    },
    authorizing_group_auditing: {
      value: clientapplicationGroupsAuthorizingGroupAuditingToHclTerraform(struct!.authorizingGroupAuditing),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupAuditing",
    },
    authorizing_group_delegation: {
      value: clientapplicationGroupsAuthorizingGroupDelegationToHclTerraform(struct!.authorizingGroupDelegation),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupDelegation",
    },
    authorizing_group_membership: {
      value: clientapplicationGroupsAuthorizingGroupMembershipToHclTerraform(struct!.authorizingGroupMembership),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupMembership",
    },
    authorizing_group_provisioning: {
      value: clientapplicationGroupsAuthorizingGroupProvisioningToHclTerraform(struct!.authorizingGroupProvisioning),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsAuthorizingGroupProvisioning",
    },
    classification: {
      value: clientapplicationGroupsClassificationToHclTerraform(struct!.classification),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsClassification",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_access: {
      value: cdktf.stringToHclTerraform(struct!.extendedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_audit_trail: {
      value: cdktf.booleanToHclTerraform(struct!.hideAuditTrail),
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
    nested_under: {
      value: clientapplicationGroupsNestedUnderToHclTerraform(struct!.nestedUnder),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsNestedUnder",
    },
    organizational_unit: {
      value: clientapplicationGroupsOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationGroupsOrganizationalUnit",
    },
    private_group: {
      value: cdktf.booleanToHclTerraform(struct!.privateGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_administration: {
      value: cdktf.booleanToHclTerraform(struct!.profileAdministration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_trail: {
      value: cdktf.booleanToHclTerraform(struct!.recordTrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotating_password_required: {
      value: cdktf.booleanToHclTerraform(struct!.rotatingPasswordRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    single_managed: {
      value: cdktf.booleanToHclTerraform(struct!.singleManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vault_recovery: {
      value: cdktf.stringToHclTerraform(struct!.vaultRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_requires_activation: {
      value: cdktf.booleanToHclTerraform(struct!.vaultRequiresActivation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationAdministration !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationAdministration = this._applicationAdministration;
    }
    if (this._auditConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditConfig = this._auditConfig?.internalValue;
    }
    if (this._authorizingGroupAuditing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingGroupAuditing = this._authorizingGroupAuditing?.internalValue;
    }
    if (this._authorizingGroupDelegation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingGroupDelegation = this._authorizingGroupDelegation?.internalValue;
    }
    if (this._authorizingGroupMembership?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingGroupMembership = this._authorizingGroupMembership?.internalValue;
    }
    if (this._authorizingGroupProvisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingGroupProvisioning = this._authorizingGroupProvisioning?.internalValue;
    }
    if (this._classification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extendedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAccess = this._extendedAccess;
    }
    if (this._hideAuditTrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideAuditTrail = this._hideAuditTrail;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nestedUnder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedUnder = this._nestedUnder?.internalValue;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    if (this._privateGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateGroup = this._privateGroup;
    }
    if (this._profileAdministration !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileAdministration = this._profileAdministration;
    }
    if (this._recordTrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTrail = this._recordTrail;
    }
    if (this._rotatingPasswordRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotatingPasswordRequired = this._rotatingPasswordRequired;
    }
    if (this._singleManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleManaged = this._singleManaged;
    }
    if (this._vaultRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultRecovery = this._vaultRecovery;
    }
    if (this._vaultRequiresActivation !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultRequiresActivation = this._vaultRequiresActivation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationAdministration = undefined;
      this._auditConfig.internalValue = undefined;
      this._authorizingGroupAuditing.internalValue = undefined;
      this._authorizingGroupDelegation.internalValue = undefined;
      this._authorizingGroupMembership.internalValue = undefined;
      this._authorizingGroupProvisioning.internalValue = undefined;
      this._classification.internalValue = undefined;
      this._description = undefined;
      this._extendedAccess = undefined;
      this._hideAuditTrail = undefined;
      this._name = undefined;
      this._nestedUnder.internalValue = undefined;
      this._organizationalUnit.internalValue = undefined;
      this._privateGroup = undefined;
      this._profileAdministration = undefined;
      this._recordTrail = undefined;
      this._rotatingPasswordRequired = undefined;
      this._singleManaged = undefined;
      this._vaultRecovery = undefined;
      this._vaultRequiresActivation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationAdministration = value.applicationAdministration;
      this._auditConfig.internalValue = value.auditConfig;
      this._authorizingGroupAuditing.internalValue = value.authorizingGroupAuditing;
      this._authorizingGroupDelegation.internalValue = value.authorizingGroupDelegation;
      this._authorizingGroupMembership.internalValue = value.authorizingGroupMembership;
      this._authorizingGroupProvisioning.internalValue = value.authorizingGroupProvisioning;
      this._classification.internalValue = value.classification;
      this._description = value.description;
      this._extendedAccess = value.extendedAccess;
      this._hideAuditTrail = value.hideAuditTrail;
      this._name = value.name;
      this._nestedUnder.internalValue = value.nestedUnder;
      this._organizationalUnit.internalValue = value.organizationalUnit;
      this._privateGroup = value.privateGroup;
      this._profileAdministration = value.profileAdministration;
      this._recordTrail = value.recordTrail;
      this._rotatingPasswordRequired = value.rotatingPasswordRequired;
      this._singleManaged = value.singleManaged;
      this._vaultRecovery = value.vaultRecovery;
      this._vaultRequiresActivation = value.vaultRequiresActivation;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // application_administration - computed: true, optional: true, required: false
  private _applicationAdministration?: boolean | cdktf.IResolvable; 
  public get applicationAdministration() {
    return this.getBooleanAttribute('application_administration');
  }
  public set applicationAdministration(value: boolean | cdktf.IResolvable) {
    this._applicationAdministration = value;
  }
  public resetApplicationAdministration() {
    this._applicationAdministration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationAdministrationInput() {
    return this._applicationAdministration;
  }

  // audit_config - computed: true, optional: true, required: false
  private _auditConfig = new ClientapplicationGroupsAuditConfigOutputReference(this, "audit_config");
  public get auditConfig() {
    return this._auditConfig;
  }
  public putAuditConfig(value: ClientapplicationGroupsAuditConfig) {
    this._auditConfig.internalValue = value;
  }
  public resetAuditConfig() {
    this._auditConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditConfigInput() {
    return this._auditConfig.internalValue;
  }

  // audit_requested - computed: true, optional: false, required: false
  public get auditRequested() {
    return this.getBooleanAttribute('audit_requested');
  }

  // authorizing_group_auditing - computed: true, optional: true, required: false
  private _authorizingGroupAuditing = new ClientapplicationGroupsAuthorizingGroupAuditingOutputReference(this, "authorizing_group_auditing");
  public get authorizingGroupAuditing() {
    return this._authorizingGroupAuditing;
  }
  public putAuthorizingGroupAuditing(value: ClientapplicationGroupsAuthorizingGroupAuditing) {
    this._authorizingGroupAuditing.internalValue = value;
  }
  public resetAuthorizingGroupAuditing() {
    this._authorizingGroupAuditing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupAuditingInput() {
    return this._authorizingGroupAuditing.internalValue;
  }

  // authorizing_group_delegation - computed: true, optional: true, required: false
  private _authorizingGroupDelegation = new ClientapplicationGroupsAuthorizingGroupDelegationOutputReference(this, "authorizing_group_delegation");
  public get authorizingGroupDelegation() {
    return this._authorizingGroupDelegation;
  }
  public putAuthorizingGroupDelegation(value: ClientapplicationGroupsAuthorizingGroupDelegation) {
    this._authorizingGroupDelegation.internalValue = value;
  }
  public resetAuthorizingGroupDelegation() {
    this._authorizingGroupDelegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupDelegationInput() {
    return this._authorizingGroupDelegation.internalValue;
  }

  // authorizing_group_membership - computed: true, optional: true, required: false
  private _authorizingGroupMembership = new ClientapplicationGroupsAuthorizingGroupMembershipOutputReference(this, "authorizing_group_membership");
  public get authorizingGroupMembership() {
    return this._authorizingGroupMembership;
  }
  public putAuthorizingGroupMembership(value: ClientapplicationGroupsAuthorizingGroupMembership) {
    this._authorizingGroupMembership.internalValue = value;
  }
  public resetAuthorizingGroupMembership() {
    this._authorizingGroupMembership.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupMembershipInput() {
    return this._authorizingGroupMembership.internalValue;
  }

  // authorizing_group_provisioning - computed: true, optional: true, required: false
  private _authorizingGroupProvisioning = new ClientapplicationGroupsAuthorizingGroupProvisioningOutputReference(this, "authorizing_group_provisioning");
  public get authorizingGroupProvisioning() {
    return this._authorizingGroupProvisioning;
  }
  public putAuthorizingGroupProvisioning(value: ClientapplicationGroupsAuthorizingGroupProvisioning) {
    this._authorizingGroupProvisioning.internalValue = value;
  }
  public resetAuthorizingGroupProvisioning() {
    this._authorizingGroupProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupProvisioningInput() {
    return this._authorizingGroupProvisioning.internalValue;
  }

  // authorizing_group_types - computed: true, optional: false, required: false
  public get authorizingGroupTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authorizing_group_types'));
  }

  // classification - computed: true, optional: true, required: false
  private _classification = new ClientapplicationGroupsClassificationOutputReference(this, "classification");
  public get classification() {
    return this._classification;
  }
  public putClassification(value: ClientapplicationGroupsClassification) {
    this._classification.internalValue = value;
  }
  public resetClassification() {
    this._classification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification.internalValue;
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

  // extended_access - computed: true, optional: true, required: false
  private _extendedAccess?: string; 
  public get extendedAccess() {
    return this.getStringAttribute('extended_access');
  }
  public set extendedAccess(value: string) {
    this._extendedAccess = value;
  }
  public resetExtendedAccess() {
    this._extendedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAccessInput() {
    return this._extendedAccess;
  }

  // hide_audit_trail - computed: true, optional: true, required: false
  private _hideAuditTrail?: boolean | cdktf.IResolvable; 
  public get hideAuditTrail() {
    return this.getBooleanAttribute('hide_audit_trail');
  }
  public set hideAuditTrail(value: boolean | cdktf.IResolvable) {
    this._hideAuditTrail = value;
  }
  public resetHideAuditTrail() {
    this._hideAuditTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideAuditTrailInput() {
    return this._hideAuditTrail;
  }

  // links - computed: true, optional: false, required: false
  private _links = new ClientapplicationGroupsLinksList(this, "links", false);
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

  // nested_under - computed: true, optional: true, required: false
  private _nestedUnder = new ClientapplicationGroupsNestedUnderOutputReference(this, "nested_under");
  public get nestedUnder() {
    return this._nestedUnder;
  }
  public putNestedUnder(value: ClientapplicationGroupsNestedUnder) {
    this._nestedUnder.internalValue = value;
  }
  public resetNestedUnder() {
    this._nestedUnder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedUnderInput() {
    return this._nestedUnder.internalValue;
  }

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new ClientapplicationGroupsOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: ClientapplicationGroupsOrganizationalUnit) {
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
  private _permissions = new ClientapplicationGroupsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // private_group - computed: true, optional: true, required: false
  private _privateGroup?: boolean | cdktf.IResolvable; 
  public get privateGroup() {
    return this.getBooleanAttribute('private_group');
  }
  public set privateGroup(value: boolean | cdktf.IResolvable) {
    this._privateGroup = value;
  }
  public resetPrivateGroup() {
    this._privateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateGroupInput() {
    return this._privateGroup;
  }

  // profile_administration - computed: true, optional: true, required: false
  private _profileAdministration?: boolean | cdktf.IResolvable; 
  public get profileAdministration() {
    return this.getBooleanAttribute('profile_administration');
  }
  public set profileAdministration(value: boolean | cdktf.IResolvable) {
    this._profileAdministration = value;
  }
  public resetProfileAdministration() {
    this._profileAdministration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAdministrationInput() {
    return this._profileAdministration;
  }

  // record_trail - computed: true, optional: true, required: false
  private _recordTrail?: boolean | cdktf.IResolvable; 
  public get recordTrail() {
    return this.getBooleanAttribute('record_trail');
  }
  public set recordTrail(value: boolean | cdktf.IResolvable) {
    this._recordTrail = value;
  }
  public resetRecordTrail() {
    this._recordTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTrailInput() {
    return this._recordTrail;
  }

  // rotating_password_required - computed: true, optional: true, required: false
  private _rotatingPasswordRequired?: boolean | cdktf.IResolvable; 
  public get rotatingPasswordRequired() {
    return this.getBooleanAttribute('rotating_password_required');
  }
  public set rotatingPasswordRequired(value: boolean | cdktf.IResolvable) {
    this._rotatingPasswordRequired = value;
  }
  public resetRotatingPasswordRequired() {
    this._rotatingPasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatingPasswordRequiredInput() {
    return this._rotatingPasswordRequired;
  }

  // single_managed - computed: true, optional: true, required: false
  private _singleManaged?: boolean | cdktf.IResolvable; 
  public get singleManaged() {
    return this.getBooleanAttribute('single_managed');
  }
  public set singleManaged(value: boolean | cdktf.IResolvable) {
    this._singleManaged = value;
  }
  public resetSingleManaged() {
    this._singleManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleManagedInput() {
    return this._singleManaged;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vault_recovery - computed: true, optional: true, required: false
  private _vaultRecovery?: string; 
  public get vaultRecovery() {
    return this.getStringAttribute('vault_recovery');
  }
  public set vaultRecovery(value: string) {
    this._vaultRecovery = value;
  }
  public resetVaultRecovery() {
    this._vaultRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRecoveryInput() {
    return this._vaultRecovery;
  }

  // vault_requires_activation - computed: true, optional: true, required: false
  private _vaultRequiresActivation?: boolean | cdktf.IResolvable; 
  public get vaultRequiresActivation() {
    return this.getBooleanAttribute('vault_requires_activation');
  }
  public set vaultRequiresActivation(value: boolean | cdktf.IResolvable) {
    this._vaultRequiresActivation = value;
  }
  public resetVaultRequiresActivation() {
    this._vaultRequiresActivation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRequiresActivationInput() {
    return this._vaultRequiresActivation;
  }
}

export class ClientapplicationGroupsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationGroups[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationGroupsOutputReference {
    return new ClientapplicationGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationLdapClientSharedSecretLinks {
}

export function clientapplicationLdapClientSharedSecretLinksToTerraform(struct?: ClientapplicationLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationLdapClientSharedSecretLinksToHclTerraform(struct?: ClientapplicationLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationLdapClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationLdapClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationLdapClientSharedSecretLinks | undefined) {
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

export class ClientapplicationLdapClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationLdapClientSharedSecretLinksOutputReference {
    return new ClientapplicationLdapClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationLdapClientSharedSecretPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationLdapClientSharedSecretPermissionsToTerraform(struct?: ClientapplicationLdapClientSharedSecretPermissions): any {
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


export function clientapplicationLdapClientSharedSecretPermissionsToHclTerraform(struct?: ClientapplicationLdapClientSharedSecretPermissions): any {
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

export class ClientapplicationLdapClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationLdapClientSharedSecretPermissions | undefined {
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

  public set internalValue(value: ClientapplicationLdapClientSharedSecretPermissions | undefined) {
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

export class ClientapplicationLdapClientSharedSecretPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationLdapClientSharedSecretPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationLdapClientSharedSecretPermissionsOutputReference {
    return new ClientapplicationLdapClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationLdapClientSharedSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#color Clientapplication#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationLdapClientSharedSecretToTerraform(struct?: ClientapplicationLdapClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationLdapClientSharedSecretToHclTerraform(struct?: ClientapplicationLdapClientSharedSecret): any {
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

export class ClientapplicationLdapClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationLdapClientSharedSecret | undefined {
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

  public set internalValue(value: ClientapplicationLdapClientSharedSecret | undefined) {
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
  private _links = new ClientapplicationLdapClientSharedSecretLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationLdapClientSharedSecretPermissionsList(this, "permissions", false);
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
export interface ClientapplicationLdapClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#client_certificate_uuid Clientapplication#client_certificate_uuid}
  */
  readonly clientCertificateUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#share_secret_in_vault Clientapplication#share_secret_in_vault}
  */
  readonly shareSecretInVault?: boolean | cdktf.IResolvable;
}

export function clientapplicationLdapClientToTerraform(struct?: ClientapplicationLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_uuid: cdktf.stringToTerraform(struct!.clientCertificateUuid),
    share_secret_in_vault: cdktf.booleanToTerraform(struct!.shareSecretInVault),
  }
}


export function clientapplicationLdapClientToHclTerraform(struct?: ClientapplicationLdapClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_uuid: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateUuid),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationLdapClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationLdapClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateUuid = this._clientCertificateUuid;
    }
    if (this._shareSecretInVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareSecretInVault = this._shareSecretInVault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationLdapClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificateUuid = undefined;
      this._shareSecretInVault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertificateUuid = value.clientCertificateUuid;
      this._shareSecretInVault = value.shareSecretInVault;
    }
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // client_certificate_uuid - computed: false, optional: true, required: false
  private _clientCertificateUuid?: string; 
  public get clientCertificateUuid() {
    return this.getStringAttribute('client_certificate_uuid');
  }
  public set clientCertificateUuid(value: string) {
    this._clientCertificateUuid = value;
  }
  public resetClientCertificateUuid() {
    this._clientCertificateUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateUuidInput() {
    return this._clientCertificateUuid;
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
  private _sharedSecret = new ClientapplicationLdapClientSharedSecretOutputReference(this, "shared_secret");
  public get sharedSecret() {
    return this._sharedSecret;
  }
}
export interface ClientapplicationLinks {
}

export function clientapplicationLinksToTerraform(struct?: ClientapplicationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationLinksToHclTerraform(struct?: ClientapplicationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationLinks | undefined) {
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

export class ClientapplicationLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationLinksOutputReference {
    return new ClientapplicationLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationOauth2ClientAccountPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationOauth2ClientAccountPermissionsToTerraform(struct?: ClientapplicationOauth2ClientAccountPermissions): any {
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


export function clientapplicationOauth2ClientAccountPermissionsToHclTerraform(struct?: ClientapplicationOauth2ClientAccountPermissions): any {
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

export class ClientapplicationOauth2ClientAccountPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationOauth2ClientAccountPermissions | undefined {
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

  public set internalValue(value: ClientapplicationOauth2ClientAccountPermissions | undefined) {
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

export class ClientapplicationOauth2ClientAccountPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationOauth2ClientAccountPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationOauth2ClientAccountPermissionsOutputReference {
    return new ClientapplicationOauth2ClientAccountPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationOauth2ClientAttributesAttributeDefinitionLinks {
}

export function clientapplicationOauth2ClientAttributesAttributeDefinitionLinksToTerraform(struct?: ClientapplicationOauth2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationOauth2ClientAttributesAttributeDefinitionLinksToHclTerraform(struct?: ClientapplicationOauth2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationOauth2ClientAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationOauth2ClientAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationOauth2ClientAttributesAttributeDefinitionLinks | undefined) {
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

export class ClientapplicationOauth2ClientAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationOauth2ClientAttributesAttributeDefinitionLinksOutputReference {
    return new ClientapplicationOauth2ClientAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationOauth2ClientAttributesAttributeDefinitionPermissionsToTerraform(struct?: ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissions): any {
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


export function clientapplicationOauth2ClientAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissions): any {
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

export class ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissions | undefined {
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

  public set internalValue(value: ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissions | undefined) {
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

export class ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference {
    return new ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationOauth2ClientAttributesAttributeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#format Clientapplication#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#freely_useable Clientapplication#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#list Clientapplication#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#required Clientapplication#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#unique Clientapplication#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function clientapplicationOauth2ClientAttributesAttributeDefinitionToTerraform(struct?: ClientapplicationOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
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


export function clientapplicationOauth2ClientAttributesAttributeDefinitionToHclTerraform(struct?: ClientapplicationOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
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

export class ClientapplicationOauth2ClientAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationOauth2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationOauth2ClientAttributesAttributeDefinitionLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationOauth2ClientAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
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
export interface ClientapplicationOauth2ClientAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#attribute_definition Clientapplication#attribute_definition}
  */
  readonly attributeDefinition?: ClientapplicationOauth2ClientAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#script Clientapplication#script}
  */
  readonly script?: string;
}

export function clientapplicationOauth2ClientAttributesToTerraform(struct?: ClientapplicationOauth2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definition: clientapplicationOauth2ClientAttributesAttributeDefinitionToTerraform(struct!.attributeDefinition),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function clientapplicationOauth2ClientAttributesToHclTerraform(struct?: ClientapplicationOauth2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definition: {
      value: clientapplicationOauth2ClientAttributesAttributeDefinitionToHclTerraform(struct!.attributeDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationOauth2ClientAttributesAttributeDefinition",
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

export class ClientapplicationOauth2ClientAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationOauth2ClientAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationOauth2ClientAttributes | cdktf.IResolvable | undefined) {
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
  private _attributeDefinition = new ClientapplicationOauth2ClientAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }
  public putAttributeDefinition(value: ClientapplicationOauth2ClientAttributesAttributeDefinition) {
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

export class ClientapplicationOauth2ClientAttributesList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationOauth2ClientAttributes[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationOauth2ClientAttributesOutputReference {
    return new ClientapplicationOauth2ClientAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationOauth2ClientSharedSecretLinks {
}

export function clientapplicationOauth2ClientSharedSecretLinksToTerraform(struct?: ClientapplicationOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationOauth2ClientSharedSecretLinksToHclTerraform(struct?: ClientapplicationOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationOauth2ClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationOauth2ClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationOauth2ClientSharedSecretLinks | undefined) {
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

export class ClientapplicationOauth2ClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationOauth2ClientSharedSecretLinksOutputReference {
    return new ClientapplicationOauth2ClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationOauth2ClientSharedSecretPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationOauth2ClientSharedSecretPermissionsToTerraform(struct?: ClientapplicationOauth2ClientSharedSecretPermissions): any {
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


export function clientapplicationOauth2ClientSharedSecretPermissionsToHclTerraform(struct?: ClientapplicationOauth2ClientSharedSecretPermissions): any {
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

export class ClientapplicationOauth2ClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationOauth2ClientSharedSecretPermissions | undefined {
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

  public set internalValue(value: ClientapplicationOauth2ClientSharedSecretPermissions | undefined) {
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

export class ClientapplicationOauth2ClientSharedSecretPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationOauth2ClientSharedSecretPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationOauth2ClientSharedSecretPermissionsOutputReference {
    return new ClientapplicationOauth2ClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationOauth2ClientSharedSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#color Clientapplication#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
}

export function clientapplicationOauth2ClientSharedSecretToTerraform(struct?: ClientapplicationOauth2ClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clientapplicationOauth2ClientSharedSecretToHclTerraform(struct?: ClientapplicationOauth2ClientSharedSecret): any {
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

export class ClientapplicationOauth2ClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationOauth2ClientSharedSecret | undefined {
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

  public set internalValue(value: ClientapplicationOauth2ClientSharedSecret | undefined) {
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
  private _links = new ClientapplicationOauth2ClientSharedSecretLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationOauth2ClientSharedSecretPermissionsList(this, "permissions", false);
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
export interface ClientapplicationOauth2Client {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#attributes Clientapplication#attributes}
  */
  readonly attributes?: ClientapplicationOauth2ClientAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#callback_uri Clientapplication#callback_uri}
  */
  readonly callbackUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#debug_mode Clientapplication#debug_mode}
  */
  readonly debugMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#id_token_claims Clientapplication#id_token_claims}
  */
  readonly idTokenClaims?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#initiate_login_uri Clientapplication#initiate_login_uri}
  */
  readonly initiateLoginUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#profile Clientapplication#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#resource_uris Clientapplication#resource_uris}
  */
  readonly resourceUris?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#share_secret_in_vault Clientapplication#share_secret_in_vault}
  */
  readonly shareSecretInVault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#show_landing_page Clientapplication#show_landing_page}
  */
  readonly showLandingPage?: boolean | cdktf.IResolvable;
}

export function clientapplicationOauth2ClientToTerraform(struct?: ClientapplicationOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(clientapplicationOauth2ClientAttributesToTerraform, false)(struct!.attributes),
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


export function clientapplicationOauth2ClientToHclTerraform(struct?: ClientapplicationOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(clientapplicationOauth2ClientAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "ClientapplicationOauth2ClientAttributesList",
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

export class ClientapplicationOauth2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationOauth2Client | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationOauth2Client | cdktf.IResolvable | undefined) {
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
  private _accountPermissions = new ClientapplicationOauth2ClientAccountPermissionsList(this, "account_permissions", false);
  public get accountPermissions() {
    return this._accountPermissions;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new ClientapplicationOauth2ClientAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ClientapplicationOauth2ClientAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // callback_uri - computed: false, optional: true, required: false
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

  // id_token_claims - computed: false, optional: true, required: false
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

  // initiate_login_uri - computed: false, optional: true, required: false
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

  // resource_uris - computed: false, optional: true, required: false
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
  private _sharedSecret = new ClientapplicationOauth2ClientSharedSecretOutputReference(this, "shared_secret");
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
export interface ClientapplicationOrganizationalUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#uuid Clientapplication#uuid}
  */
  readonly uuid: string;
}

export function clientapplicationOrganizationalUnitsToTerraform(struct?: ClientapplicationOrganizationalUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function clientapplicationOrganizationalUnitsToHclTerraform(struct?: ClientapplicationOrganizationalUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ClientapplicationOrganizationalUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationOrganizationalUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationOrganizationalUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}

export class ClientapplicationOrganizationalUnitsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationOrganizationalUnits[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationOrganizationalUnitsOutputReference {
    return new ClientapplicationOrganizationalUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationPermissionsToTerraform(struct?: ClientapplicationPermissions): any {
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


export function clientapplicationPermissionsToHclTerraform(struct?: ClientapplicationPermissions): any {
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

export class ClientapplicationPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationPermissions | undefined {
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

  public set internalValue(value: ClientapplicationPermissions | undefined) {
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

export class ClientapplicationPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationPermissionsOutputReference {
    return new ClientapplicationPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationSaml2ClientAttributesAttributeDefinitionLinks {
}

export function clientapplicationSaml2ClientAttributesAttributeDefinitionLinksToTerraform(struct?: ClientapplicationSaml2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationSaml2ClientAttributesAttributeDefinitionLinksToHclTerraform(struct?: ClientapplicationSaml2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationSaml2ClientAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationSaml2ClientAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationSaml2ClientAttributesAttributeDefinitionLinks | undefined) {
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

export class ClientapplicationSaml2ClientAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationSaml2ClientAttributesAttributeDefinitionLinksOutputReference {
    return new ClientapplicationSaml2ClientAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationSaml2ClientAttributesAttributeDefinitionPermissionsToTerraform(struct?: ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissions): any {
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


export function clientapplicationSaml2ClientAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissions): any {
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

export class ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissions | undefined {
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

  public set internalValue(value: ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissions | undefined) {
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

export class ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference {
    return new ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationSaml2ClientAttributesAttributeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#format Clientapplication#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#freely_useable Clientapplication#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#list Clientapplication#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#required Clientapplication#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#unique Clientapplication#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function clientapplicationSaml2ClientAttributesAttributeDefinitionToTerraform(struct?: ClientapplicationSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
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


export function clientapplicationSaml2ClientAttributesAttributeDefinitionToHclTerraform(struct?: ClientapplicationSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable): any {
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

export class ClientapplicationSaml2ClientAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationSaml2ClientAttributesAttributeDefinition | cdktf.IResolvable | undefined) {
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
  private _links = new ClientapplicationSaml2ClientAttributesAttributeDefinitionLinksList(this, "links", false);
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
  private _permissions = new ClientapplicationSaml2ClientAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
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
export interface ClientapplicationSaml2ClientAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#attribute_definition Clientapplication#attribute_definition}
  */
  readonly attributeDefinition?: ClientapplicationSaml2ClientAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#name Clientapplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#script Clientapplication#script}
  */
  readonly script?: string;
}

export function clientapplicationSaml2ClientAttributesToTerraform(struct?: ClientapplicationSaml2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definition: clientapplicationSaml2ClientAttributesAttributeDefinitionToTerraform(struct!.attributeDefinition),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function clientapplicationSaml2ClientAttributesToHclTerraform(struct?: ClientapplicationSaml2ClientAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definition: {
      value: clientapplicationSaml2ClientAttributesAttributeDefinitionToHclTerraform(struct!.attributeDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationSaml2ClientAttributesAttributeDefinition",
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

export class ClientapplicationSaml2ClientAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationSaml2ClientAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationSaml2ClientAttributes | cdktf.IResolvable | undefined) {
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
  private _attributeDefinition = new ClientapplicationSaml2ClientAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }
  public putAttributeDefinition(value: ClientapplicationSaml2ClientAttributesAttributeDefinition) {
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

export class ClientapplicationSaml2ClientAttributesList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationSaml2ClientAttributes[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationSaml2ClientAttributesOutputReference {
    return new ClientapplicationSaml2ClientAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationSaml2Client {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#attributes Clientapplication#attributes}
  */
  readonly attributes?: ClientapplicationSaml2ClientAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#metadata Clientapplication#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#metadata_url Clientapplication#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#subject_format Clientapplication#subject_format}
  */
  readonly subjectFormat: string;
}

export function clientapplicationSaml2ClientToTerraform(struct?: ClientapplicationSaml2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(clientapplicationSaml2ClientAttributesToTerraform, false)(struct!.attributes),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    subject_format: cdktf.stringToTerraform(struct!.subjectFormat),
  }
}


export function clientapplicationSaml2ClientToHclTerraform(struct?: ClientapplicationSaml2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(clientapplicationSaml2ClientAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "ClientapplicationSaml2ClientAttributesList",
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

export class ClientapplicationSaml2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationSaml2Client | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClientapplicationSaml2Client | cdktf.IResolvable | undefined) {
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
  private _attributes = new ClientapplicationSaml2ClientAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ClientapplicationSaml2ClientAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
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

  // metadata_url - computed: false, optional: true, required: false
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

  // subject_format - computed: false, optional: false, required: true
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
export interface ClientapplicationSecret {
}

export function clientapplicationSecretToTerraform(struct?: ClientapplicationSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationSecretToHclTerraform(struct?: ClientapplicationSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface ClientapplicationTileLinks {
}

export function clientapplicationTileLinksToTerraform(struct?: ClientapplicationTileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientapplicationTileLinksToHclTerraform(struct?: ClientapplicationTileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientapplicationTileLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationTileLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationTileLinks | undefined) {
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

export class ClientapplicationTileLinksList extends cdktf.ComplexList {

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
  public get(index: number): ClientapplicationTileLinksOutputReference {
    return new ClientapplicationTileLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationTileManualLaunchpadTile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#group_uuid Clientapplication#group_uuid}
  */
  readonly groupUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#title Clientapplication#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#uri Clientapplication#uri}
  */
  readonly uri: string;
}

export function clientapplicationTileManualLaunchpadTileToTerraform(struct?: ClientapplicationTileManualLaunchpadTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_uuid: cdktf.stringToTerraform(struct!.groupUuid),
    title: cdktf.stringToTerraform(struct!.title),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function clientapplicationTileManualLaunchpadTileToHclTerraform(struct?: ClientapplicationTileManualLaunchpadTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_uuid: {
      value: cdktf.stringToHclTerraform(struct!.groupUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationTileManualLaunchpadTileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationTileManualLaunchpadTile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupUuid = this._groupUuid;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationTileManualLaunchpadTile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupUuid = undefined;
      this._title = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupUuid = value.groupUuid;
      this._title = value.title;
      this._uri = value.uri;
    }
  }

  // group_uuid - computed: false, optional: false, required: true
  private _groupUuid?: string; 
  public get groupUuid() {
    return this.getStringAttribute('group_uuid');
  }
  public set groupUuid(value: string) {
    this._groupUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupUuidInput() {
    return this._groupUuid;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ClientapplicationTilePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#full Clientapplication#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#instances Clientapplication#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#operations Clientapplication#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#type_escaped Clientapplication#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function clientapplicationTilePermissionsToTerraform(struct?: ClientapplicationTilePermissions): any {
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


export function clientapplicationTilePermissionsToHclTerraform(struct?: ClientapplicationTilePermissions): any {
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

export class ClientapplicationTilePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientapplicationTilePermissions | undefined {
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

  public set internalValue(value: ClientapplicationTilePermissions | undefined) {
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

export class ClientapplicationTilePermissionsList extends cdktf.ComplexList {
  public internalValue? : ClientapplicationTilePermissions[] | cdktf.IResolvable

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
  public get(index: number): ClientapplicationTilePermissionsOutputReference {
    return new ClientapplicationTilePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientapplicationTileSsoApplicationLaunchpadTile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#application_uuid Clientapplication#application_uuid}
  */
  readonly applicationUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#uri Clientapplication#uri}
  */
  readonly uri?: string;
}

export function clientapplicationTileSsoApplicationLaunchpadTileToTerraform(struct?: ClientapplicationTileSsoApplicationLaunchpadTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_uuid: cdktf.stringToTerraform(struct!.applicationUuid),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function clientapplicationTileSsoApplicationLaunchpadTileToHclTerraform(struct?: ClientapplicationTileSsoApplicationLaunchpadTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_uuid: {
      value: cdktf.stringToHclTerraform(struct!.applicationUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationTileSsoApplicationLaunchpadTileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationTileSsoApplicationLaunchpadTile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationUuid = this._applicationUuid;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationTileSsoApplicationLaunchpadTile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationUuid = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationUuid = value.applicationUuid;
      this._uri = value.uri;
    }
  }

  // application_uuid - computed: true, optional: true, required: false
  private _applicationUuid?: string; 
  public get applicationUuid() {
    return this.getStringAttribute('application_uuid');
  }
  public set applicationUuid(value: string) {
    this._applicationUuid = value;
  }
  public resetApplicationUuid() {
    this._applicationUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationUuidInput() {
    return this._applicationUuid;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ClientapplicationTileVaultRecordLaunchpadTile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#vault_record_uuid Clientapplication#vault_record_uuid}
  */
  readonly vaultRecordUuid?: string;
}

export function clientapplicationTileVaultRecordLaunchpadTileToTerraform(struct?: ClientapplicationTileVaultRecordLaunchpadTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vault_record_uuid: cdktf.stringToTerraform(struct!.vaultRecordUuid),
  }
}


export function clientapplicationTileVaultRecordLaunchpadTileToHclTerraform(struct?: ClientapplicationTileVaultRecordLaunchpadTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vault_record_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vaultRecordUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationTileVaultRecordLaunchpadTileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationTileVaultRecordLaunchpadTile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vaultRecordUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultRecordUuid = this._vaultRecordUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationTileVaultRecordLaunchpadTile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vaultRecordUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vaultRecordUuid = value.vaultRecordUuid;
    }
  }

  // vault_record_uuid - computed: true, optional: true, required: false
  private _vaultRecordUuid?: string; 
  public get vaultRecordUuid() {
    return this.getStringAttribute('vault_record_uuid');
  }
  public set vaultRecordUuid(value: string) {
    this._vaultRecordUuid = value;
  }
  public resetVaultRecordUuid() {
    this._vaultRecordUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRecordUuidInput() {
    return this._vaultRecordUuid;
  }
}
export interface ClientapplicationTile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#identicon_code Clientapplication#identicon_code}
  */
  readonly identiconCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#logo Clientapplication#logo}
  */
  readonly logo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#manual_launchpad_tile Clientapplication#manual_launchpad_tile}
  */
  readonly manualLaunchpadTile?: ClientapplicationTileManualLaunchpadTile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#sso_application_launchpad_tile Clientapplication#sso_application_launchpad_tile}
  */
  readonly ssoApplicationLaunchpadTile?: ClientapplicationTileSsoApplicationLaunchpadTile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#vault_record_launchpad_tile Clientapplication#vault_record_launchpad_tile}
  */
  readonly vaultRecordLaunchpadTile?: ClientapplicationTileVaultRecordLaunchpadTile;
}

export function clientapplicationTileToTerraform(struct?: ClientapplicationTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identicon_code: cdktf.numberToTerraform(struct!.identiconCode),
    logo: cdktf.stringToTerraform(struct!.logo),
    manual_launchpad_tile: clientapplicationTileManualLaunchpadTileToTerraform(struct!.manualLaunchpadTile),
    sso_application_launchpad_tile: clientapplicationTileSsoApplicationLaunchpadTileToTerraform(struct!.ssoApplicationLaunchpadTile),
    vault_record_launchpad_tile: clientapplicationTileVaultRecordLaunchpadTileToTerraform(struct!.vaultRecordLaunchpadTile),
  }
}


export function clientapplicationTileToHclTerraform(struct?: ClientapplicationTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identicon_code: {
      value: cdktf.numberToHclTerraform(struct!.identiconCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_launchpad_tile: {
      value: clientapplicationTileManualLaunchpadTileToHclTerraform(struct!.manualLaunchpadTile),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationTileManualLaunchpadTile",
    },
    sso_application_launchpad_tile: {
      value: clientapplicationTileSsoApplicationLaunchpadTileToHclTerraform(struct!.ssoApplicationLaunchpadTile),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationTileSsoApplicationLaunchpadTile",
    },
    vault_record_launchpad_tile: {
      value: clientapplicationTileVaultRecordLaunchpadTileToHclTerraform(struct!.vaultRecordLaunchpadTile),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientapplicationTileVaultRecordLaunchpadTile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientapplicationTileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientapplicationTile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identiconCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.identiconCode = this._identiconCode;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._manualLaunchpadTile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualLaunchpadTile = this._manualLaunchpadTile?.internalValue;
    }
    if (this._ssoApplicationLaunchpadTile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoApplicationLaunchpadTile = this._ssoApplicationLaunchpadTile?.internalValue;
    }
    if (this._vaultRecordLaunchpadTile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultRecordLaunchpadTile = this._vaultRecordLaunchpadTile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientapplicationTile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identiconCode = undefined;
      this._logo = undefined;
      this._manualLaunchpadTile.internalValue = undefined;
      this._ssoApplicationLaunchpadTile.internalValue = undefined;
      this._vaultRecordLaunchpadTile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identiconCode = value.identiconCode;
      this._logo = value.logo;
      this._manualLaunchpadTile.internalValue = value.manualLaunchpadTile;
      this._ssoApplicationLaunchpadTile.internalValue = value.ssoApplicationLaunchpadTile;
      this._vaultRecordLaunchpadTile.internalValue = value.vaultRecordLaunchpadTile;
    }
  }

  // identicon_code - computed: true, optional: true, required: false
  private _identiconCode?: number; 
  public get identiconCode() {
    return this.getNumberAttribute('identicon_code');
  }
  public set identiconCode(value: number) {
    this._identiconCode = value;
  }
  public resetIdenticonCode() {
    this._identiconCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identiconCodeInput() {
    return this._identiconCode;
  }

  // launchpad_launchpad_tile_type - computed: true, optional: false, required: false
  public get launchpadLaunchpadTileType() {
    return this.getStringAttribute('launchpad_launchpad_tile_type');
  }

  // links - computed: true, optional: false, required: false
  private _links = new ClientapplicationTileLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // logo - computed: true, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // manual_launchpad_tile - computed: false, optional: true, required: false
  private _manualLaunchpadTile = new ClientapplicationTileManualLaunchpadTileOutputReference(this, "manual_launchpad_tile");
  public get manualLaunchpadTile() {
    return this._manualLaunchpadTile;
  }
  public putManualLaunchpadTile(value: ClientapplicationTileManualLaunchpadTile) {
    this._manualLaunchpadTile.internalValue = value;
  }
  public resetManualLaunchpadTile() {
    this._manualLaunchpadTile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualLaunchpadTileInput() {
    return this._manualLaunchpadTile.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ClientapplicationTilePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // sso_application_launchpad_tile - computed: false, optional: true, required: false
  private _ssoApplicationLaunchpadTile = new ClientapplicationTileSsoApplicationLaunchpadTileOutputReference(this, "sso_application_launchpad_tile");
  public get ssoApplicationLaunchpadTile() {
    return this._ssoApplicationLaunchpadTile;
  }
  public putSsoApplicationLaunchpadTile(value: ClientapplicationTileSsoApplicationLaunchpadTile) {
    this._ssoApplicationLaunchpadTile.internalValue = value;
  }
  public resetSsoApplicationLaunchpadTile() {
    this._ssoApplicationLaunchpadTile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoApplicationLaunchpadTileInput() {
    return this._ssoApplicationLaunchpadTile.internalValue;
  }

  // vault_record_launchpad_tile - computed: false, optional: true, required: false
  private _vaultRecordLaunchpadTile = new ClientapplicationTileVaultRecordLaunchpadTileOutputReference(this, "vault_record_launchpad_tile");
  public get vaultRecordLaunchpadTile() {
    return this._vaultRecordLaunchpadTile;
  }
  public putVaultRecordLaunchpadTile(value: ClientapplicationTileVaultRecordLaunchpadTile) {
    this._vaultRecordLaunchpadTile.internalValue = value;
  }
  public resetVaultRecordLaunchpadTile() {
    this._vaultRecordLaunchpadTile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRecordLaunchpadTileInput() {
    return this._vaultRecordLaunchpadTile.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication keyhub_clientapplication}
*/
export class Clientapplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub_clientapplication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clientapplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clientapplication to import
  * @param importFromId The id of the existing Clientapplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clientapplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub_clientapplication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/clientapplication keyhub_clientapplication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientapplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ClientapplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'keyhub_clientapplication',
      terraformGeneratorMetadata: {
        providerName: 'keyhub',
        providerVersion: '2.45.0',
        providerVersionConstraint: '2.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessprofileclients.internalValue = config.accessprofileclients;
    this._additional = config.additional;
    this._clientId = config.clientId;
    this._deleteTile = config.deleteTile;
    this._generateSecret.internalValue = config.generateSecret;
    this._groupclients.internalValue = config.groupclients;
    this._ldapClient.internalValue = config.ldapClient;
    this._name = config.name;
    this._oauth2Client.internalValue = config.oauth2Client;
    this._ownerUuid = config.ownerUuid;
    this._saml2Client.internalValue = config.saml2Client;
    this._scopes = config.scopes;
    this._technicalAdministratorUuid = config.technicalAdministratorUuid;
    this._tile.internalValue = config.tile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessprofileclients - computed: false, optional: true, required: false
  private _accessprofileclients = new ClientapplicationAccessprofileclientsList(this, "accessprofileclients", false);
  public get accessprofileclients() {
    return this._accessprofileclients;
  }
  public putAccessprofileclients(value: ClientapplicationAccessprofileclients[] | cdktf.IResolvable) {
    this._accessprofileclients.internalValue = value;
  }
  public resetAccessprofileclients() {
    this._accessprofileclients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessprofileclientsInput() {
    return this._accessprofileclients.internalValue;
  }

  // additional - computed: false, optional: true, required: false
  private _additional?: string[]; 
  public get additional() {
    return this.getListAttribute('additional');
  }
  public set additional(value: string[]) {
    this._additional = value;
  }
  public resetAdditional() {
    this._additional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInput() {
    return this._additional;
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new ClientapplicationAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
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

  // delete_tile - computed: false, optional: true, required: false
  private _deleteTile?: boolean | cdktf.IResolvable; 
  public get deleteTile() {
    return this.getBooleanAttribute('delete_tile');
  }
  public set deleteTile(value: boolean | cdktf.IResolvable) {
    this._deleteTile = value;
  }
  public resetDeleteTile() {
    this._deleteTile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTileInput() {
    return this._deleteTile;
  }

  // generate_secret - computed: false, optional: true, required: false
  private _generateSecret = new ClientapplicationGenerateSecretOutputReference(this, "generate_secret");
  public get generateSecret() {
    return this._generateSecret;
  }
  public putGenerateSecret(value: ClientapplicationGenerateSecret) {
    this._generateSecret.internalValue = value;
  }
  public resetGenerateSecret() {
    this._generateSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSecretInput() {
    return this._generateSecret.internalValue;
  }

  // groupclients - computed: false, optional: true, required: false
  private _groupclients = new ClientapplicationGroupclientsList(this, "groupclients", false);
  public get groupclients() {
    return this._groupclients;
  }
  public putGroupclients(value: ClientapplicationGroupclients[] | cdktf.IResolvable) {
    this._groupclients.internalValue = value;
  }
  public resetGroupclients() {
    this._groupclients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupclientsInput() {
    return this._groupclients.internalValue;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new ClientapplicationGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // ldap_client - computed: false, optional: true, required: false
  private _ldapClient = new ClientapplicationLdapClientOutputReference(this, "ldap_client");
  public get ldapClient() {
    return this._ldapClient;
  }
  public putLdapClient(value: ClientapplicationLdapClient) {
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
  private _links = new ClientapplicationLinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // oauth2_client - computed: false, optional: true, required: false
  private _oauth2Client = new ClientapplicationOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }
  public putOauth2Client(value: ClientapplicationOauth2Client) {
    this._oauth2Client.internalValue = value;
  }
  public resetOauth2Client() {
    this._oauth2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientInput() {
    return this._oauth2Client.internalValue;
  }

  // organizational_units - computed: true, optional: false, required: false
  private _organizationalUnits = new ClientapplicationOrganizationalUnitsList(this, "organizational_units", false);
  public get organizationalUnits() {
    return this._organizationalUnits;
  }

  // owner_uuid - computed: true, optional: true, required: false
  private _ownerUuid?: string; 
  public get ownerUuid() {
    return this.getStringAttribute('owner_uuid');
  }
  public set ownerUuid(value: string) {
    this._ownerUuid = value;
  }
  public resetOwnerUuid() {
    this._ownerUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUuidInput() {
    return this._ownerUuid;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ClientapplicationPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // saml2_client - computed: false, optional: true, required: false
  private _saml2Client = new ClientapplicationSaml2ClientOutputReference(this, "saml2_client");
  public get saml2Client() {
    return this._saml2Client;
  }
  public putSaml2Client(value: ClientapplicationSaml2Client) {
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

  // secret - computed: true, optional: false, required: false
  private _secret = new ClientapplicationSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }

  // sso_application - computed: true, optional: false, required: false
  public get ssoApplication() {
    return this.getBooleanAttribute('sso_application');
  }

  // technical_administrator_uuid - computed: true, optional: true, required: false
  private _technicalAdministratorUuid?: string; 
  public get technicalAdministratorUuid() {
    return this.getStringAttribute('technical_administrator_uuid');
  }
  public set technicalAdministratorUuid(value: string) {
    this._technicalAdministratorUuid = value;
  }
  public resetTechnicalAdministratorUuid() {
    this._technicalAdministratorUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalAdministratorUuidInput() {
    return this._technicalAdministratorUuid;
  }

  // tile - computed: false, optional: true, required: false
  private _tile = new ClientapplicationTileOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }
  public putTile(value: ClientapplicationTile) {
    this._tile.internalValue = value;
  }
  public resetTile() {
    this._tile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileInput() {
    return this._tile.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vault_record_count - computed: true, optional: false, required: false
  public get vaultRecordCount() {
    return this.getNumberAttribute('vault_record_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessprofileclients: cdktf.listMapper(clientapplicationAccessprofileclientsToTerraform, false)(this._accessprofileclients.internalValue),
      additional: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additional),
      client_id: cdktf.stringToTerraform(this._clientId),
      delete_tile: cdktf.booleanToTerraform(this._deleteTile),
      generate_secret: clientapplicationGenerateSecretToTerraform(this._generateSecret.internalValue),
      groupclients: cdktf.listMapper(clientapplicationGroupclientsToTerraform, false)(this._groupclients.internalValue),
      ldap_client: clientapplicationLdapClientToTerraform(this._ldapClient.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oauth2_client: clientapplicationOauth2ClientToTerraform(this._oauth2Client.internalValue),
      owner_uuid: cdktf.stringToTerraform(this._ownerUuid),
      saml2_client: clientapplicationSaml2ClientToTerraform(this._saml2Client.internalValue),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      technical_administrator_uuid: cdktf.stringToTerraform(this._technicalAdministratorUuid),
      tile: clientapplicationTileToTerraform(this._tile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessprofileclients: {
        value: cdktf.listMapperHcl(clientapplicationAccessprofileclientsToHclTerraform, false)(this._accessprofileclients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientapplicationAccessprofileclientsList",
      },
      additional: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additional),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_tile: {
        value: cdktf.booleanToHclTerraform(this._deleteTile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generate_secret: {
        value: clientapplicationGenerateSecretToHclTerraform(this._generateSecret.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClientapplicationGenerateSecret",
      },
      groupclients: {
        value: cdktf.listMapperHcl(clientapplicationGroupclientsToHclTerraform, false)(this._groupclients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientapplicationGroupclientsList",
      },
      ldap_client: {
        value: clientapplicationLdapClientToHclTerraform(this._ldapClient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClientapplicationLdapClient",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client: {
        value: clientapplicationOauth2ClientToHclTerraform(this._oauth2Client.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClientapplicationOauth2Client",
      },
      owner_uuid: {
        value: cdktf.stringToHclTerraform(this._ownerUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_client: {
        value: clientapplicationSaml2ClientToHclTerraform(this._saml2Client.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClientapplicationSaml2Client",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      technical_administrator_uuid: {
        value: cdktf.stringToHclTerraform(this._technicalAdministratorUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tile: {
        value: clientapplicationTileToHclTerraform(this._tile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClientapplicationTile",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
