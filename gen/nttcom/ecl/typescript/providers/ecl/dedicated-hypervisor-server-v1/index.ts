// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedHypervisorServerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#admin_pass DedicatedHypervisorServerV1#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#availability_zone DedicatedHypervisorServerV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#description DedicatedHypervisorServerV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#flavor_ref DedicatedHypervisorServerV1#flavor_ref}
  */
  readonly flavorRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#id DedicatedHypervisorServerV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#image_ref DedicatedHypervisorServerV1#image_ref}
  */
  readonly imageRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#metadata DedicatedHypervisorServerV1#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#name DedicatedHypervisorServerV1#name}
  */
  readonly name: string;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#networks DedicatedHypervisorServerV1#networks}
  */
  readonly networks: DedicatedHypervisorServerV1Networks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#timeouts DedicatedHypervisorServerV1#timeouts}
  */
  readonly timeouts?: DedicatedHypervisorServerV1Timeouts;
}
export interface DedicatedHypervisorServerV1Networks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#fixed_ip DedicatedHypervisorServerV1#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#plane DedicatedHypervisorServerV1#plane}
  */
  readonly plane: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#port DedicatedHypervisorServerV1#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#segmentation_id DedicatedHypervisorServerV1#segmentation_id}
  */
  readonly segmentationId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#uuid DedicatedHypervisorServerV1#uuid}
  */
  readonly uuid?: string;
}

export function dedicatedHypervisorServerV1NetworksToTerraform(struct?: DedicatedHypervisorServerV1Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_ip: cdktf.stringToTerraform(struct!.fixedIp),
    plane: cdktf.stringToTerraform(struct!.plane),
    port: cdktf.stringToTerraform(struct!.port),
    segmentation_id: cdktf.numberToTerraform(struct!.segmentationId),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dedicatedHypervisorServerV1NetworksToHclTerraform(struct?: DedicatedHypervisorServerV1Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_ip: {
      value: cdktf.stringToHclTerraform(struct!.fixedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plane: {
      value: cdktf.stringToHclTerraform(struct!.plane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segmentation_id: {
      value: cdktf.numberToHclTerraform(struct!.segmentationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedHypervisorServerV1NetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedHypervisorServerV1Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIp = this._fixedIp;
    }
    if (this._plane !== undefined) {
      hasAnyValues = true;
      internalValueResult.plane = this._plane;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._segmentationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationId = this._segmentationId;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedHypervisorServerV1Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedIp = undefined;
      this._plane = undefined;
      this._port = undefined;
      this._segmentationId = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedIp = value.fixedIp;
      this._plane = value.plane;
      this._port = value.port;
      this._segmentationId = value.segmentationId;
      this._uuid = value.uuid;
    }
  }

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp?: string; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp;
  }

  // plane - computed: false, optional: false, required: true
  private _plane?: string; 
  public get plane() {
    return this.getStringAttribute('plane');
  }
  public set plane(value: string) {
    this._plane = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planeInput() {
    return this._plane;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // segmentation_id - computed: false, optional: false, required: true
  private _segmentationId?: number; 
  public get segmentationId() {
    return this.getNumberAttribute('segmentation_id');
  }
  public set segmentationId(value: number) {
    this._segmentationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationIdInput() {
    return this._segmentationId;
  }

  // uuid - computed: false, optional: true, required: false
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
}

export class DedicatedHypervisorServerV1NetworksList extends cdktf.ComplexList {
  public internalValue? : DedicatedHypervisorServerV1Networks[] | cdktf.IResolvable

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
  public get(index: number): DedicatedHypervisorServerV1NetworksOutputReference {
    return new DedicatedHypervisorServerV1NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedHypervisorServerV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#create DedicatedHypervisorServerV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#delete DedicatedHypervisorServerV1#delete}
  */
  readonly delete?: string;
}

export function dedicatedHypervisorServerV1TimeoutsToTerraform(struct?: DedicatedHypervisorServerV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dedicatedHypervisorServerV1TimeoutsToHclTerraform(struct?: DedicatedHypervisorServerV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedHypervisorServerV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedHypervisorServerV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedHypervisorServerV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1 ecl_dedicated_hypervisor_server_v1}
*/
export class DedicatedHypervisorServerV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_dedicated_hypervisor_server_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedHypervisorServerV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedHypervisorServerV1 to import
  * @param importFromId The id of the existing DedicatedHypervisorServerV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedHypervisorServerV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_dedicated_hypervisor_server_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/dedicated_hypervisor_server_v1 ecl_dedicated_hypervisor_server_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedHypervisorServerV1Config
  */
  public constructor(scope: Construct, id: string, config: DedicatedHypervisorServerV1Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_dedicated_hypervisor_server_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPass = config.adminPass;
    this._availabilityZone = config.availabilityZone;
    this._description = config.description;
    this._flavorRef = config.flavorRef;
    this._id = config.id;
    this._imageRef = config.imageRef;
    this._metadata = config.metadata;
    this._name = config.name;
    this._networks.internalValue = config.networks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_pass - computed: true, optional: true, required: false
  private _adminPass?: string; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // baremetal_server_id - computed: true, optional: false, required: false
  public get baremetalServerId() {
    return this.getStringAttribute('baremetal_server_id');
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

  // flavor_ref - computed: false, optional: false, required: true
  private _flavorRef?: string; 
  public get flavorRef() {
    return this.getStringAttribute('flavor_ref');
  }
  public set flavorRef(value: string) {
    this._flavorRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorRefInput() {
    return this._flavorRef;
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

  // image_ref - computed: false, optional: false, required: true
  private _imageRef?: string; 
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }
  public set imageRef(value: string) {
    this._imageRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
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

  // networks - computed: false, optional: false, required: true
  private _networks = new DedicatedHypervisorServerV1NetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: DedicatedHypervisorServerV1Networks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DedicatedHypervisorServerV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DedicatedHypervisorServerV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      description: cdktf.stringToTerraform(this._description),
      flavor_ref: cdktf.stringToTerraform(this._flavorRef),
      id: cdktf.stringToTerraform(this._id),
      image_ref: cdktf.stringToTerraform(this._imageRef),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(dedicatedHypervisorServerV1NetworksToTerraform, true)(this._networks.internalValue),
      timeouts: dedicatedHypervisorServerV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_pass: {
        value: cdktf.stringToHclTerraform(this._adminPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_ref: {
        value: cdktf.stringToHclTerraform(this._flavorRef),
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
      image_ref: {
        value: cdktf.stringToHclTerraform(this._imageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(dedicatedHypervisorServerV1NetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedHypervisorServerV1NetworksList",
      },
      timeouts: {
        value: dedicatedHypervisorServerV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedHypervisorServerV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
