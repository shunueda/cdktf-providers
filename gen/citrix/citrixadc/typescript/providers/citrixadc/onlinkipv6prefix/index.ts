// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Onlinkipv6PrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#autonomusprefix Onlinkipv6Prefix#autonomusprefix}
  */
  readonly autonomusprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#decrementprefixlifetimes Onlinkipv6Prefix#decrementprefixlifetimes}
  */
  readonly decrementprefixlifetimes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#depricateprefix Onlinkipv6Prefix#depricateprefix}
  */
  readonly depricateprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#id Onlinkipv6Prefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#ipv6prefix Onlinkipv6Prefix#ipv6prefix}
  */
  readonly ipv6Prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#onlinkprefix Onlinkipv6Prefix#onlinkprefix}
  */
  readonly onlinkprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#prefixpreferredlifetime Onlinkipv6Prefix#prefixpreferredlifetime}
  */
  readonly prefixpreferredlifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#prefixvalidelifetime Onlinkipv6Prefix#prefixvalidelifetime}
  */
  readonly prefixvalidelifetime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix citrixadc_onlinkipv6prefix}
*/
export class Onlinkipv6Prefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_onlinkipv6prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Onlinkipv6Prefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Onlinkipv6Prefix to import
  * @param importFromId The id of the existing Onlinkipv6Prefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Onlinkipv6Prefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_onlinkipv6prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/onlinkipv6prefix citrixadc_onlinkipv6prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Onlinkipv6PrefixConfig
  */
  public constructor(scope: Construct, id: string, config: Onlinkipv6PrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_onlinkipv6prefix',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomusprefix = config.autonomusprefix;
    this._decrementprefixlifetimes = config.decrementprefixlifetimes;
    this._depricateprefix = config.depricateprefix;
    this._id = config.id;
    this._ipv6Prefix = config.ipv6Prefix;
    this._onlinkprefix = config.onlinkprefix;
    this._prefixpreferredlifetime = config.prefixpreferredlifetime;
    this._prefixvalidelifetime = config.prefixvalidelifetime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomusprefix - computed: true, optional: true, required: false
  private _autonomusprefix?: string; 
  public get autonomusprefix() {
    return this.getStringAttribute('autonomusprefix');
  }
  public set autonomusprefix(value: string) {
    this._autonomusprefix = value;
  }
  public resetAutonomusprefix() {
    this._autonomusprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomusprefixInput() {
    return this._autonomusprefix;
  }

  // decrementprefixlifetimes - computed: true, optional: true, required: false
  private _decrementprefixlifetimes?: string; 
  public get decrementprefixlifetimes() {
    return this.getStringAttribute('decrementprefixlifetimes');
  }
  public set decrementprefixlifetimes(value: string) {
    this._decrementprefixlifetimes = value;
  }
  public resetDecrementprefixlifetimes() {
    this._decrementprefixlifetimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementprefixlifetimesInput() {
    return this._decrementprefixlifetimes;
  }

  // depricateprefix - computed: true, optional: true, required: false
  private _depricateprefix?: string; 
  public get depricateprefix() {
    return this.getStringAttribute('depricateprefix');
  }
  public set depricateprefix(value: string) {
    this._depricateprefix = value;
  }
  public resetDepricateprefix() {
    this._depricateprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depricateprefixInput() {
    return this._depricateprefix;
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

  // ipv6prefix - computed: false, optional: false, required: true
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // onlinkprefix - computed: true, optional: true, required: false
  private _onlinkprefix?: string; 
  public get onlinkprefix() {
    return this.getStringAttribute('onlinkprefix');
  }
  public set onlinkprefix(value: string) {
    this._onlinkprefix = value;
  }
  public resetOnlinkprefix() {
    this._onlinkprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkprefixInput() {
    return this._onlinkprefix;
  }

  // prefixpreferredlifetime - computed: true, optional: true, required: false
  private _prefixpreferredlifetime?: number; 
  public get prefixpreferredlifetime() {
    return this.getNumberAttribute('prefixpreferredlifetime');
  }
  public set prefixpreferredlifetime(value: number) {
    this._prefixpreferredlifetime = value;
  }
  public resetPrefixpreferredlifetime() {
    this._prefixpreferredlifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixpreferredlifetimeInput() {
    return this._prefixpreferredlifetime;
  }

  // prefixvalidelifetime - computed: true, optional: true, required: false
  private _prefixvalidelifetime?: number; 
  public get prefixvalidelifetime() {
    return this.getNumberAttribute('prefixvalidelifetime');
  }
  public set prefixvalidelifetime(value: number) {
    this._prefixvalidelifetime = value;
  }
  public resetPrefixvalidelifetime() {
    this._prefixvalidelifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixvalidelifetimeInput() {
    return this._prefixvalidelifetime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomusprefix: cdktf.stringToTerraform(this._autonomusprefix),
      decrementprefixlifetimes: cdktf.stringToTerraform(this._decrementprefixlifetimes),
      depricateprefix: cdktf.stringToTerraform(this._depricateprefix),
      id: cdktf.stringToTerraform(this._id),
      ipv6prefix: cdktf.stringToTerraform(this._ipv6Prefix),
      onlinkprefix: cdktf.stringToTerraform(this._onlinkprefix),
      prefixpreferredlifetime: cdktf.numberToTerraform(this._prefixpreferredlifetime),
      prefixvalidelifetime: cdktf.numberToTerraform(this._prefixvalidelifetime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomusprefix: {
        value: cdktf.stringToHclTerraform(this._autonomusprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decrementprefixlifetimes: {
        value: cdktf.stringToHclTerraform(this._decrementprefixlifetimes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      depricateprefix: {
        value: cdktf.stringToHclTerraform(this._depricateprefix),
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
      ipv6prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onlinkprefix: {
        value: cdktf.stringToHclTerraform(this._onlinkprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefixpreferredlifetime: {
        value: cdktf.numberToHclTerraform(this._prefixpreferredlifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefixvalidelifetime: {
        value: cdktf.numberToHclTerraform(this._prefixvalidelifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
