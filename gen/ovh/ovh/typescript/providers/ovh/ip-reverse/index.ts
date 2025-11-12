// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpReverseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse#id IpReverse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse#ip IpReverse#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse#ip_reverse IpReverse#ip_reverse}
  */
  readonly ipReverse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse#readiness_timeout_duration IpReverse#readiness_timeout_duration}
  */
  readonly readinessTimeoutDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse#reverse IpReverse#reverse}
  */
  readonly reverse: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse ovh_ip_reverse}
*/
export class IpReverse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ip_reverse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpReverse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpReverse to import
  * @param importFromId The id of the existing IpReverse that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpReverse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ip_reverse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_reverse ovh_ip_reverse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpReverseConfig
  */
  public constructor(scope: Construct, id: string, config: IpReverseConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ip_reverse',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ip = config.ip;
    this._ipReverse = config.ipReverse;
    this._readinessTimeoutDuration = config.readinessTimeoutDuration;
    this._reverse = config.reverse;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_reverse - computed: false, optional: false, required: true
  private _ipReverse?: string; 
  public get ipReverse() {
    return this.getStringAttribute('ip_reverse');
  }
  public set ipReverse(value: string) {
    this._ipReverse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReverseInput() {
    return this._ipReverse;
  }

  // readiness_timeout_duration - computed: false, optional: true, required: false
  private _readinessTimeoutDuration?: string; 
  public get readinessTimeoutDuration() {
    return this.getStringAttribute('readiness_timeout_duration');
  }
  public set readinessTimeoutDuration(value: string) {
    this._readinessTimeoutDuration = value;
  }
  public resetReadinessTimeoutDuration() {
    this._readinessTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessTimeoutDurationInput() {
    return this._readinessTimeoutDuration;
  }

  // reverse - computed: false, optional: false, required: true
  private _reverse?: string; 
  public get reverse() {
    return this.getStringAttribute('reverse');
  }
  public set reverse(value: string) {
    this._reverse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseInput() {
    return this._reverse;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip_reverse: cdktf.stringToTerraform(this._ipReverse),
      readiness_timeout_duration: cdktf.stringToTerraform(this._readinessTimeoutDuration),
      reverse: cdktf.stringToTerraform(this._reverse),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip_reverse: {
        value: cdktf.stringToHclTerraform(this._ipReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readiness_timeout_duration: {
        value: cdktf.stringToHclTerraform(this._readinessTimeoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse: {
        value: cdktf.stringToHclTerraform(this._reverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
