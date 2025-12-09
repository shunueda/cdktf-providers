// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionResourceOriginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom comment about the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#comment ProtectionResourceOrigin#comment}
  */
  readonly comment?: string;
  /**
  * Time (in seconds) after which the server is considered unreachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#fail_timeout ProtectionResourceOrigin#fail_timeout}
  */
  readonly failTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#id ProtectionResourceOrigin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Origin IP for the website behind DDoS protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#ip ProtectionResourceOrigin#ip}
  */
  readonly ip: string;
  /**
  * Max number of failed connection attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#max_fails ProtectionResourceOrigin#max_fails}
  */
  readonly maxFails?: number;
  /**
  * Operation mode for this origin. Available values are `primary`, `backup`, `down`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#mode ProtectionResourceOrigin#mode}
  */
  readonly mode?: string;
  /**
  * ID of the DDoS protection resource using this origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#resource ProtectionResourceOrigin#resource}
  */
  readonly resource: string;
  /**
  * Origin weight for request balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#weight ProtectionResourceOrigin#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin edgecenter_protection_resource_origin}
*/
export class ProtectionResourceOrigin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_protection_resource_origin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionResourceOrigin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionResourceOrigin to import
  * @param importFromId The id of the existing ProtectionResourceOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionResourceOrigin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_protection_resource_origin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_origin edgecenter_protection_resource_origin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionResourceOriginConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionResourceOriginConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_protection_resource_origin',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._failTimeout = config.failTimeout;
    this._id = config.id;
    this._ip = config.ip;
    this._maxFails = config.maxFails;
    this._mode = config.mode;
    this._resource = config.resource;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // fail_timeout - computed: true, optional: true, required: false
  private _failTimeout?: number; 
  public get failTimeout() {
    return this.getNumberAttribute('fail_timeout');
  }
  public set failTimeout(value: number) {
    this._failTimeout = value;
  }
  public resetFailTimeout() {
    this._failTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTimeoutInput() {
    return this._failTimeout;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // max_fails - computed: true, optional: true, required: false
  private _maxFails?: number; 
  public get maxFails() {
    return this.getNumberAttribute('max_fails');
  }
  public set maxFails(value: number) {
    this._maxFails = value;
  }
  public resetMaxFails() {
    this._maxFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailsInput() {
    return this._maxFails;
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

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      fail_timeout: cdktf.numberToTerraform(this._failTimeout),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      max_fails: cdktf.numberToTerraform(this._maxFails),
      mode: cdktf.stringToTerraform(this._mode),
      resource: cdktf.stringToTerraform(this._resource),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_timeout: {
        value: cdktf.numberToHclTerraform(this._failTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_fails: {
        value: cdktf.numberToHclTerraform(this._maxFails),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
