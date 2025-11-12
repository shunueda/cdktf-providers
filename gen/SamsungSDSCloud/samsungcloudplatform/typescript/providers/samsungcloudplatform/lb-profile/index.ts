// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category of profile. (PERSISTENCE or APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#category LbProfile#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#id LbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol layer type (Only application category). (L4, L7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#layer_type LbProfile#layer_type}
  */
  readonly layerType?: string;
  /**
  * Target Load Balancer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#lb_id LbProfile#lb_id}
  */
  readonly lbId: string;
  /**
  * Name of profile. (3 to 20 with dash in middle)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#name LbProfile#name}
  */
  readonly name: string;
  /**
  * Persistence type. (SOURCE_IP, COOKIE) (Only persistence category)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#persistence_type LbProfile#persistence_type}
  */
  readonly persistenceType?: string;
  /**
  * HTTP redirection option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#redirect_type LbProfile#redirect_type}
  */
  readonly redirectType?: string;
  /**
  * Request header size (Only application category with L7 layer. Recommend: 1024). (1 to 65536)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#request_header_size LbProfile#request_header_size}
  */
  readonly requestHeaderSize?: number;
  /**
  * Response header size (Only application category with L7 layer. Recommend: 4096). (1 to 65536)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#response_header_size LbProfile#response_header_size}
  */
  readonly responseHeaderSize?: number;
  /**
  * Request header size (Only application category with L7 layer. Recommend: 60). (1 to 2147483647)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#response_timeout LbProfile#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Session timeout value (Only application category. Recommend: 300). (30 to 5400)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#session_timeout LbProfile#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#tags LbProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Forwarded for value (Only application category with L7 layer). (None, INSERT, REPLACE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#x_forwarded_for LbProfile#x_forwarded_for}
  */
  readonly xForwardedFor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile samsungcloudplatform_lb_profile}
*/
export class LbProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_lb_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbProfile to import
  * @param importFromId The id of the existing LbProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_lb_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_profile samsungcloudplatform_lb_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LbProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_lb_profile',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._id = config.id;
    this._layerType = config.layerType;
    this._lbId = config.lbId;
    this._name = config.name;
    this._persistenceType = config.persistenceType;
    this._redirectType = config.redirectType;
    this._requestHeaderSize = config.requestHeaderSize;
    this._responseHeaderSize = config.responseHeaderSize;
    this._responseTimeout = config.responseTimeout;
    this._sessionTimeout = config.sessionTimeout;
    this._tags = config.tags;
    this._xForwardedFor = config.xForwardedFor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // layer_type - computed: false, optional: true, required: false
  private _layerType?: string; 
  public get layerType() {
    return this.getStringAttribute('layer_type');
  }
  public set layerType(value: string) {
    this._layerType = value;
  }
  public resetLayerType() {
    this._layerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerTypeInput() {
    return this._layerType;
  }

  // lb_id - computed: false, optional: false, required: true
  private _lbId?: string; 
  public get lbId() {
    return this.getStringAttribute('lb_id');
  }
  public set lbId(value: string) {
    this._lbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbIdInput() {
    return this._lbId;
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

  // persistence_type - computed: false, optional: true, required: false
  private _persistenceType?: string; 
  public get persistenceType() {
    return this.getStringAttribute('persistence_type');
  }
  public set persistenceType(value: string) {
    this._persistenceType = value;
  }
  public resetPersistenceType() {
    this._persistenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceTypeInput() {
    return this._persistenceType;
  }

  // redirect_type - computed: false, optional: true, required: false
  private _redirectType?: string; 
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
  public set redirectType(value: string) {
    this._redirectType = value;
  }
  public resetRedirectType() {
    this._redirectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeInput() {
    return this._redirectType;
  }

  // request_header_size - computed: false, optional: true, required: false
  private _requestHeaderSize?: number; 
  public get requestHeaderSize() {
    return this.getNumberAttribute('request_header_size');
  }
  public set requestHeaderSize(value: number) {
    this._requestHeaderSize = value;
  }
  public resetRequestHeaderSize() {
    this._requestHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderSizeInput() {
    return this._requestHeaderSize;
  }

  // response_header_size - computed: false, optional: true, required: false
  private _responseHeaderSize?: number; 
  public get responseHeaderSize() {
    return this.getNumberAttribute('response_header_size');
  }
  public set responseHeaderSize(value: number) {
    this._responseHeaderSize = value;
  }
  public resetResponseHeaderSize() {
    this._responseHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderSizeInput() {
    return this._responseHeaderSize;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // x_forwarded_for - computed: false, optional: true, required: false
  private _xForwardedFor?: string; 
  public get xForwardedFor() {
    return this.getStringAttribute('x_forwarded_for');
  }
  public set xForwardedFor(value: string) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      id: cdktf.stringToTerraform(this._id),
      layer_type: cdktf.stringToTerraform(this._layerType),
      lb_id: cdktf.stringToTerraform(this._lbId),
      name: cdktf.stringToTerraform(this._name),
      persistence_type: cdktf.stringToTerraform(this._persistenceType),
      redirect_type: cdktf.stringToTerraform(this._redirectType),
      request_header_size: cdktf.numberToTerraform(this._requestHeaderSize),
      response_header_size: cdktf.numberToTerraform(this._responseHeaderSize),
      response_timeout: cdktf.numberToTerraform(this._responseTimeout),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      x_forwarded_for: cdktf.stringToTerraform(this._xForwardedFor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      layer_type: {
        value: cdktf.stringToHclTerraform(this._layerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_id: {
        value: cdktf.stringToHclTerraform(this._lbId),
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
      persistence_type: {
        value: cdktf.stringToHclTerraform(this._persistenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_type: {
        value: cdktf.stringToHclTerraform(this._redirectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_header_size: {
        value: cdktf.numberToHclTerraform(this._requestHeaderSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_header_size: {
        value: cdktf.numberToHclTerraform(this._responseHeaderSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_timeout: {
        value: cdktf.numberToHclTerraform(this._responseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      x_forwarded_for: {
        value: cdktf.stringToHclTerraform(this._xForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
