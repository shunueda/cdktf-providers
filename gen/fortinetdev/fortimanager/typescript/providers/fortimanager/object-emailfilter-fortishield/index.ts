// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectEmailfilterFortishieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield#adom ObjectEmailfilterFortishield#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield#id ObjectEmailfilterFortishield#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield#scopetype ObjectEmailfilterFortishield#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield#spam_submit_force ObjectEmailfilterFortishield#spam_submit_force}
  */
  readonly spamSubmitForce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield#spam_submit_srv ObjectEmailfilterFortishield#spam_submit_srv}
  */
  readonly spamSubmitSrv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield#spam_submit_txt2htm ObjectEmailfilterFortishield#spam_submit_txt2htm}
  */
  readonly spamSubmitTxt2Htm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield fortimanager_object_emailfilter_fortishield}
*/
export class ObjectEmailfilterFortishield extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_emailfilter_fortishield";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectEmailfilterFortishield resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectEmailfilterFortishield to import
  * @param importFromId The id of the existing ObjectEmailfilterFortishield that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectEmailfilterFortishield to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_emailfilter_fortishield", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_fortishield fortimanager_object_emailfilter_fortishield} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectEmailfilterFortishieldConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectEmailfilterFortishieldConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_emailfilter_fortishield',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._spamSubmitForce = config.spamSubmitForce;
    this._spamSubmitSrv = config.spamSubmitSrv;
    this._spamSubmitTxt2Htm = config.spamSubmitTxt2Htm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // spam_submit_force - computed: true, optional: true, required: false
  private _spamSubmitForce?: string; 
  public get spamSubmitForce() {
    return this.getStringAttribute('spam_submit_force');
  }
  public set spamSubmitForce(value: string) {
    this._spamSubmitForce = value;
  }
  public resetSpamSubmitForce() {
    this._spamSubmitForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamSubmitForceInput() {
    return this._spamSubmitForce;
  }

  // spam_submit_srv - computed: true, optional: true, required: false
  private _spamSubmitSrv?: string; 
  public get spamSubmitSrv() {
    return this.getStringAttribute('spam_submit_srv');
  }
  public set spamSubmitSrv(value: string) {
    this._spamSubmitSrv = value;
  }
  public resetSpamSubmitSrv() {
    this._spamSubmitSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamSubmitSrvInput() {
    return this._spamSubmitSrv;
  }

  // spam_submit_txt2htm - computed: true, optional: true, required: false
  private _spamSubmitTxt2Htm?: string; 
  public get spamSubmitTxt2Htm() {
    return this.getStringAttribute('spam_submit_txt2htm');
  }
  public set spamSubmitTxt2Htm(value: string) {
    this._spamSubmitTxt2Htm = value;
  }
  public resetSpamSubmitTxt2Htm() {
    this._spamSubmitTxt2Htm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamSubmitTxt2HtmInput() {
    return this._spamSubmitTxt2Htm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      spam_submit_force: cdktf.stringToTerraform(this._spamSubmitForce),
      spam_submit_srv: cdktf.stringToTerraform(this._spamSubmitSrv),
      spam_submit_txt2htm: cdktf.stringToTerraform(this._spamSubmitTxt2Htm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_submit_force: {
        value: cdktf.stringToHclTerraform(this._spamSubmitForce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_submit_srv: {
        value: cdktf.stringToHclTerraform(this._spamSubmitSrv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_submit_txt2htm: {
        value: cdktf.stringToHclTerraform(this._spamSubmitTxt2Htm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
