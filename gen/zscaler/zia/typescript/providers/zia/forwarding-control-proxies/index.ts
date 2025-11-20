// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingControlProxiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address or the FQDN of the third-party proxy service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#address ForwardingControlProxies#address}
  */
  readonly address?: string;
  /**
  * Flag indicating whether the added X-Authenticated-User header is Base64 encoded. When enabled, the user ID is encoded using the Base64 encoding method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#base64_encode_xau_header ForwardingControlProxies#base64_encode_xau_header}
  */
  readonly base64EncodeXauHeader?: boolean | cdktf.IResolvable;
  /**
  * Additional details about the Proxy gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#description ForwardingControlProxies#description}
  */
  readonly description?: string;
  /**
  * Flag indicating whether X-Authenticated-User header is added by the proxy. Enable to automatically insert authenticated user ID to the HTTP header, X-Authenticated-User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#insert_xau_header ForwardingControlProxies#insert_xau_header}
  */
  readonly insertXauHeader?: boolean | cdktf.IResolvable;
  /**
  * The name of the Proxy gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#name ForwardingControlProxies#name}
  */
  readonly name?: string;
  /**
  * The port number on which the third-party proxy service listens to the requests forwarded from Zscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#port ForwardingControlProxies#port}
  */
  readonly port?: number;
  /**
  * Gateway type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#type ForwardingControlProxies#type}
  */
  readonly type?: string;
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#cert ForwardingControlProxies#cert}
  */
  readonly cert?: ForwardingControlProxiesCert[] | cdktf.IResolvable;
}
export interface ForwardingControlProxiesCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#id ForwardingControlProxies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function forwardingControlProxiesCertToTerraform(struct?: ForwardingControlProxiesCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function forwardingControlProxiesCertToHclTerraform(struct?: ForwardingControlProxiesCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingControlProxiesCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingControlProxiesCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlProxiesCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class ForwardingControlProxiesCertList extends cdktf.ComplexList {
  public internalValue? : ForwardingControlProxiesCert[] | cdktf.IResolvable

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
  public get(index: number): ForwardingControlProxiesCertOutputReference {
    return new ForwardingControlProxiesCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies zia_forwarding_control_proxies}
*/
export class ForwardingControlProxies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_forwarding_control_proxies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingControlProxies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingControlProxies to import
  * @param importFromId The id of the existing ForwardingControlProxies that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingControlProxies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_forwarding_control_proxies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_proxies zia_forwarding_control_proxies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingControlProxiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ForwardingControlProxiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_forwarding_control_proxies',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.0',
        providerVersionConstraint: '4.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._base64EncodeXauHeader = config.base64EncodeXauHeader;
    this._description = config.description;
    this._insertXauHeader = config.insertXauHeader;
    this._name = config.name;
    this._port = config.port;
    this._type = config.type;
    this._cert.internalValue = config.cert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // base64_encode_xau_header - computed: false, optional: true, required: false
  private _base64EncodeXauHeader?: boolean | cdktf.IResolvable; 
  public get base64EncodeXauHeader() {
    return this.getBooleanAttribute('base64_encode_xau_header');
  }
  public set base64EncodeXauHeader(value: boolean | cdktf.IResolvable) {
    this._base64EncodeXauHeader = value;
  }
  public resetBase64EncodeXauHeader() {
    this._base64EncodeXauHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeXauHeaderInput() {
    return this._base64EncodeXauHeader;
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insert_xau_header - computed: false, optional: true, required: false
  private _insertXauHeader?: boolean | cdktf.IResolvable; 
  public get insertXauHeader() {
    return this.getBooleanAttribute('insert_xau_header');
  }
  public set insertXauHeader(value: boolean | cdktf.IResolvable) {
    this._insertXauHeader = value;
  }
  public resetInsertXauHeader() {
    this._insertXauHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertXauHeaderInput() {
    return this._insertXauHeader;
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

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getNumberAttribute('proxy_id');
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

  // cert - computed: false, optional: true, required: false
  private _cert = new ForwardingControlProxiesCertList(this, "cert", true);
  public get cert() {
    return this._cert;
  }
  public putCert(value: ForwardingControlProxiesCert[] | cdktf.IResolvable) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      base64_encode_xau_header: cdktf.booleanToTerraform(this._base64EncodeXauHeader),
      description: cdktf.stringToTerraform(this._description),
      insert_xau_header: cdktf.booleanToTerraform(this._insertXauHeader),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      type: cdktf.stringToTerraform(this._type),
      cert: cdktf.listMapper(forwardingControlProxiesCertToTerraform, true)(this._cert.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_encode_xau_header: {
        value: cdktf.booleanToHclTerraform(this._base64EncodeXauHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_xau_header: {
        value: cdktf.booleanToHclTerraform(this._insertXauHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.listMapperHcl(forwardingControlProxiesCertToHclTerraform, true)(this._cert.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlProxiesCertList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
