// generated from terraform resource schema

import { DataNutanixFloatingIpV2AssociationList, 
DataNutanixFloatingIpV2ExternalSubnetList, 
DataNutanixFloatingIpV2FloatingIpList, 
DataNutanixFloatingIpV2LinksList, 
DataNutanixFloatingIpV2MetadataList, 
DataNutanixFloatingIpV2VmNicList, 
DataNutanixFloatingIpV2VpcList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataNutanixFloatingIpV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/floating_ip_v2#ext_id DataNutanixFloatingIpV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/floating_ip_v2#id DataNutanixFloatingIpV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/floating_ip_v2 nutanix_floating_ip_v2}
*/
export class DataNutanixFloatingIpV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_floating_ip_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixFloatingIpV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixFloatingIpV2 to import
  * @param importFromId The id of the existing DataNutanixFloatingIpV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/floating_ip_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixFloatingIpV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_floating_ip_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/floating_ip_v2 nutanix_floating_ip_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixFloatingIpV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixFloatingIpV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_floating_ip_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extId = config.extId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association - computed: true, optional: false, required: false
  private _association = new DataNutanixFloatingIpV2AssociationList(this, "association", false);
  public get association() {
    return this._association;
  }

  // association_status - computed: true, optional: false, required: false
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // external_subnet - computed: true, optional: false, required: false
  private _externalSubnet = new DataNutanixFloatingIpV2ExternalSubnetList(this, "external_subnet", false);
  public get externalSubnet() {
    return this._externalSubnet;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  public get externalSubnetReference() {
    return this.getStringAttribute('external_subnet_reference');
  }

  // floating_ip - computed: true, optional: false, required: false
  private _floatingIp = new DataNutanixFloatingIpV2FloatingIpList(this, "floating_ip", false);
  public get floatingIp() {
    return this._floatingIp;
  }

  // floating_ip_value - computed: true, optional: false, required: false
  public get floatingIpValue() {
    return this.getStringAttribute('floating_ip_value');
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

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixFloatingIpV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFloatingIpV2MetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_nic - computed: true, optional: false, required: false
  private _vmNic = new DataNutanixFloatingIpV2VmNicList(this, "vm_nic", false);
  public get vmNic() {
    return this._vmNic;
  }

  // vm_nic_reference - computed: true, optional: false, required: false
  public get vmNicReference() {
    return this.getStringAttribute('vm_nic_reference');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataNutanixFloatingIpV2VpcList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }

  // vpc_reference - computed: true, optional: false, required: false
  public get vpcReference() {
    return this.getStringAttribute('vpc_reference');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
