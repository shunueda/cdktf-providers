// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeymanagerSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Metadata provided by a user or system for informational purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#algorithm KeymanagerSecret#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Metadata provided by a user or system for informational purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#bit_length KeymanagerSecret#bit_length}
  */
  readonly bitLength?: number;
  /**
  * The expiration time of the secret in the RFC3339 timestamp format (e.g. `2019-03-09T12:58:49Z`). If omitted, a secret will never expire. Changing this creates a new secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#expiration KeymanagerSecret#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#id KeymanagerSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Additional Metadata for the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#metadata KeymanagerSecret#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Metadata provided by a user or system for informational purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#mode KeymanagerSecret#mode}
  */
  readonly mode?: string;
  /**
  * Human-readable name for the Secret. Does not have to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#name KeymanagerSecret#name}
  */
  readonly name?: string;
  /**
  * The secret's data to be stored. **payload\_content\_type** must also be supplied if **payload** is included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#payload KeymanagerSecret#payload}
  */
  readonly payload?: string;
  /**
  * (required if **payload** is encoded) The encoding used for the payload to be able to include it in the JSON request. Must be either `base64` or `binary`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#payload_content_encoding KeymanagerSecret#payload_content_encoding}
  */
  readonly payloadContentEncoding?: string;
  /**
  * (required if **payload** is included) The media type for the content of the payload. Must be one of `text/plain`, `text/plain;charset=utf-8`, `text/plain; charset=utf-8`, `application/octet-stream`, `application/pkcs8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#payload_content_type KeymanagerSecret#payload_content_type}
  */
  readonly payloadContentType?: string;
  /**
  * The region in which to obtain the KeyManager client. A KeyManager client is needed to create a secret. If omitted, the `region` argument of the provider is used. Changing this creates a new V1 secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#region KeymanagerSecret#region}
  */
  readonly region?: string;
  /**
  * Used to indicate the type of secret being stored. For more information see [Secret types](https://docs.openstack.org/barbican/latest/api/reference/secret_types.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#secret_type KeymanagerSecret#secret_type}
  */
  readonly secretType?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#acl KeymanagerSecret#acl}
  */
  readonly acl?: KeymanagerSecretAcl;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#timeouts KeymanagerSecret#timeouts}
  */
  readonly timeouts?: KeymanagerSecretTimeouts;
}
export interface KeymanagerSecretAclRead {
  /**
  * Whether the container is accessible project wide. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#project_access KeymanagerSecret#project_access}
  */
  readonly projectAccess?: boolean | cdktf.IResolvable;
  /**
  * The list of user IDs, which are allowed to access the container, when `project_access` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#users KeymanagerSecret#users}
  */
  readonly users?: string[];
}

export function keymanagerSecretAclReadToTerraform(struct?: KeymanagerSecretAclReadOutputReference | KeymanagerSecretAclRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_access: cdktf.booleanToTerraform(struct!.projectAccess),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function keymanagerSecretAclReadToHclTerraform(struct?: KeymanagerSecretAclReadOutputReference | KeymanagerSecretAclRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_access: {
      value: cdktf.booleanToHclTerraform(struct!.projectAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeymanagerSecretAclReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeymanagerSecretAclRead | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectAccess = this._projectAccess;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeymanagerSecretAclRead | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectAccess = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectAccess = value.projectAccess;
      this._users = value.users;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // project_access - computed: false, optional: true, required: false
  private _projectAccess?: boolean | cdktf.IResolvable; 
  public get projectAccess() {
    return this.getBooleanAttribute('project_access');
  }
  public set projectAccess(value: boolean | cdktf.IResolvable) {
    this._projectAccess = value;
  }
  public resetProjectAccess() {
    this._projectAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAccessInput() {
    return this._projectAccess;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface KeymanagerSecretAcl {
  /**
  * read block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#read KeymanagerSecret#read}
  */
  readonly read?: KeymanagerSecretAclRead;
}

export function keymanagerSecretAclToTerraform(struct?: KeymanagerSecretAclOutputReference | KeymanagerSecretAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: keymanagerSecretAclReadToTerraform(struct!.read),
  }
}


export function keymanagerSecretAclToHclTerraform(struct?: KeymanagerSecretAclOutputReference | KeymanagerSecretAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: keymanagerSecretAclReadToHclTerraform(struct!.read),
      isBlock: true,
      type: "list",
      storageClassType: "KeymanagerSecretAclReadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeymanagerSecretAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeymanagerSecretAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeymanagerSecretAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read.internalValue = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read = new KeymanagerSecretAclReadOutputReference(this, "read");
  public get read() {
    return this._read;
  }
  public putRead(value: KeymanagerSecretAclRead) {
    this._read.internalValue = value;
  }
  public resetRead() {
    this._read.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read.internalValue;
  }
}
export interface KeymanagerSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#create KeymanagerSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#delete KeymanagerSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#update KeymanagerSecret#update}
  */
  readonly update?: string;
}

export function keymanagerSecretTimeoutsToTerraform(struct?: KeymanagerSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function keymanagerSecretTimeoutsToHclTerraform(struct?: KeymanagerSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeymanagerSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeymanagerSecretTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeymanagerSecretTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret vkcs_keymanager_secret}
*/
export class KeymanagerSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_keymanager_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeymanagerSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeymanagerSecret to import
  * @param importFromId The id of the existing KeymanagerSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeymanagerSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_keymanager_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/keymanager_secret vkcs_keymanager_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeymanagerSecretConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KeymanagerSecretConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_keymanager_secret',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._bitLength = config.bitLength;
    this._expiration = config.expiration;
    this._id = config.id;
    this._metadata = config.metadata;
    this._mode = config.mode;
    this._name = config.name;
    this._payload = config.payload;
    this._payloadContentEncoding = config.payloadContentEncoding;
    this._payloadContentType = config.payloadContentType;
    this._region = config.region;
    this._secretType = config.secretType;
    this._acl.internalValue = config.acl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // all_metadata - computed: true, optional: false, required: false
  private _allMetadata = new cdktf.StringMap(this, "all_metadata");
  public get allMetadata() {
    return this._allMetadata;
  }

  // bit_length - computed: true, optional: true, required: false
  private _bitLength?: number; 
  public get bitLength() {
    return this.getNumberAttribute('bit_length');
  }
  public set bitLength(value: number) {
    this._bitLength = value;
  }
  public resetBitLength() {
    this._bitLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitLengthInput() {
    return this._bitLength;
  }

  // content_types - computed: true, optional: false, required: false
  private _contentTypes = new cdktf.StringMap(this, "content_types");
  public get contentTypes() {
    return this._contentTypes;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // payload - computed: true, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // payload_content_encoding - computed: false, optional: true, required: false
  private _payloadContentEncoding?: string; 
  public get payloadContentEncoding() {
    return this.getStringAttribute('payload_content_encoding');
  }
  public set payloadContentEncoding(value: string) {
    this._payloadContentEncoding = value;
  }
  public resetPayloadContentEncoding() {
    this._payloadContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadContentEncodingInput() {
    return this._payloadContentEncoding;
  }

  // payload_content_type - computed: false, optional: true, required: false
  private _payloadContentType?: string; 
  public get payloadContentType() {
    return this.getStringAttribute('payload_content_type');
  }
  public set payloadContentType(value: string) {
    this._payloadContentType = value;
  }
  public resetPayloadContentType() {
    this._payloadContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadContentTypeInput() {
    return this._payloadContentType;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }

  // secret_type - computed: true, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new KeymanagerSecretAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: KeymanagerSecretAcl) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeymanagerSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeymanagerSecretTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      bit_length: cdktf.numberToTerraform(this._bitLength),
      expiration: cdktf.stringToTerraform(this._expiration),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      payload: cdktf.stringToTerraform(this._payload),
      payload_content_encoding: cdktf.stringToTerraform(this._payloadContentEncoding),
      payload_content_type: cdktf.stringToTerraform(this._payloadContentType),
      region: cdktf.stringToTerraform(this._region),
      secret_type: cdktf.stringToTerraform(this._secretType),
      acl: keymanagerSecretAclToTerraform(this._acl.internalValue),
      timeouts: keymanagerSecretTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bit_length: {
        value: cdktf.numberToHclTerraform(this._bitLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      payload: {
        value: cdktf.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_content_encoding: {
        value: cdktf.stringToHclTerraform(this._payloadContentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_content_type: {
        value: cdktf.stringToHclTerraform(this._payloadContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_type: {
        value: cdktf.stringToHclTerraform(this._secretType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: keymanagerSecretAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeymanagerSecretAclList",
      },
      timeouts: {
        value: keymanagerSecretTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeymanagerSecretTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
