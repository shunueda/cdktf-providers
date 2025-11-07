// https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#backups CloudServer#backups}
  */
  readonly backups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#cluster_id CloudServer#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#create_public_ip_address CloudServer#create_public_ip_address}
  */
  readonly createPublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#datacenter CloudServer#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#disk CloudServer#disk}
  */
  readonly disk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#id CloudServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#image CloudServer#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#name CloudServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#node_id CloudServer#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#plan CloudServer#plan}
  */
  readonly plan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#private_cloud CloudServer#private_cloud}
  */
  readonly privateCloud?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#product CloudServer#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#ram CloudServer#ram}
  */
  readonly ram?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#ssh_keys CloudServer#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#use_password CloudServer#use_password}
  */
  readonly usePassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#vcpu CloudServer#vcpu}
  */
  readonly vcpu?: number;
}
export interface CloudServerIps {
}

export function cloudServerIpsToTerraform(struct?: CloudServerIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudServerIpsToHclTerraform(struct?: CloudServerIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudServerIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudServerIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudServerIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignment_id - computed: true, optional: false, required: false
  public get assignmentId() {
    return this.getStringAttribute('assignment_id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // reverse_dns - computed: true, optional: false, required: false
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CloudServerIpsList extends cdktf.ComplexList {

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
  public get(index: number): CloudServerIpsOutputReference {
    return new CloudServerIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server ah_cloud_server}
*/
export class CloudServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ah_cloud_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServer to import
  * @param importFromId The id of the existing CloudServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ah_cloud_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server ah_cloud_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServerConfig
  */
  public constructor(scope: Construct, id: string, config: CloudServerConfig) {
    super(scope, id, {
      terraformResourceType: 'ah_cloud_server',
      terraformGeneratorMetadata: {
        providerName: 'ah',
        providerVersion: '0.3.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backups = config.backups;
    this._clusterId = config.clusterId;
    this._createPublicIpAddress = config.createPublicIpAddress;
    this._datacenter = config.datacenter;
    this._disk = config.disk;
    this._id = config.id;
    this._image = config.image;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._plan = config.plan;
    this._privateCloud = config.privateCloud;
    this._product = config.product;
    this._ram = config.ram;
    this._sshKeys = config.sshKeys;
    this._usePassword = config.usePassword;
    this._vcpu = config.vcpu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backups - computed: false, optional: true, required: false
  private _backups?: boolean | cdktf.IResolvable; 
  public get backups() {
    return this.getBooleanAttribute('backups');
  }
  public set backups(value: boolean | cdktf.IResolvable) {
    this._backups = value;
  }
  public resetBackups() {
    this._backups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_public_ip_address - computed: false, optional: true, required: false
  private _createPublicIpAddress?: boolean | cdktf.IResolvable; 
  public get createPublicIpAddress() {
    return this.getBooleanAttribute('create_public_ip_address');
  }
  public set createPublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._createPublicIpAddress = value;
  }
  public resetCreatePublicIpAddress() {
    this._createPublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPublicIpAddressInput() {
    return this._createPublicIpAddress;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
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

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // ips - computed: true, optional: false, required: false
  private _ips = new CloudServerIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
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

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // private_cloud - computed: false, optional: true, required: false
  private _privateCloud?: boolean | cdktf.IResolvable; 
  public get privateCloud() {
    return this.getBooleanAttribute('private_cloud');
  }
  public set privateCloud(value: boolean | cdktf.IResolvable) {
    this._privateCloud = value;
  }
  public resetPrivateCloud() {
    this._privateCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudInput() {
    return this._privateCloud;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // ram - computed: true, optional: true, required: false
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  public resetRam() {
    this._ram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // use_password - computed: false, optional: true, required: false
  private _usePassword?: boolean | cdktf.IResolvable; 
  public get usePassword() {
    return this.getBooleanAttribute('use_password');
  }
  public set usePassword(value: boolean | cdktf.IResolvable) {
    this._usePassword = value;
  }
  public resetUsePassword() {
    this._usePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePasswordInput() {
    return this._usePassword;
  }

  // vcpu - computed: true, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backups: cdktf.booleanToTerraform(this._backups),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      create_public_ip_address: cdktf.booleanToTerraform(this._createPublicIpAddress),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      disk: cdktf.numberToTerraform(this._disk),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.stringToTerraform(this._nodeId),
      plan: cdktf.stringToTerraform(this._plan),
      private_cloud: cdktf.booleanToTerraform(this._privateCloud),
      product: cdktf.stringToTerraform(this._product),
      ram: cdktf.numberToTerraform(this._ram),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      use_password: cdktf.booleanToTerraform(this._usePassword),
      vcpu: cdktf.numberToTerraform(this._vcpu),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backups: {
        value: cdktf.booleanToHclTerraform(this._backups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_public_ip_address: {
        value: cdktf.booleanToHclTerraform(this._createPublicIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.numberToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
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
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_cloud: {
        value: cdktf.booleanToHclTerraform(this._privateCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_password: {
        value: cdktf.booleanToHclTerraform(this._usePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vcpu: {
        value: cdktf.numberToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
