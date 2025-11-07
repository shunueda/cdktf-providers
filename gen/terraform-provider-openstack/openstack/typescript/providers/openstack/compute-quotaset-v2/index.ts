// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeQuotasetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#cores ComputeQuotasetV2#cores}
  */
  readonly cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#fixed_ips ComputeQuotasetV2#fixed_ips}
  */
  readonly fixedIps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#floating_ips ComputeQuotasetV2#floating_ips}
  */
  readonly floatingIps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#id ComputeQuotasetV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#injected_file_content_bytes ComputeQuotasetV2#injected_file_content_bytes}
  */
  readonly injectedFileContentBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#injected_file_path_bytes ComputeQuotasetV2#injected_file_path_bytes}
  */
  readonly injectedFilePathBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#injected_files ComputeQuotasetV2#injected_files}
  */
  readonly injectedFiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#instances ComputeQuotasetV2#instances}
  */
  readonly instances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#key_pairs ComputeQuotasetV2#key_pairs}
  */
  readonly keyPairs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#metadata_items ComputeQuotasetV2#metadata_items}
  */
  readonly metadataItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#project_id ComputeQuotasetV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#ram ComputeQuotasetV2#ram}
  */
  readonly ram?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#region ComputeQuotasetV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#security_group_rules ComputeQuotasetV2#security_group_rules}
  */
  readonly securityGroupRules?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#security_groups ComputeQuotasetV2#security_groups}
  */
  readonly securityGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#server_group_members ComputeQuotasetV2#server_group_members}
  */
  readonly serverGroupMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#server_groups ComputeQuotasetV2#server_groups}
  */
  readonly serverGroups?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#timeouts ComputeQuotasetV2#timeouts}
  */
  readonly timeouts?: ComputeQuotasetV2Timeouts;
}
export interface ComputeQuotasetV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#create ComputeQuotasetV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#delete ComputeQuotasetV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#update ComputeQuotasetV2#update}
  */
  readonly update?: string;
}

export function computeQuotasetV2TimeoutsToTerraform(struct?: ComputeQuotasetV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function computeQuotasetV2TimeoutsToHclTerraform(struct?: ComputeQuotasetV2Timeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeQuotasetV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeQuotasetV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeQuotasetV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2 openstack_compute_quotaset_v2}
*/
export class ComputeQuotasetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_compute_quotaset_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeQuotasetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeQuotasetV2 to import
  * @param importFromId The id of the existing ComputeQuotasetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeQuotasetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_compute_quotaset_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/compute_quotaset_v2 openstack_compute_quotaset_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeQuotasetV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeQuotasetV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_compute_quotaset_v2',
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
    this._cores = config.cores;
    this._fixedIps = config.fixedIps;
    this._floatingIps = config.floatingIps;
    this._id = config.id;
    this._injectedFileContentBytes = config.injectedFileContentBytes;
    this._injectedFilePathBytes = config.injectedFilePathBytes;
    this._injectedFiles = config.injectedFiles;
    this._instances = config.instances;
    this._keyPairs = config.keyPairs;
    this._metadataItems = config.metadataItems;
    this._projectId = config.projectId;
    this._ram = config.ram;
    this._region = config.region;
    this._securityGroupRules = config.securityGroupRules;
    this._securityGroups = config.securityGroups;
    this._serverGroupMembers = config.serverGroupMembers;
    this._serverGroups = config.serverGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cores - computed: true, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // fixed_ips - computed: true, optional: true, required: false
  private _fixedIps?: number; 
  public get fixedIps() {
    return this.getNumberAttribute('fixed_ips');
  }
  public set fixedIps(value: number) {
    this._fixedIps = value;
  }
  public resetFixedIps() {
    this._fixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpsInput() {
    return this._fixedIps;
  }

  // floating_ips - computed: true, optional: true, required: false
  private _floatingIps?: number; 
  public get floatingIps() {
    return this.getNumberAttribute('floating_ips');
  }
  public set floatingIps(value: number) {
    this._floatingIps = value;
  }
  public resetFloatingIps() {
    this._floatingIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpsInput() {
    return this._floatingIps;
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

  // injected_file_content_bytes - computed: true, optional: true, required: false
  private _injectedFileContentBytes?: number; 
  public get injectedFileContentBytes() {
    return this.getNumberAttribute('injected_file_content_bytes');
  }
  public set injectedFileContentBytes(value: number) {
    this._injectedFileContentBytes = value;
  }
  public resetInjectedFileContentBytes() {
    this._injectedFileContentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectedFileContentBytesInput() {
    return this._injectedFileContentBytes;
  }

  // injected_file_path_bytes - computed: true, optional: true, required: false
  private _injectedFilePathBytes?: number; 
  public get injectedFilePathBytes() {
    return this.getNumberAttribute('injected_file_path_bytes');
  }
  public set injectedFilePathBytes(value: number) {
    this._injectedFilePathBytes = value;
  }
  public resetInjectedFilePathBytes() {
    this._injectedFilePathBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectedFilePathBytesInput() {
    return this._injectedFilePathBytes;
  }

  // injected_files - computed: true, optional: true, required: false
  private _injectedFiles?: number; 
  public get injectedFiles() {
    return this.getNumberAttribute('injected_files');
  }
  public set injectedFiles(value: number) {
    this._injectedFiles = value;
  }
  public resetInjectedFiles() {
    this._injectedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectedFilesInput() {
    return this._injectedFiles;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // key_pairs - computed: true, optional: true, required: false
  private _keyPairs?: number; 
  public get keyPairs() {
    return this.getNumberAttribute('key_pairs');
  }
  public set keyPairs(value: number) {
    this._keyPairs = value;
  }
  public resetKeyPairs() {
    this._keyPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairsInput() {
    return this._keyPairs;
  }

  // metadata_items - computed: true, optional: true, required: false
  private _metadataItems?: number; 
  public get metadataItems() {
    return this.getNumberAttribute('metadata_items');
  }
  public set metadataItems(value: number) {
    this._metadataItems = value;
  }
  public resetMetadataItems() {
    this._metadataItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataItemsInput() {
    return this._metadataItems;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // security_group_rules - computed: true, optional: true, required: false
  private _securityGroupRules?: number; 
  public get securityGroupRules() {
    return this.getNumberAttribute('security_group_rules');
  }
  public set securityGroupRules(value: number) {
    this._securityGroupRules = value;
  }
  public resetSecurityGroupRules() {
    this._securityGroupRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRulesInput() {
    return this._securityGroupRules;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: number; 
  public get securityGroups() {
    return this.getNumberAttribute('security_groups');
  }
  public set securityGroups(value: number) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // server_group_members - computed: true, optional: true, required: false
  private _serverGroupMembers?: number; 
  public get serverGroupMembers() {
    return this.getNumberAttribute('server_group_members');
  }
  public set serverGroupMembers(value: number) {
    this._serverGroupMembers = value;
  }
  public resetServerGroupMembers() {
    this._serverGroupMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupMembersInput() {
    return this._serverGroupMembers;
  }

  // server_groups - computed: true, optional: true, required: false
  private _serverGroups?: number; 
  public get serverGroups() {
    return this.getNumberAttribute('server_groups');
  }
  public set serverGroups(value: number) {
    this._serverGroups = value;
  }
  public resetServerGroups() {
    this._serverGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupsInput() {
    return this._serverGroups;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeQuotasetV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeQuotasetV2Timeouts) {
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
      cores: cdktf.numberToTerraform(this._cores),
      fixed_ips: cdktf.numberToTerraform(this._fixedIps),
      floating_ips: cdktf.numberToTerraform(this._floatingIps),
      id: cdktf.stringToTerraform(this._id),
      injected_file_content_bytes: cdktf.numberToTerraform(this._injectedFileContentBytes),
      injected_file_path_bytes: cdktf.numberToTerraform(this._injectedFilePathBytes),
      injected_files: cdktf.numberToTerraform(this._injectedFiles),
      instances: cdktf.numberToTerraform(this._instances),
      key_pairs: cdktf.numberToTerraform(this._keyPairs),
      metadata_items: cdktf.numberToTerraform(this._metadataItems),
      project_id: cdktf.stringToTerraform(this._projectId),
      ram: cdktf.numberToTerraform(this._ram),
      region: cdktf.stringToTerraform(this._region),
      security_group_rules: cdktf.numberToTerraform(this._securityGroupRules),
      security_groups: cdktf.numberToTerraform(this._securityGroups),
      server_group_members: cdktf.numberToTerraform(this._serverGroupMembers),
      server_groups: cdktf.numberToTerraform(this._serverGroups),
      timeouts: computeQuotasetV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_ips: {
        value: cdktf.numberToHclTerraform(this._fixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      floating_ips: {
        value: cdktf.numberToHclTerraform(this._floatingIps),
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
      injected_file_content_bytes: {
        value: cdktf.numberToHclTerraform(this._injectedFileContentBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      injected_file_path_bytes: {
        value: cdktf.numberToHclTerraform(this._injectedFilePathBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      injected_files: {
        value: cdktf.numberToHclTerraform(this._injectedFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instances: {
        value: cdktf.numberToHclTerraform(this._instances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_pairs: {
        value: cdktf.numberToHclTerraform(this._keyPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata_items: {
        value: cdktf.numberToHclTerraform(this._metadataItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_rules: {
        value: cdktf.numberToHclTerraform(this._securityGroupRules),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_groups: {
        value: cdktf.numberToHclTerraform(this._securityGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_group_members: {
        value: cdktf.numberToHclTerraform(this._serverGroupMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_groups: {
        value: cdktf.numberToHclTerraform(this._serverGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: computeQuotasetV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeQuotasetV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
