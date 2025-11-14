// generated from terraform resource schema

import { FloatingIpV2LinksList, 
FloatingIpV2MetadataList, 
FloatingIpV2Association, 
floatingIpV2AssociationToTerraform, 
floatingIpV2AssociationToHclTerraform, 
FloatingIpV2AssociationList, 
FloatingIpV2ExternalSubnet, 
floatingIpV2ExternalSubnetToTerraform, 
floatingIpV2ExternalSubnetToHclTerraform, 
FloatingIpV2ExternalSubnetList, 
FloatingIpV2FloatingIp, 
floatingIpV2FloatingIpToTerraform, 
floatingIpV2FloatingIpToHclTerraform, 
FloatingIpV2FloatingIpList, 
FloatingIpV2VmNic, 
floatingIpV2VmNicToTerraform, 
floatingIpV2VmNicToHclTerraform, 
FloatingIpV2VmNicList, 
FloatingIpV2Vpc, 
floatingIpV2VpcToTerraform, 
floatingIpV2VpcToHclTerraform, 
FloatingIpV2VpcList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FloatingIpV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#description FloatingIpV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#ext_id FloatingIpV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#external_subnet_reference FloatingIpV2#external_subnet_reference}
  */
  readonly externalSubnetReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#id FloatingIpV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#load_balancer_session_reference FloatingIpV2#load_balancer_session_reference}
  */
  readonly loadBalancerSessionReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#name FloatingIpV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#vm_nic_reference FloatingIpV2#vm_nic_reference}
  */
  readonly vmNicReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#vpc_reference FloatingIpV2#vpc_reference}
  */
  readonly vpcReference?: string;
  /**
  * association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#association FloatingIpV2#association}
  */
  readonly association?: FloatingIpV2Association[] | cdktf.IResolvable;
  /**
  * external_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#external_subnet FloatingIpV2#external_subnet}
  */
  readonly externalSubnet?: FloatingIpV2ExternalSubnet[] | cdktf.IResolvable;
  /**
  * floating_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#floating_ip FloatingIpV2#floating_ip}
  */
  readonly floatingIp?: FloatingIpV2FloatingIp[] | cdktf.IResolvable;
  /**
  * vm_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#vm_nic FloatingIpV2#vm_nic}
  */
  readonly vmNic?: FloatingIpV2VmNic[] | cdktf.IResolvable;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#vpc FloatingIpV2#vpc}
  */
  readonly vpc?: FloatingIpV2Vpc[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2 nutanix_floating_ip_v2}
*/
export class FloatingIpV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_floating_ip_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FloatingIpV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FloatingIpV2 to import
  * @param importFromId The id of the existing FloatingIpV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FloatingIpV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_floating_ip_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2 nutanix_floating_ip_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FloatingIpV2Config
  */
  public constructor(scope: Construct, id: string, config: FloatingIpV2Config) {
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
    this._description = config.description;
    this._extId = config.extId;
    this._externalSubnetReference = config.externalSubnetReference;
    this._id = config.id;
    this._loadBalancerSessionReference = config.loadBalancerSessionReference;
    this._name = config.name;
    this._vmNicReference = config.vmNicReference;
    this._vpcReference = config.vpcReference;
    this._association.internalValue = config.association;
    this._externalSubnet.internalValue = config.externalSubnet;
    this._floatingIp.internalValue = config.floatingIp;
    this._vmNic.internalValue = config.vmNic;
    this._vpc.internalValue = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_status - computed: true, optional: false, required: false
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // external_subnet_reference - computed: false, optional: true, required: false
  private _externalSubnetReference?: string; 
  public get externalSubnetReference() {
    return this.getStringAttribute('external_subnet_reference');
  }
  public set externalSubnetReference(value: string) {
    this._externalSubnetReference = value;
  }
  public resetExternalSubnetReference() {
    this._externalSubnetReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetReferenceInput() {
    return this._externalSubnetReference;
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
  private _links = new FloatingIpV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // load_balancer_session_reference - computed: false, optional: true, required: false
  private _loadBalancerSessionReference?: string; 
  public get loadBalancerSessionReference() {
    return this.getStringAttribute('load_balancer_session_reference');
  }
  public set loadBalancerSessionReference(value: string) {
    this._loadBalancerSessionReference = value;
  }
  public resetLoadBalancerSessionReference() {
    this._loadBalancerSessionReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSessionReferenceInput() {
    return this._loadBalancerSessionReference;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new FloatingIpV2MetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
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

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_nic_reference - computed: true, optional: true, required: false
  private _vmNicReference?: string; 
  public get vmNicReference() {
    return this.getStringAttribute('vm_nic_reference');
  }
  public set vmNicReference(value: string) {
    this._vmNicReference = value;
  }
  public resetVmNicReference() {
    this._vmNicReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNicReferenceInput() {
    return this._vmNicReference;
  }

  // vpc_reference - computed: true, optional: true, required: false
  private _vpcReference?: string; 
  public get vpcReference() {
    return this.getStringAttribute('vpc_reference');
  }
  public set vpcReference(value: string) {
    this._vpcReference = value;
  }
  public resetVpcReference() {
    this._vpcReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceInput() {
    return this._vpcReference;
  }

  // association - computed: false, optional: true, required: false
  private _association = new FloatingIpV2AssociationList(this, "association", false);
  public get association() {
    return this._association;
  }
  public putAssociation(value: FloatingIpV2Association[] | cdktf.IResolvable) {
    this._association.internalValue = value;
  }
  public resetAssociation() {
    this._association.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationInput() {
    return this._association.internalValue;
  }

  // external_subnet - computed: false, optional: true, required: false
  private _externalSubnet = new FloatingIpV2ExternalSubnetList(this, "external_subnet", false);
  public get externalSubnet() {
    return this._externalSubnet;
  }
  public putExternalSubnet(value: FloatingIpV2ExternalSubnet[] | cdktf.IResolvable) {
    this._externalSubnet.internalValue = value;
  }
  public resetExternalSubnet() {
    this._externalSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetInput() {
    return this._externalSubnet.internalValue;
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp = new FloatingIpV2FloatingIpList(this, "floating_ip", false);
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: FloatingIpV2FloatingIp[] | cdktf.IResolvable) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // vm_nic - computed: false, optional: true, required: false
  private _vmNic = new FloatingIpV2VmNicList(this, "vm_nic", false);
  public get vmNic() {
    return this._vmNic;
  }
  public putVmNic(value: FloatingIpV2VmNic[] | cdktf.IResolvable) {
    this._vmNic.internalValue = value;
  }
  public resetVmNic() {
    this._vmNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNicInput() {
    return this._vmNic.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new FloatingIpV2VpcList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: FloatingIpV2Vpc[] | cdktf.IResolvable) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ext_id: cdktf.stringToTerraform(this._extId),
      external_subnet_reference: cdktf.stringToTerraform(this._externalSubnetReference),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_session_reference: cdktf.stringToTerraform(this._loadBalancerSessionReference),
      name: cdktf.stringToTerraform(this._name),
      vm_nic_reference: cdktf.stringToTerraform(this._vmNicReference),
      vpc_reference: cdktf.stringToTerraform(this._vpcReference),
      association: cdktf.listMapper(floatingIpV2AssociationToTerraform, true)(this._association.internalValue),
      external_subnet: cdktf.listMapper(floatingIpV2ExternalSubnetToTerraform, true)(this._externalSubnet.internalValue),
      floating_ip: cdktf.listMapper(floatingIpV2FloatingIpToTerraform, true)(this._floatingIp.internalValue),
      vm_nic: cdktf.listMapper(floatingIpV2VmNicToTerraform, true)(this._vmNic.internalValue),
      vpc: cdktf.listMapper(floatingIpV2VpcToTerraform, true)(this._vpc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_subnet_reference: {
        value: cdktf.stringToHclTerraform(this._externalSubnetReference),
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
      load_balancer_session_reference: {
        value: cdktf.stringToHclTerraform(this._loadBalancerSessionReference),
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
      vm_nic_reference: {
        value: cdktf.stringToHclTerraform(this._vmNicReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reference: {
        value: cdktf.stringToHclTerraform(this._vpcReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association: {
        value: cdktf.listMapperHcl(floatingIpV2AssociationToHclTerraform, true)(this._association.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FloatingIpV2AssociationList",
      },
      external_subnet: {
        value: cdktf.listMapperHcl(floatingIpV2ExternalSubnetToHclTerraform, true)(this._externalSubnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FloatingIpV2ExternalSubnetList",
      },
      floating_ip: {
        value: cdktf.listMapperHcl(floatingIpV2FloatingIpToHclTerraform, true)(this._floatingIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FloatingIpV2FloatingIpList",
      },
      vm_nic: {
        value: cdktf.listMapperHcl(floatingIpV2VmNicToHclTerraform, true)(this._vmNic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FloatingIpV2VmNicList",
      },
      vpc: {
        value: cdktf.listMapperHcl(floatingIpV2VpcToHclTerraform, true)(this._vpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FloatingIpV2VpcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
