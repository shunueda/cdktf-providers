// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/duplo_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudDuploServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/duplo_service#id DataDuplocloudDuploService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/duplo_service#name DataDuplocloudDuploService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/duplo_service#tenant_id DataDuplocloudDuploService#tenant_id}
  */
  readonly tenantId: string;
}
export interface DataDuplocloudDuploServiceTags {
}

export function dataDuplocloudDuploServiceTagsToTerraform(struct?: DataDuplocloudDuploServiceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudDuploServiceTagsToHclTerraform(struct?: DataDuplocloudDuploServiceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudDuploServiceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudDuploServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudDuploServiceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDuplocloudDuploServiceTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudDuploServiceTagsOutputReference {
    return new DataDuplocloudDuploServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/duplo_service duplocloud_duplo_service}
*/
export class DataDuplocloudDuploService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_duplo_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudDuploService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudDuploService to import
  * @param importFromId The id of the existing DataDuplocloudDuploService that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/duplo_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudDuploService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_duplo_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/duplo_service duplocloud_duplo_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudDuploServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudDuploServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_duplo_service',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
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
    this._name = config.name;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_platform - computed: true, optional: false, required: false
  public get agentPlatform() {
    return this.getNumberAttribute('agent_platform');
  }

  // allocation_tags - computed: true, optional: false, required: false
  public get allocationTags() {
    return this.getStringAttribute('allocation_tags');
  }

  // any_host_allowed - computed: true, optional: false, required: false
  public get anyHostAllowed() {
    return this.getBooleanAttribute('any_host_allowed');
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getNumberAttribute('cloud');
  }

  // cloud_creds_from_k8s_service_account - computed: true, optional: false, required: false
  public get cloudCredsFromK8SServiceAccount() {
    return this.getBooleanAttribute('cloud_creds_from_k8s_service_account');
  }

  // commands - computed: true, optional: false, required: false
  public get commands() {
    return this.getListAttribute('commands');
  }

  // docker_image - computed: true, optional: false, required: false
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // extra_config - computed: true, optional: false, required: false
  public get extraConfig() {
    return this.getStringAttribute('extra_config');
  }

  // force_stateful_set - computed: true, optional: false, required: false
  public get forceStatefulSet() {
    return this.getBooleanAttribute('force_stateful_set');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // fqdn_ex - computed: true, optional: false, required: false
  public get fqdnEx() {
    return this.getStringAttribute('fqdn_ex');
  }

  // hpa_specs - computed: true, optional: false, required: false
  public get hpaSpecs() {
    return this.getStringAttribute('hpa_specs');
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

  // is_daemonset - computed: true, optional: false, required: false
  public get isDaemonset() {
    return this.getBooleanAttribute('is_daemonset');
  }

  // is_unique_k8s_node_required - computed: true, optional: false, required: false
  public get isUniqueK8SNodeRequired() {
    return this.getBooleanAttribute('is_unique_k8s_node_required');
  }

  // lb_synced_deployment - computed: true, optional: false, required: false
  public get lbSyncedDeployment() {
    return this.getBooleanAttribute('lb_synced_deployment');
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

  // other_docker_config - computed: true, optional: false, required: false
  public get otherDockerConfig() {
    return this.getStringAttribute('other_docker_config');
  }

  // other_docker_host_config - computed: true, optional: false, required: false
  public get otherDockerHostConfig() {
    return this.getStringAttribute('other_docker_host_config');
  }

  // parent_domain - computed: true, optional: false, required: false
  public get parentDomain() {
    return this.getStringAttribute('parent_domain');
  }

  // replica_collocation_allowed - computed: true, optional: false, required: false
  public get replicaCollocationAllowed() {
    return this.getBooleanAttribute('replica_collocation_allowed');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // replicas_matching_asg_name - computed: true, optional: false, required: false
  public get replicasMatchingAsgName() {
    return this.getStringAttribute('replicas_matching_asg_name');
  }

  // should_spread_across_zones - computed: true, optional: false, required: false
  public get shouldSpreadAcrossZones() {
    return this.getBooleanAttribute('should_spread_across_zones');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataDuplocloudDuploServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // volumes - computed: true, optional: false, required: false
  public get volumes() {
    return this.getStringAttribute('volumes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
