// https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/public_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name/notes about this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/public_ip#display_name PublicIp#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/public_ip#id PublicIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX API public endpoint url used for public IP resource management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/public_ip#nsxt_reverse_proxy_url PublicIp#nsxt_reverse_proxy_url}
  */
  readonly nsxtReverseProxyUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/public_ip vmc_public_ip}
*/
export class PublicIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc_public_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PublicIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PublicIp to import
  * @param importFromId The id of the existing PublicIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/public_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PublicIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc_public_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/public_ip vmc_public_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicIpConfig
  */
  public constructor(scope: Construct, id: string, config: PublicIpConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc_public_ip',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.6',
        providerVersionConstraint: '1.15.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._nsxtReverseProxyUrl = config.nsxtReverseProxyUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // nsxt_reverse_proxy_url - computed: false, optional: false, required: true
  private _nsxtReverseProxyUrl?: string; 
  public get nsxtReverseProxyUrl() {
    return this.getStringAttribute('nsxt_reverse_proxy_url');
  }
  public set nsxtReverseProxyUrl(value: string) {
    this._nsxtReverseProxyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtReverseProxyUrlInput() {
    return this._nsxtReverseProxyUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      nsxt_reverse_proxy_url: cdktf.stringToTerraform(this._nsxtReverseProxyUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      nsxt_reverse_proxy_url: {
        value: cdktf.stringToHclTerraform(this._nsxtReverseProxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
