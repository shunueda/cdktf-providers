// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profiles_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPublisherUpgradeProfilesListConfig extends cdktf.TerraformMetaArguments {
}
export interface DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfiles {
}

export function dataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfilesToTerraform(struct?: DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfilesToHclTerraform(struct?: DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // docker_tag - computed: true, optional: false, required: false
  public get dockerTag() {
    return this.getStringAttribute('docker_tag');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_update_time - computed: true, optional: false, required: false
  public get nextUpdateTime() {
    return this.getNumberAttribute('next_update_time');
  }

  // num_associated_publisher - computed: true, optional: false, required: false
  public get numAssociatedPublisher() {
    return this.getNumberAttribute('num_associated_publisher');
  }

  // publisher_upgrade_profile_id - computed: true, optional: false, required: false
  public get publisherUpgradeProfileId() {
    return this.getNumberAttribute('publisher_upgrade_profile_id');
  }

  // release_type - computed: true, optional: false, required: false
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upgrading_stage - computed: true, optional: false, required: false
  public get upgradingStage() {
    return this.getNumberAttribute('upgrading_stage');
  }

  // will_start - computed: true, optional: false, required: false
  public get willStart() {
    return this.getBooleanAttribute('will_start');
  }
}

export class DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfilesOutputReference {
    return new DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPublisherUpgradeProfilesListData {
}

export function dataNetskopeNpaPublisherUpgradeProfilesListDataToTerraform(struct?: DataNetskopeNpaPublisherUpgradeProfilesListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherUpgradeProfilesListDataToHclTerraform(struct?: DataNetskopeNpaPublisherUpgradeProfilesListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherUpgradeProfilesListDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherUpgradeProfilesListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherUpgradeProfilesListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // upgrade_profiles - computed: true, optional: false, required: false
  private _upgradeProfiles = new DataNetskopeNpaPublisherUpgradeProfilesListDataUpgradeProfilesList(this, "upgrade_profiles", false);
  public get upgradeProfiles() {
    return this._upgradeProfiles;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profiles_list netskope_npa_publisher_upgrade_profiles_list}
*/
export class DataNetskopeNpaPublisherUpgradeProfilesList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publisher_upgrade_profiles_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPublisherUpgradeProfilesList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPublisherUpgradeProfilesList to import
  * @param importFromId The id of the existing DataNetskopeNpaPublisherUpgradeProfilesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profiles_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPublisherUpgradeProfilesList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publisher_upgrade_profiles_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profiles_list netskope_npa_publisher_upgrade_profiles_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPublisherUpgradeProfilesListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPublisherUpgradeProfilesListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publisher_upgrade_profiles_list',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataNetskopeNpaPublisherUpgradeProfilesListDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
