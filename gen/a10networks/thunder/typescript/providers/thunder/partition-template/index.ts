// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionTemplateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template#id PartitionTemplateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PartitionName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template#partition_name PartitionTemplateA#partition_name}
  */
  readonly partitionName: string;
  /**
  * Attach a resource accounting template (Name of the template)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template#resource_accounting PartitionTemplateA#resource_accounting}
  */
  readonly resourceAccounting?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template#uuid PartitionTemplateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template thunder_partition_template}
*/
export class PartitionTemplateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_partition_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PartitionTemplateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PartitionTemplateA to import
  * @param importFromId The id of the existing PartitionTemplateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PartitionTemplateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_partition_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_template thunder_partition_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionTemplateAConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionTemplateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_partition_template',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._partitionName = config.partitionName;
    this._resourceAccounting = config.resourceAccounting;
    this._uuid = config.uuid;
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

  // partition_name - computed: false, optional: false, required: true
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // resource_accounting - computed: false, optional: true, required: false
  private _resourceAccounting?: string; 
  public get resourceAccounting() {
    return this.getStringAttribute('resource_accounting');
  }
  public set resourceAccounting(value: string) {
    this._resourceAccounting = value;
  }
  public resetResourceAccounting() {
    this._resourceAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccountingInput() {
    return this._resourceAccounting;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      partition_name: cdktf.stringToTerraform(this._partitionName),
      resource_accounting: cdktf.stringToTerraform(this._resourceAccounting),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      partition_name: {
        value: cdktf.stringToHclTerraform(this._partitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_accounting: {
        value: cdktf.stringToHclTerraform(this._resourceAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
