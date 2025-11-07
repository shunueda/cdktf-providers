// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KpsKeypairAssociateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#enable_force_new KpsKeypairAssociate#enable_force_new}
  */
  readonly enableForceNew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#id KpsKeypairAssociate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of SSH keypair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#keypair_name KpsKeypairAssociate#keypair_name}
  */
  readonly keypairName: string;
  /**
  * Specifies the region in which to query the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#region KpsKeypairAssociate#region}
  */
  readonly region?: string;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#server KpsKeypairAssociate#server}
  */
  readonly server: KpsKeypairAssociateServer;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#timeouts KpsKeypairAssociate#timeouts}
  */
  readonly timeouts?: KpsKeypairAssociateTimeouts;
}
export interface KpsKeypairAssociateServerAuth {
  /**
  * Specifies the value of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#key KpsKeypairAssociate#key}
  */
  readonly key?: string;
  /**
  * Specifies the value of the authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#type KpsKeypairAssociate#type}
  */
  readonly type?: string;
}

export function kpsKeypairAssociateServerAuthToTerraform(struct?: KpsKeypairAssociateServerAuthOutputReference | KpsKeypairAssociateServerAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kpsKeypairAssociateServerAuthToHclTerraform(struct?: KpsKeypairAssociateServerAuthOutputReference | KpsKeypairAssociateServerAuth): any {
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

export class KpsKeypairAssociateServerAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KpsKeypairAssociateServerAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KpsKeypairAssociateServerAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface KpsKeypairAssociateServer {
  /**
  * Specifies whether the password is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#disable_password KpsKeypairAssociate#disable_password}
  */
  readonly disablePassword?: boolean | cdktf.IResolvable;
  /**
  * Specifies ID of the ECS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#id KpsKeypairAssociate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Specifies the SSH listening port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#port KpsKeypairAssociate#port}
  */
  readonly port?: number;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#auth KpsKeypairAssociate#auth}
  */
  readonly auth?: KpsKeypairAssociateServerAuth;
}

export function kpsKeypairAssociateServerToTerraform(struct?: KpsKeypairAssociateServerOutputReference | KpsKeypairAssociateServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_password: cdktf.booleanToTerraform(struct!.disablePassword),
    id: cdktf.stringToTerraform(struct!.id),
    port: cdktf.numberToTerraform(struct!.port),
    auth: kpsKeypairAssociateServerAuthToTerraform(struct!.auth),
  }
}


export function kpsKeypairAssociateServerToHclTerraform(struct?: KpsKeypairAssociateServerOutputReference | KpsKeypairAssociateServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_password: {
      value: cdktf.booleanToHclTerraform(struct!.disablePassword),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth: {
      value: kpsKeypairAssociateServerAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "KpsKeypairAssociateServerAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KpsKeypairAssociateServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KpsKeypairAssociateServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePassword = this._disablePassword;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KpsKeypairAssociateServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePassword = undefined;
      this._id = undefined;
      this._port = undefined;
      this._auth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePassword = value.disablePassword;
      this._id = value.id;
      this._port = value.port;
      this._auth.internalValue = value.auth;
    }
  }

  // disable_password - computed: false, optional: true, required: false
  private _disablePassword?: boolean | cdktf.IResolvable; 
  public get disablePassword() {
    return this.getBooleanAttribute('disable_password');
  }
  public set disablePassword(value: boolean | cdktf.IResolvable) {
    this._disablePassword = value;
  }
  public resetDisablePassword() {
    this._disablePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordInput() {
    return this._disablePassword;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // port - computed: false, optional: true, required: false
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

  // auth - computed: false, optional: true, required: false
  private _auth = new KpsKeypairAssociateServerAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: KpsKeypairAssociateServerAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}
export interface KpsKeypairAssociateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#create KpsKeypairAssociate#create}
  */
  readonly create?: string;
}

export function kpsKeypairAssociateTimeoutsToTerraform(struct?: KpsKeypairAssociateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function kpsKeypairAssociateTimeoutsToHclTerraform(struct?: KpsKeypairAssociateTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KpsKeypairAssociateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KpsKeypairAssociateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KpsKeypairAssociateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate sbercloud_kps_keypair_associate}
*/
export class KpsKeypairAssociate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_kps_keypair_associate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KpsKeypairAssociate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KpsKeypairAssociate to import
  * @param importFromId The id of the existing KpsKeypairAssociate that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KpsKeypairAssociate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_kps_keypair_associate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/kps_keypair_associate sbercloud_kps_keypair_associate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KpsKeypairAssociateConfig
  */
  public constructor(scope: Construct, id: string, config: KpsKeypairAssociateConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_kps_keypair_associate',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableForceNew = config.enableForceNew;
    this._id = config.id;
    this._keypairName = config.keypairName;
    this._region = config.region;
    this._server.internalValue = config.server;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_force_new - computed: false, optional: true, required: false
  private _enableForceNew?: string; 
  public get enableForceNew() {
    return this.getStringAttribute('enable_force_new');
  }
  public set enableForceNew(value: string) {
    this._enableForceNew = value;
  }
  public resetEnableForceNew() {
    this._enableForceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForceNewInput() {
    return this._enableForceNew;
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

  // keypair_name - computed: false, optional: false, required: true
  private _keypairName?: string; 
  public get keypairName() {
    return this.getStringAttribute('keypair_name');
  }
  public set keypairName(value: string) {
    this._keypairName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairNameInput() {
    return this._keypairName;
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

  // server - computed: false, optional: false, required: true
  private _server = new KpsKeypairAssociateServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: KpsKeypairAssociateServer) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KpsKeypairAssociateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KpsKeypairAssociateTimeouts) {
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
      enable_force_new: cdktf.stringToTerraform(this._enableForceNew),
      id: cdktf.stringToTerraform(this._id),
      keypair_name: cdktf.stringToTerraform(this._keypairName),
      region: cdktf.stringToTerraform(this._region),
      server: kpsKeypairAssociateServerToTerraform(this._server.internalValue),
      timeouts: kpsKeypairAssociateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_force_new: {
        value: cdktf.stringToHclTerraform(this._enableForceNew),
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
      keypair_name: {
        value: cdktf.stringToHclTerraform(this._keypairName),
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
      server: {
        value: kpsKeypairAssociateServerToHclTerraform(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KpsKeypairAssociateServerList",
      },
      timeouts: {
        value: kpsKeypairAssociateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KpsKeypairAssociateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
