// https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NicPrivateIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip#allow_relink NicPrivateIp#allow_relink}
  */
  readonly allowRelink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip#id NicPrivateIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip#nic_id NicPrivateIp#nic_id}
  */
  readonly nicId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip#private_ips NicPrivateIp#private_ips}
  */
  readonly privateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip#secondary_private_ip_count NicPrivateIp#secondary_private_ip_count}
  */
  readonly secondaryPrivateIpCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip outscale_nic_private_ip}
*/
export class NicPrivateIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_nic_private_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NicPrivateIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NicPrivateIp to import
  * @param importFromId The id of the existing NicPrivateIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NicPrivateIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_nic_private_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_private_ip outscale_nic_private_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NicPrivateIpConfig
  */
  public constructor(scope: Construct, id: string, config: NicPrivateIpConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_nic_private_ip',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowRelink = config.allowRelink;
    this._id = config.id;
    this._nicId = config.nicId;
    this._privateIps = config.privateIps;
    this._secondaryPrivateIpCount = config.secondaryPrivateIpCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_relink - computed: false, optional: true, required: false
  private _allowRelink?: boolean | cdktf.IResolvable; 
  public get allowRelink() {
    return this.getBooleanAttribute('allow_relink');
  }
  public set allowRelink(value: boolean | cdktf.IResolvable) {
    this._allowRelink = value;
  }
  public resetAllowRelink() {
    this._allowRelink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRelinkInput() {
    return this._allowRelink;
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

  // nic_id - computed: false, optional: false, required: true
  private _nicId?: string; 
  public get nicId() {
    return this.getStringAttribute('nic_id');
  }
  public set nicId(value: string) {
    this._nicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicIdInput() {
    return this._nicId;
  }

  // primary_private_ip - computed: true, optional: false, required: false
  public get primaryPrivateIp() {
    return this.getStringAttribute('primary_private_ip');
  }

  // private_ips - computed: false, optional: true, required: false
  private _privateIps?: string[]; 
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // secondary_private_ip_count - computed: true, optional: true, required: false
  private _secondaryPrivateIpCount?: number; 
  public get secondaryPrivateIpCount() {
    return this.getNumberAttribute('secondary_private_ip_count');
  }
  public set secondaryPrivateIpCount(value: number) {
    this._secondaryPrivateIpCount = value;
  }
  public resetSecondaryPrivateIpCount() {
    this._secondaryPrivateIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpCountInput() {
    return this._secondaryPrivateIpCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_relink: cdktf.booleanToTerraform(this._allowRelink),
      id: cdktf.stringToTerraform(this._id),
      nic_id: cdktf.stringToTerraform(this._nicId),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIps),
      secondary_private_ip_count: cdktf.numberToTerraform(this._secondaryPrivateIpCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_relink: {
        value: cdktf.booleanToHclTerraform(this._allowRelink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic_id: {
        value: cdktf.stringToHclTerraform(this._nicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secondary_private_ip_count: {
        value: cdktf.numberToHclTerraform(this._secondaryPrivateIpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
