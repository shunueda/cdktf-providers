// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArcAgentBootstrapV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1#id ArcAgentBootstrapV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1#region ArcAgentBootstrapV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1#triggers ArcAgentBootstrapV1#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1#type ArcAgentBootstrapV1#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1 sci_arc_agent_bootstrap_v1}
*/
export class ArcAgentBootstrapV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_arc_agent_bootstrap_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArcAgentBootstrapV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArcAgentBootstrapV1 to import
  * @param importFromId The id of the existing ArcAgentBootstrapV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArcAgentBootstrapV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_arc_agent_bootstrap_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_agent_bootstrap_v1 sci_arc_agent_bootstrap_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArcAgentBootstrapV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: ArcAgentBootstrapV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'sci_arc_agent_bootstrap_v1',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1'
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
    this._region = config.region;
    this._triggers = config.triggers;
    this._type = config.type;
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

  // raw_map - computed: true, optional: false, required: false
  private _rawMap = new cdktf.StringMap(this, "raw_map");
  public get rawMap() {
    return this._rawMap;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
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

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      type: cdktf.stringToTerraform(this._type),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
