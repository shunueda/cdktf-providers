// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vpc_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy vPC pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vpc_pair#deploy VpcPair#deploy}
  */
  readonly deploy: boolean | cdktf.IResolvable;
  /**
  * Serial numbers of the switches in the vPC pair. Must contain exactly two serial numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vpc_pair#serial_numbers VpcPair#serial_numbers}
  */
  readonly serialNumbers: string[];
  /**
  * Set to true to use virtual peer link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vpc_pair#use_virtual_peerlink VpcPair#use_virtual_peerlink}
  */
  readonly useVirtualPeerlink: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vpc_pair ndfc_vpc_pair}
*/
export class VpcPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_vpc_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPair to import
  * @param importFromId The id of the existing VpcPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vpc_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_vpc_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vpc_pair ndfc_vpc_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPairConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPairConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_vpc_pair',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploy = config.deploy;
    this._serialNumbers = config.serialNumbers;
    this._useVirtualPeerlink = config.useVirtualPeerlink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy - computed: false, optional: false, required: true
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // serial_numbers - computed: false, optional: false, required: true
  private _serialNumbers?: string[]; 
  public get serialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_numbers'));
  }
  public set serialNumbers(value: string[]) {
    this._serialNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumbersInput() {
    return this._serialNumbers;
  }

  // use_virtual_peerlink - computed: false, optional: false, required: true
  private _useVirtualPeerlink?: boolean | cdktf.IResolvable; 
  public get useVirtualPeerlink() {
    return this.getBooleanAttribute('use_virtual_peerlink');
  }
  public set useVirtualPeerlink(value: boolean | cdktf.IResolvable) {
    this._useVirtualPeerlink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useVirtualPeerlinkInput() {
    return this._useVirtualPeerlink;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy: cdktf.booleanToTerraform(this._deploy),
      serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumbers),
      use_virtual_peerlink: cdktf.booleanToTerraform(this._useVirtualPeerlink),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_virtual_peerlink: {
        value: cdktf.booleanToHclTerraform(this._useVirtualPeerlink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
