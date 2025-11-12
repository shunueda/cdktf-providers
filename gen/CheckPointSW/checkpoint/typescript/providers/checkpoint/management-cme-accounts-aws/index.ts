// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCmeAccountsAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#access_key ManagementCmeAccountsAws#access_key}
  */
  readonly accessKey?: string;
  /**
  * AWS communities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#communities ManagementCmeAccountsAws#communities}
  */
  readonly communities?: string[];
  /**
  * The credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#credentials_file ManagementCmeAccountsAws#credentials_file}
  */
  readonly credentialsFile?: string;
  /**
  * The number of CME cycles to wait when the cloud provider does not return a GW until its deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#deletion_tolerance ManagementCmeAccountsAws#deletion_tolerance}
  */
  readonly deletionTolerance?: number;
  /**
  * The account's domain name in MDS environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#domain ManagementCmeAccountsAws#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#id ManagementCmeAccountsAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique account name for identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#name ManagementCmeAccountsAws#name}
  */
  readonly name: string;
  /**
  * Comma-separated list of AWS regions, in which the gateways are being deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#regions ManagementCmeAccountsAws#regions}
  */
  readonly regions: string[];
  /**
  * Set true in order to scan gateways with AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#scan_gateways ManagementCmeAccountsAws#scan_gateways}
  */
  readonly scanGateways?: boolean | cdktf.IResolvable;
  /**
  * Set true in order to scan load balancers access and NAT rules with AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#scan_load_balancers ManagementCmeAccountsAws#scan_load_balancers}
  */
  readonly scanLoadBalancers?: boolean | cdktf.IResolvable;
  /**
  * Set true in order to scan subnets with AWS GWLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#scan_subnets ManagementCmeAccountsAws#scan_subnets}
  */
  readonly scanSubnets?: boolean | cdktf.IResolvable;
  /**
  * Set true in order to scan IPv6 subnets with AWS GWLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#scan_subnets_6 ManagementCmeAccountsAws#scan_subnets_6}
  */
  readonly scanSubnets6?: boolean | cdktf.IResolvable;
  /**
  * Set true in order to scan vpn with AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#scan_vpn ManagementCmeAccountsAws#scan_vpn}
  */
  readonly scanVpn?: boolean | cdktf.IResolvable;
  /**
  * AWS secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#secret_key ManagementCmeAccountsAws#secret_key}
  */
  readonly secretKey?: string;
  /**
  * AWS sts external id, must exist with sts role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#sts_external_id ManagementCmeAccountsAws#sts_external_id}
  */
  readonly stsExternalId?: string;
  /**
  * AWS sts role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#sts_role ManagementCmeAccountsAws#sts_role}
  */
  readonly stsRole?: string;
  /**
  * sub_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#sub_accounts ManagementCmeAccountsAws#sub_accounts}
  */
  readonly subAccounts?: ManagementCmeAccountsAwsSubAccounts[] | cdktf.IResolvable;
}
export interface ManagementCmeAccountsAwsSubAccounts {
  /**
  * AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#access_key ManagementCmeAccountsAws#access_key}
  */
  readonly accessKey?: string;
  /**
  * The credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#credentials_file ManagementCmeAccountsAws#credentials_file}
  */
  readonly credentialsFile?: string;
  /**
  * Unique account name for identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#name ManagementCmeAccountsAws#name}
  */
  readonly name: string;
  /**
  * AWS secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#secret_key ManagementCmeAccountsAws#secret_key}
  */
  readonly secretKey?: string;
  /**
  * AWS sts external id, must exist with sts role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#sts_external_id ManagementCmeAccountsAws#sts_external_id}
  */
  readonly stsExternalId?: string;
  /**
  * AWS sts role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#sts_role ManagementCmeAccountsAws#sts_role}
  */
  readonly stsRole?: string;
}

export function managementCmeAccountsAwsSubAccountsToTerraform(struct?: ManagementCmeAccountsAwsSubAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
    name: cdktf.stringToTerraform(struct!.name),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    sts_external_id: cdktf.stringToTerraform(struct!.stsExternalId),
    sts_role: cdktf.stringToTerraform(struct!.stsRole),
  }
}


export function managementCmeAccountsAwsSubAccountsToHclTerraform(struct?: ManagementCmeAccountsAwsSubAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sts_external_id: {
      value: cdktf.stringToHclTerraform(struct!.stsExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sts_role: {
      value: cdktf.stringToHclTerraform(struct!.stsRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementCmeAccountsAwsSubAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementCmeAccountsAwsSubAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._stsExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsExternalId = this._stsExternalId;
    }
    if (this._stsRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsRole = this._stsRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCmeAccountsAwsSubAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._credentialsFile = undefined;
      this._name = undefined;
      this._secretKey = undefined;
      this._stsExternalId = undefined;
      this._stsRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._credentialsFile = value.credentialsFile;
      this._name = value.name;
      this._secretKey = value.secretKey;
      this._stsExternalId = value.stsExternalId;
      this._stsRole = value.stsRole;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // sts_external_id - computed: false, optional: true, required: false
  private _stsExternalId?: string; 
  public get stsExternalId() {
    return this.getStringAttribute('sts_external_id');
  }
  public set stsExternalId(value: string) {
    this._stsExternalId = value;
  }
  public resetStsExternalId() {
    this._stsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsExternalIdInput() {
    return this._stsExternalId;
  }

  // sts_role - computed: false, optional: true, required: false
  private _stsRole?: string; 
  public get stsRole() {
    return this.getStringAttribute('sts_role');
  }
  public set stsRole(value: string) {
    this._stsRole = value;
  }
  public resetStsRole() {
    this._stsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRoleInput() {
    return this._stsRole;
  }
}

export class ManagementCmeAccountsAwsSubAccountsList extends cdktf.ComplexList {
  public internalValue? : ManagementCmeAccountsAwsSubAccounts[] | cdktf.IResolvable

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
  public get(index: number): ManagementCmeAccountsAwsSubAccountsOutputReference {
    return new ManagementCmeAccountsAwsSubAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws checkpoint_management_cme_accounts_aws}
*/
export class ManagementCmeAccountsAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_cme_accounts_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCmeAccountsAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCmeAccountsAws to import
  * @param importFromId The id of the existing ManagementCmeAccountsAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCmeAccountsAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_cme_accounts_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_accounts_aws checkpoint_management_cme_accounts_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCmeAccountsAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCmeAccountsAwsConfig) {
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
    this._accessKey = config.accessKey;
    this._communities = config.communities;
    this._credentialsFile = config.credentialsFile;
    this._deletionTolerance = config.deletionTolerance;
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._regions = config.regions;
    this._scanGateways = config.scanGateways;
    this._scanLoadBalancers = config.scanLoadBalancers;
    this._scanSubnets = config.scanSubnets;
    this._scanSubnets6 = config.scanSubnets6;
    this._scanVpn = config.scanVpn;
    this._secretKey = config.secretKey;
    this._stsExternalId = config.stsExternalId;
    this._stsRole = config.stsRole;
    this._subAccounts.internalValue = config.subAccounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // communities - computed: false, optional: true, required: false
  private _communities?: string[]; 
  public get communities() {
    return this.getListAttribute('communities');
  }
  public set communities(value: string[]) {
    this._communities = value;
  }
  public resetCommunities() {
    this._communities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities;
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }

  // deletion_tolerance - computed: false, optional: true, required: false
  private _deletionTolerance?: number; 
  public get deletionTolerance() {
    return this.getNumberAttribute('deletion_tolerance');
  }
  public set deletionTolerance(value: number) {
    this._deletionTolerance = value;
  }
  public resetDeletionTolerance() {
    this._deletionTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionToleranceInput() {
    return this._deletionTolerance;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // scan_gateways - computed: false, optional: true, required: false
  private _scanGateways?: boolean | cdktf.IResolvable; 
  public get scanGateways() {
    return this.getBooleanAttribute('scan_gateways');
  }
  public set scanGateways(value: boolean | cdktf.IResolvable) {
    this._scanGateways = value;
  }
  public resetScanGateways() {
    this._scanGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanGatewaysInput() {
    return this._scanGateways;
  }

  // scan_load_balancers - computed: false, optional: true, required: false
  private _scanLoadBalancers?: boolean | cdktf.IResolvable; 
  public get scanLoadBalancers() {
    return this.getBooleanAttribute('scan_load_balancers');
  }
  public set scanLoadBalancers(value: boolean | cdktf.IResolvable) {
    this._scanLoadBalancers = value;
  }
  public resetScanLoadBalancers() {
    this._scanLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanLoadBalancersInput() {
    return this._scanLoadBalancers;
  }

  // scan_subnets - computed: false, optional: true, required: false
  private _scanSubnets?: boolean | cdktf.IResolvable; 
  public get scanSubnets() {
    return this.getBooleanAttribute('scan_subnets');
  }
  public set scanSubnets(value: boolean | cdktf.IResolvable) {
    this._scanSubnets = value;
  }
  public resetScanSubnets() {
    this._scanSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanSubnetsInput() {
    return this._scanSubnets;
  }

  // scan_subnets_6 - computed: false, optional: true, required: false
  private _scanSubnets6?: boolean | cdktf.IResolvable; 
  public get scanSubnets6() {
    return this.getBooleanAttribute('scan_subnets_6');
  }
  public set scanSubnets6(value: boolean | cdktf.IResolvable) {
    this._scanSubnets6 = value;
  }
  public resetScanSubnets6() {
    this._scanSubnets6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanSubnets6Input() {
    return this._scanSubnets6;
  }

  // scan_vpn - computed: false, optional: true, required: false
  private _scanVpn?: boolean | cdktf.IResolvable; 
  public get scanVpn() {
    return this.getBooleanAttribute('scan_vpn');
  }
  public set scanVpn(value: boolean | cdktf.IResolvable) {
    this._scanVpn = value;
  }
  public resetScanVpn() {
    this._scanVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanVpnInput() {
    return this._scanVpn;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // sts_external_id - computed: false, optional: true, required: false
  private _stsExternalId?: string; 
  public get stsExternalId() {
    return this.getStringAttribute('sts_external_id');
  }
  public set stsExternalId(value: string) {
    this._stsExternalId = value;
  }
  public resetStsExternalId() {
    this._stsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsExternalIdInput() {
    return this._stsExternalId;
  }

  // sts_role - computed: false, optional: true, required: false
  private _stsRole?: string; 
  public get stsRole() {
    return this.getStringAttribute('sts_role');
  }
  public set stsRole(value: string) {
    this._stsRole = value;
  }
  public resetStsRole() {
    this._stsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRoleInput() {
    return this._stsRole;
  }

  // sub_accounts - computed: false, optional: true, required: false
  private _subAccounts = new ManagementCmeAccountsAwsSubAccountsList(this, "sub_accounts", false);
  public get subAccounts() {
    return this._subAccounts;
  }
  public putSubAccounts(value: ManagementCmeAccountsAwsSubAccounts[] | cdktf.IResolvable) {
    this._subAccounts.internalValue = value;
  }
  public resetSubAccounts() {
    this._subAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAccountsInput() {
    return this._subAccounts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      communities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._communities),
      credentials_file: cdktf.stringToTerraform(this._credentialsFile),
      deletion_tolerance: cdktf.numberToTerraform(this._deletionTolerance),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      scan_gateways: cdktf.booleanToTerraform(this._scanGateways),
      scan_load_balancers: cdktf.booleanToTerraform(this._scanLoadBalancers),
      scan_subnets: cdktf.booleanToTerraform(this._scanSubnets),
      scan_subnets_6: cdktf.booleanToTerraform(this._scanSubnets6),
      scan_vpn: cdktf.booleanToTerraform(this._scanVpn),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      sts_external_id: cdktf.stringToTerraform(this._stsExternalId),
      sts_role: cdktf.stringToTerraform(this._stsRole),
      sub_accounts: cdktf.listMapper(managementCmeAccountsAwsSubAccountsToTerraform, true)(this._subAccounts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._communities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      credentials_file: {
        value: cdktf.stringToHclTerraform(this._credentialsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_tolerance: {
        value: cdktf.numberToHclTerraform(this._deletionTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scan_gateways: {
        value: cdktf.booleanToHclTerraform(this._scanGateways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_load_balancers: {
        value: cdktf.booleanToHclTerraform(this._scanLoadBalancers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_subnets: {
        value: cdktf.booleanToHclTerraform(this._scanSubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_subnets_6: {
        value: cdktf.booleanToHclTerraform(this._scanSubnets6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_vpn: {
        value: cdktf.booleanToHclTerraform(this._scanVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_external_id: {
        value: cdktf.stringToHclTerraform(this._stsExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_role: {
        value: cdktf.stringToHclTerraform(this._stsRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_accounts: {
        value: cdktf.listMapperHcl(managementCmeAccountsAwsSubAccountsToHclTerraform, true)(this._subAccounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementCmeAccountsAwsSubAccountsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
