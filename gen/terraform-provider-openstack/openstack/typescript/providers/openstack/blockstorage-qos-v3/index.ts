// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockstorageQosV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3#consumer BlockstorageQosV3#consumer}
  */
  readonly consumer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3#id BlockstorageQosV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3#name BlockstorageQosV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3#region BlockstorageQosV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3#specs BlockstorageQosV3#specs}
  */
  readonly specs?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3 openstack_blockstorage_qos_v3}
*/
export class BlockstorageQosV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_blockstorage_qos_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockstorageQosV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockstorageQosV3 to import
  * @param importFromId The id of the existing BlockstorageQosV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockstorageQosV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_blockstorage_qos_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/blockstorage_qos_v3 openstack_blockstorage_qos_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockstorageQosV3Config
  */
  public constructor(scope: Construct, id: string, config: BlockstorageQosV3Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_blockstorage_qos_v3',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumer = config.consumer;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._specs = config.specs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer - computed: false, optional: true, required: false
  private _consumer?: string; 
  public get consumer() {
    return this.getStringAttribute('consumer');
  }
  public set consumer(value: string) {
    this._consumer = value;
  }
  public resetConsumer() {
    this._consumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // specs - computed: false, optional: true, required: false
  private _specs?: { [key: string]: string }; 
  public get specs() {
    return this.getStringMapAttribute('specs');
  }
  public set specs(value: { [key: string]: string }) {
    this._specs = value;
  }
  public resetSpecs() {
    this._specs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specsInput() {
    return this._specs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer: cdktf.stringToTerraform(this._consumer),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      specs: cdktf.hashMapper(cdktf.stringToTerraform)(this._specs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer: {
        value: cdktf.stringToHclTerraform(this._consumer),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      specs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._specs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
