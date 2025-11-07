// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWizSubscriptionResourceGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * How many matches to return.
  *     - Defaults to `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}
  */
  readonly first?: number;
  /**
  * Relationship type, will default to `CONTAINS` if not specified.
  *     - Allowed values: 
  *         - ANY
  *         - ANY_OUTGOING
  *         - ACTING_AS
  *         - ADMINISTRATE
  *         - ALERTED_ON
  *         - ALLOWS
  *         - ALLOWS_ACCESS_TO
  *         - APPLIES_TO
  *         - ASSIGNED_TO
  *         - ATTACHED_TO
  *         - BEHIND
  *         - BOOTS
  *         - BUILT_FROM
  *         - CAUSES
  *         - COLLABORATES
  *         - CONNECTED_TO
  *         - CONTAINS
  *         - CONTAINS_DST_IP_RANGE
  *         - CONTAINS_DST_PORT_RANGE
  *         - CONTAINS_SRC_IP_RANGE
  *         - CONTAINS_SRC_PORT_RANGE
  *         - DENIES
  *         - DEPENDS_ON
  *         - DEPLOYED_TO
  *         - ENCRYPTS
  *         - ENCRYPTS_PARTITION
  *         - ENTITLES
  *         - EXCLUDES
  *         - EXPOSES
  *         - GOVERNS
  *         - HAS
  *         - HAS_BOUNDARY_POLICY
  *         - HAS_DATA_FINDING
  *         - HAS_DATA_INVENTORY
  *         - HAS_DATA_SCHEMA
  *         - HAS_DATA_STORE
  *         - HAS_ORGANIZATION_POLICY
  *         - HAS_PRINCIPAL_POLICY
  *         - HAS_RESOURCE_POLICY
  *         - HAS_SNAPSHOT
  *         - HAS_SOURCE
  *         - HAS_STANDARD_WEB_ACCESS_FROM
  *         - HAS_TECH
  *         - HOSTS
  *         - IGNORES
  *         - IMPLEMENTS
  *         - INCLUDES
  *         - INFECTS
  *         - INSIDE
  *         - INSTANCE_OF
  *         - INVOKES
  *         - LOGS_DATA_FOR
  *         - MANAGES
  *         - MOUNTS
  *         - OWNS
  *         - PART_OF
  *         - PEERED_TO
  *         - PERFORMED
  *         - PERFORMED_IMPERSONATED
  *         - PERMITS
  *         - POINTS_TO
  *         - PROTECTS
  *         - READS_DATA_FROM
  *         - REFERENCED_BY
  *         - REPLICA_OF
  *         - ROUTES_TRAFFIC_FROM
  *         - ROUTES_TRAFFIC_TO
  *         - RUNS
  *         - SCANNED
  *         - SEND_MESSAGES_TO
  *         - SERVES
  *         - STORES_DATA_IN
  *         - TRANSIT_PEERED_TO
  *         - USES
  *         - VALIDATES
  * 
  *     - Defaults to `CONTAINS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}
  */
  readonly relationshipType?: string;
  /**
  * The Wiz subscription ID to search by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}
  */
  readonly subscriptionId?: string;
}
export interface DataWizSubscriptionResourceGroupsResourceGroups {
}

export function dataWizSubscriptionResourceGroupsResourceGroupsToTerraform(struct?: DataWizSubscriptionResourceGroupsResourceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWizSubscriptionResourceGroupsResourceGroupsToHclTerraform(struct?: DataWizSubscriptionResourceGroupsResourceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWizSubscriptionResourceGroupsResourceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWizSubscriptionResourceGroupsResourceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizSubscriptionResourceGroupsResourceGroups | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataWizSubscriptionResourceGroupsResourceGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataWizSubscriptionResourceGroupsResourceGroupsOutputReference {
    return new DataWizSubscriptionResourceGroupsResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups wiz_subscription_resource_groups}
*/
export class DataWizSubscriptionResourceGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_subscription_resource_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWizSubscriptionResourceGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWizSubscriptionResourceGroups to import
  * @param importFromId The id of the existing DataWizSubscriptionResourceGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWizSubscriptionResourceGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_subscription_resource_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups wiz_subscription_resource_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWizSubscriptionResourceGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWizSubscriptionResourceGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wiz_subscription_resource_groups',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._first = config.first;
    this._relationshipType = config.relationshipType;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first - computed: false, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // relationship_type - computed: false, optional: true, required: false
  private _relationshipType?: string; 
  public get relationshipType() {
    return this.getStringAttribute('relationship_type');
  }
  public set relationshipType(value: string) {
    this._relationshipType = value;
  }
  public resetRelationshipType() {
    this._relationshipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipTypeInput() {
    return this._relationshipType;
  }

  // resource_groups - computed: true, optional: false, required: false
  private _resourceGroups = new DataWizSubscriptionResourceGroupsResourceGroupsList(this, "resource_groups", true);
  public get resourceGroups() {
    return this._resourceGroups;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      first: cdktf.numberToTerraform(this._first),
      relationship_type: cdktf.stringToTerraform(this._relationshipType),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      first: {
        value: cdktf.numberToHclTerraform(this._first),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      relationship_type: {
        value: cdktf.stringToHclTerraform(this._relationshipType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
