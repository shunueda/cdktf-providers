// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of bots for Bad Bots configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration#bad_bots BotsConfiguration#bad_bots}
  */
  readonly badBots?: number[];
  /**
  * List of bots for Canceled Good Bots configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration#canceled_good_bots BotsConfiguration#canceled_good_bots}
  */
  readonly canceledGoodBots?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration#id BotsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration#site_id BotsConfiguration#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration incapsula_bots_configuration}
*/
export class BotsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_bots_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotsConfiguration to import
  * @param importFromId The id of the existing BotsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_bots_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/bots_configuration incapsula_bots_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BotsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_bots_configuration',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._badBots = config.badBots;
    this._canceledGoodBots = config.canceledGoodBots;
    this._id = config.id;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bad_bots - computed: false, optional: true, required: false
  private _badBots?: number[]; 
  public get badBots() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('bad_bots')));
  }
  public set badBots(value: number[]) {
    this._badBots = value;
  }
  public resetBadBots() {
    this._badBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badBotsInput() {
    return this._badBots;
  }

  // canceled_good_bots - computed: false, optional: true, required: false
  private _canceledGoodBots?: number[]; 
  public get canceledGoodBots() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('canceled_good_bots')));
  }
  public set canceledGoodBots(value: number[]) {
    this._canceledGoodBots = value;
  }
  public resetCanceledGoodBots() {
    this._canceledGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canceledGoodBotsInput() {
    return this._canceledGoodBots;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bad_bots: cdktf.listMapper(cdktf.numberToTerraform, false)(this._badBots),
      canceled_good_bots: cdktf.listMapper(cdktf.numberToTerraform, false)(this._canceledGoodBots),
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bad_bots: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._badBots),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      canceled_good_bots: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._canceledGoodBots),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
