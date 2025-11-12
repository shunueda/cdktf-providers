// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_cme_accounts_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementCmeAccountsAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_cme_accounts_aws#id DataCheckpointManagementCmeAccountsAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique account name for identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_cme_accounts_aws#name DataCheckpointManagementCmeAccountsAws#name}
  */
  readonly name: string;
}
export interface DataCheckpointManagementCmeAccountsAwsSubAccounts {
}

export function dataCheckpointManagementCmeAccountsAwsSubAccountsToTerraform(struct?: DataCheckpointManagementCmeAccountsAwsSubAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementCmeAccountsAwsSubAccountsToHclTerraform(struct?: DataCheckpointManagementCmeAccountsAwsSubAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementCmeAccountsAwsSubAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementCmeAccountsAwsSubAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementCmeAccountsAwsSubAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // credentials_file - computed: true, optional: false, required: false
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // sts_external_id - computed: true, optional: false, required: false
  public get stsExternalId() {
    return this.getStringAttribute('sts_external_id');
  }

  // sts_role - computed: true, optional: false, required: false
  public get stsRole() {
    return this.getStringAttribute('sts_role');
  }
}

export class DataCheckpointManagementCmeAccountsAwsSubAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementCmeAccountsAwsSubAccountsOutputReference {
    return new DataCheckpointManagementCmeAccountsAwsSubAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_cme_accounts_aws checkpoint_management_cme_accounts_aws}
*/
export class DataCheckpointManagementCmeAccountsAws extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_cme_accounts_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementCmeAccountsAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementCmeAccountsAws to import
  * @param importFromId The id of the existing DataCheckpointManagementCmeAccountsAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_cme_accounts_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementCmeAccountsAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_cme_accounts_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_cme_accounts_aws checkpoint_management_cme_accounts_aws} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementCmeAccountsAwsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementCmeAccountsAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_cme_accounts_aws',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // communities - computed: true, optional: false, required: false
  public get communities() {
    return this.getListAttribute('communities');
  }

  // credentials_file - computed: true, optional: false, required: false
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }

  // deletion_tolerance - computed: true, optional: false, required: false
  public get deletionTolerance() {
    return this.getNumberAttribute('deletion_tolerance');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // gw_configurations - computed: true, optional: false, required: false
  public get gwConfigurations() {
    return this.getListAttribute('gw_configurations');
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // scan_gateways - computed: true, optional: false, required: false
  public get scanGateways() {
    return this.getBooleanAttribute('scan_gateways');
  }

  // scan_load_balancers - computed: true, optional: false, required: false
  public get scanLoadBalancers() {
    return this.getBooleanAttribute('scan_load_balancers');
  }

  // scan_subnets - computed: true, optional: false, required: false
  public get scanSubnets() {
    return this.getBooleanAttribute('scan_subnets');
  }

  // scan_subnets_6 - computed: true, optional: false, required: false
  public get scanSubnets6() {
    return this.getBooleanAttribute('scan_subnets_6');
  }

  // scan_vpn - computed: true, optional: false, required: false
  public get scanVpn() {
    return this.getBooleanAttribute('scan_vpn');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // sts_external_id - computed: true, optional: false, required: false
  public get stsExternalId() {
    return this.getStringAttribute('sts_external_id');
  }

  // sts_role - computed: true, optional: false, required: false
  public get stsRole() {
    return this.getStringAttribute('sts_role');
  }

  // sub_accounts - computed: true, optional: false, required: false
  private _subAccounts = new DataCheckpointManagementCmeAccountsAwsSubAccountsList(this, "sub_accounts", false);
  public get subAccounts() {
    return this._subAccounts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
