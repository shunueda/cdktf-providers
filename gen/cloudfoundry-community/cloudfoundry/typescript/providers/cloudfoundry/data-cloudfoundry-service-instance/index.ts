// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/data-sources/service_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudfoundryServiceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/data-sources/service_instance#id DataCloudfoundryServiceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/data-sources/service_instance#name_or_id DataCloudfoundryServiceInstance#name_or_id}
  */
  readonly nameOrId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/data-sources/service_instance#space DataCloudfoundryServiceInstance#space}
  */
  readonly space: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/data-sources/service_instance cloudfoundry_service_instance}
*/
export class DataCloudfoundryServiceInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_service_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudfoundryServiceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudfoundryServiceInstance to import
  * @param importFromId The id of the existing DataCloudfoundryServiceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/data-sources/service_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudfoundryServiceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_service_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/data-sources/service_instance cloudfoundry_service_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudfoundryServiceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudfoundryServiceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_service_instance',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1'
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
    this._nameOrId = config.nameOrId;
    this._space = config.space;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_or_id - computed: false, optional: false, required: true
  private _nameOrId?: string; 
  public get nameOrId() {
    return this.getStringAttribute('name_or_id');
  }
  public set nameOrId(value: string) {
    this._nameOrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIdInput() {
    return this._nameOrId;
  }

  // service_plan_id - computed: true, optional: false, required: false
  public get servicePlanId() {
    return this.getStringAttribute('service_plan_id');
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name_or_id: cdktf.stringToTerraform(this._nameOrId),
      space: cdktf.stringToTerraform(this._space),
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
      name_or_id: {
        value: cdktf.stringToHclTerraform(this._nameOrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
