// https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/virtual_machine_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcVirtualMachineInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of machine-type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/virtual_machine_instance#id DataMgcVirtualMachineInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataMgcVirtualMachineInstanceInterfaces {
}

export function dataMgcVirtualMachineInstanceInterfacesToTerraform(struct?: DataMgcVirtualMachineInstanceInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcVirtualMachineInstanceInterfacesToHclTerraform(struct?: DataMgcVirtualMachineInstanceInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcVirtualMachineInstanceInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMgcVirtualMachineInstanceInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcVirtualMachineInstanceInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_ipv4 - computed: true, optional: false, required: false
  public get localIpv4() {
    return this.getStringAttribute('local_ipv4');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // public_ipv4 - computed: true, optional: false, required: false
  public get publicIpv4() {
    return this.getStringAttribute('public_ipv4');
  }

  // public_ipv6 - computed: true, optional: false, required: false
  public get publicIpv6() {
    return this.getStringAttribute('public_ipv6');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
}

export class DataMgcVirtualMachineInstanceInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMgcVirtualMachineInstanceInterfacesOutputReference {
    return new DataMgcVirtualMachineInstanceInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/virtual_machine_instance mgc_virtual_machine_instance}
*/
export class DataMgcVirtualMachineInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_virtual_machine_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcVirtualMachineInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcVirtualMachineInstance to import
  * @param importFromId The id of the existing DataMgcVirtualMachineInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/virtual_machine_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcVirtualMachineInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_virtual_machine_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/virtual_machine_instance mgc_virtual_machine_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcVirtualMachineInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcVirtualMachineInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_virtual_machine_instance',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.1',
        providerVersionConstraint: '0.40.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // error_slug - computed: true, optional: false, required: false
  public get errorSlug() {
    return this.getStringAttribute('error_slug');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_platform - computed: true, optional: false, required: false
  public get imagePlatform() {
    return this.getStringAttribute('image_platform');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataMgcVirtualMachineInstanceInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // machine_type_disk - computed: true, optional: false, required: false
  public get machineTypeDisk() {
    return this.getNumberAttribute('machine_type_disk');
  }

  // machine_type_id - computed: true, optional: false, required: false
  public get machineTypeId() {
    return this.getStringAttribute('machine_type_id');
  }

  // machine_type_name - computed: true, optional: false, required: false
  public get machineTypeName() {
    return this.getStringAttribute('machine_type_name');
  }

  // machine_type_ram - computed: true, optional: false, required: false
  public get machineTypeRam() {
    return this.getNumberAttribute('machine_type_ram');
  }

  // machine_type_vcpus - computed: true, optional: false, required: false
  public get machineTypeVcpus() {
    return this.getNumberAttribute('machine_type_vcpus');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ssh_key_name - computed: true, optional: false, required: false
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
