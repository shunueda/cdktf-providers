// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name. This can be used for logging in to CloudN console or UserConnect controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#account_name Account#account_name}
  */
  readonly accountName: string;
  /**
  * Alibaba Cloud Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#alicloud_access_key Account#alicloud_access_key}
  */
  readonly alicloudAccessKey?: string;
  /**
  * Alibaba Cloud Account ID to associate with Aviatrix account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#alicloud_account_id Account#alicloud_account_id}
  */
  readonly alicloudAccountId?: string;
  /**
  * Alibaba Cloud Secret Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#alicloud_secret_key Account#alicloud_secret_key}
  */
  readonly alicloudSecretKey?: string;
  /**
  * Azure Application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#arm_application_id Account#arm_application_id}
  */
  readonly armApplicationId?: string;
  /**
  * Azure Application Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#arm_application_key Account#arm_application_key}
  */
  readonly armApplicationKey?: string;
  /**
  * Azure Directory ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#arm_directory_id Account#arm_directory_id}
  */
  readonly armDirectoryId?: string;
  /**
  * Azure Subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#arm_subscription_id Account#arm_subscription_id}
  */
  readonly armSubscriptionId?: string;
  /**
  * Enable account audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#audit_account Account#audit_account}
  */
  readonly auditAccount?: boolean | cdktf.IResolvable;
  /**
  * AWS Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_access_key Account#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * AWS Account number to associate with Aviatrix account. Should be 12 digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_account_number Account#aws_account_number}
  */
  readonly awsAccountNumber?: string;
  /**
  * AWS App role ARN for gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_gateway_role_app Account#aws_gateway_role_app}
  */
  readonly awsGatewayRoleApp?: string;
  /**
  * AWS EC2 role ARN for gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_gateway_role_ec2 Account#aws_gateway_role_ec2}
  */
  readonly awsGatewayRoleEc2?: string;
  /**
  * AWS IAM-role based flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_iam Account#aws_iam}
  */
  readonly awsIam?: boolean | cdktf.IResolvable;
  /**
  * AWS App role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_role_app Account#aws_role_app}
  */
  readonly awsRoleApp?: string;
  /**
  * AWS EC2 role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_role_ec2 Account#aws_role_ec2}
  */
  readonly awsRoleEc2?: string;
  /**
  * AWS Secret Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#aws_secret_key Account#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * AWS China Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awschina_access_key Account#awschina_access_key}
  */
  readonly awschinaAccessKey?: string;
  /**
  * AWS China Account Number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awschina_account_number Account#awschina_account_number}
  */
  readonly awschinaAccountNumber?: string;
  /**
  * AWS China IAM-role based flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awschina_iam Account#awschina_iam}
  */
  readonly awschinaIam?: boolean | cdktf.IResolvable;
  /**
  * AWS China App Role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awschina_role_app Account#awschina_role_app}
  */
  readonly awschinaRoleApp?: string;
  /**
  * AWS China EC2 Role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awschina_role_ec2 Account#awschina_role_ec2}
  */
  readonly awschinaRoleEc2?: string;
  /**
  * AWS China Secret Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awschina_secret_key Account#awschina_secret_key}
  */
  readonly awschinaSecretKey?: string;
  /**
  * AWS Gov Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsgov_access_key Account#awsgov_access_key}
  */
  readonly awsgovAccessKey?: string;
  /**
  * AWS Gov Account number to associate with Aviatrix account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsgov_account_number Account#awsgov_account_number}
  */
  readonly awsgovAccountNumber?: string;
  /**
  * AWSGov IAM-role based flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsgov_iam Account#awsgov_iam}
  */
  readonly awsgovIam?: boolean | cdktf.IResolvable;
  /**
  * AWSGov App role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsgov_role_app Account#awsgov_role_app}
  */
  readonly awsgovRoleApp?: string;
  /**
  * AWSGov EC2 role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsgov_role_ec2 Account#awsgov_role_ec2}
  */
  readonly awsgovRoleEc2?: string;
  /**
  * AWS Gov Secret Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsgov_secret_key Account#awsgov_secret_key}
  */
  readonly awsgovSecretKey?: string;
  /**
  * AWS Secret Region Account Number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_account_number Account#awss_account_number}
  */
  readonly awssAccountNumber?: string;
  /**
  * AWS Secret Region Custom Certificate Authority file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_ca_chain_cert Account#awss_ca_chain_cert}
  */
  readonly awssCaChainCert?: string;
  /**
  * AWS Secret Region CAP Account Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_cap_account_name Account#awss_cap_account_name}
  */
  readonly awssCapAccountName?: string;
  /**
  * AWS Secret Region CAP Agency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_cap_agency Account#awss_cap_agency}
  */
  readonly awssCapAgency?: string;
  /**
  * AWS Secret Region CAP Certificate file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_cap_cert Account#awss_cap_cert}
  */
  readonly awssCapCert?: string;
  /**
  * AWS Secret Region CAP Certificate Key file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_cap_cert_key Account#awss_cap_cert_key}
  */
  readonly awssCapCertKey?: string;
  /**
  * AWS Secret Region CAP Role Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_cap_role_name Account#awss_cap_role_name}
  */
  readonly awssCapRoleName?: string;
  /**
  * AWS Secret Region CAP Endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awss_cap_url Account#awss_cap_url}
  */
  readonly awssCapUrl?: string;
  /**
  * AWS Top Secret Region Account Number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_account_number Account#awsts_account_number}
  */
  readonly awstsAccountNumber?: string;
  /**
  * AWS Top Secret Region Custom Certificate Authority file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_ca_chain_cert Account#awsts_ca_chain_cert}
  */
  readonly awstsCaChainCert?: string;
  /**
  * AWS Top Secret Region CAP Agency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_cap_agency Account#awsts_cap_agency}
  */
  readonly awstsCapAgency?: string;
  /**
  * AWS Top Secret Region CAP Certificate file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_cap_cert Account#awsts_cap_cert}
  */
  readonly awstsCapCert?: string;
  /**
  * AWS Top Secret Region CAP Certificate Key file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_cap_cert_key Account#awsts_cap_cert_key}
  */
  readonly awstsCapCertKey?: string;
  /**
  * AWS Top Secret Region CAP Mission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_cap_mission Account#awsts_cap_mission}
  */
  readonly awstsCapMission?: string;
  /**
  * AWS Top Secret Region CAP Role Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_cap_role_name Account#awsts_cap_role_name}
  */
  readonly awstsCapRoleName?: string;
  /**
  * AWS Top Secret Region CAP Endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#awsts_cap_url Account#awsts_cap_url}
  */
  readonly awstsCapUrl?: string;
  /**
  * Azure China Application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azurechina_application_id Account#azurechina_application_id}
  */
  readonly azurechinaApplicationId?: string;
  /**
  * Azure China Application Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azurechina_application_key Account#azurechina_application_key}
  */
  readonly azurechinaApplicationKey?: string;
  /**
  * Azure China Directory ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azurechina_directory_id Account#azurechina_directory_id}
  */
  readonly azurechinaDirectoryId?: string;
  /**
  * Azure China Subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azurechina_subscription_id Account#azurechina_subscription_id}
  */
  readonly azurechinaSubscriptionId?: string;
  /**
  * Azure Gov Application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azuregov_application_id Account#azuregov_application_id}
  */
  readonly azuregovApplicationId?: string;
  /**
  * Azure Gov Application Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azuregov_application_key Account#azuregov_application_key}
  */
  readonly azuregovApplicationKey?: string;
  /**
  * Azure Gov Directory ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azuregov_directory_id Account#azuregov_directory_id}
  */
  readonly azuregovDirectoryId?: string;
  /**
  * Azure Gov Subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#azuregov_subscription_id Account#azuregov_subscription_id}
  */
  readonly azuregovSubscriptionId?: string;
  /**
  * Type of cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#cloud_type Account#cloud_type}
  */
  readonly cloudType: number;
  /**
  * Edge CSP API endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#edge_csp_api_endpoint Account#edge_csp_api_endpoint}
  */
  readonly edgeCspApiEndpoint?: string;
  /**
  * Edge CSP password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#edge_csp_password Account#edge_csp_password}
  */
  readonly edgeCspPassword?: string;
  /**
  * Edge CSP username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#edge_csp_username Account#edge_csp_username}
  */
  readonly edgeCspUsername?: string;
  /**
  * Edge Zededa password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#edge_zededa_password Account#edge_zededa_password}
  */
  readonly edgeZededaPassword?: string;
  /**
  * Edge Zededa username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#edge_zededa_username Account#edge_zededa_username}
  */
  readonly edgeZededaUsername?: string;
  /**
  * GCloud Project credentials local file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#gcloud_project_credentials_filepath Account#gcloud_project_credentials_filepath}
  */
  readonly gcloudProjectCredentialsFilepath?: string;
  /**
  * GCloud Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#gcloud_project_id Account#gcloud_project_id}
  */
  readonly gcloudProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#id Account#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * OCI API Private Key local file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#oci_api_private_key_filepath Account#oci_api_private_key_filepath}
  */
  readonly ociApiPrivateKeyFilepath?: string;
  /**
  * OCI Compartment OCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#oci_compartment_id Account#oci_compartment_id}
  */
  readonly ociCompartmentId?: string;
  /**
  * OCI Tenancy OCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#oci_tenancy_id Account#oci_tenancy_id}
  */
  readonly ociTenancyId?: string;
  /**
  * OCI User OCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#oci_user_id Account#oci_user_id}
  */
  readonly ociUserId?: string;
  /**
  * List of RBAC permission group names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#rbac_groups Account#rbac_groups}
  */
  readonly rbacGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account aviatrix_account}
*/
export class Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/account aviatrix_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig
  */
  public constructor(scope: Construct, id: string, config: AccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_account',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._alicloudAccessKey = config.alicloudAccessKey;
    this._alicloudAccountId = config.alicloudAccountId;
    this._alicloudSecretKey = config.alicloudSecretKey;
    this._armApplicationId = config.armApplicationId;
    this._armApplicationKey = config.armApplicationKey;
    this._armDirectoryId = config.armDirectoryId;
    this._armSubscriptionId = config.armSubscriptionId;
    this._auditAccount = config.auditAccount;
    this._awsAccessKey = config.awsAccessKey;
    this._awsAccountNumber = config.awsAccountNumber;
    this._awsGatewayRoleApp = config.awsGatewayRoleApp;
    this._awsGatewayRoleEc2 = config.awsGatewayRoleEc2;
    this._awsIam = config.awsIam;
    this._awsRoleApp = config.awsRoleApp;
    this._awsRoleEc2 = config.awsRoleEc2;
    this._awsSecretKey = config.awsSecretKey;
    this._awschinaAccessKey = config.awschinaAccessKey;
    this._awschinaAccountNumber = config.awschinaAccountNumber;
    this._awschinaIam = config.awschinaIam;
    this._awschinaRoleApp = config.awschinaRoleApp;
    this._awschinaRoleEc2 = config.awschinaRoleEc2;
    this._awschinaSecretKey = config.awschinaSecretKey;
    this._awsgovAccessKey = config.awsgovAccessKey;
    this._awsgovAccountNumber = config.awsgovAccountNumber;
    this._awsgovIam = config.awsgovIam;
    this._awsgovRoleApp = config.awsgovRoleApp;
    this._awsgovRoleEc2 = config.awsgovRoleEc2;
    this._awsgovSecretKey = config.awsgovSecretKey;
    this._awssAccountNumber = config.awssAccountNumber;
    this._awssCaChainCert = config.awssCaChainCert;
    this._awssCapAccountName = config.awssCapAccountName;
    this._awssCapAgency = config.awssCapAgency;
    this._awssCapCert = config.awssCapCert;
    this._awssCapCertKey = config.awssCapCertKey;
    this._awssCapRoleName = config.awssCapRoleName;
    this._awssCapUrl = config.awssCapUrl;
    this._awstsAccountNumber = config.awstsAccountNumber;
    this._awstsCaChainCert = config.awstsCaChainCert;
    this._awstsCapAgency = config.awstsCapAgency;
    this._awstsCapCert = config.awstsCapCert;
    this._awstsCapCertKey = config.awstsCapCertKey;
    this._awstsCapMission = config.awstsCapMission;
    this._awstsCapRoleName = config.awstsCapRoleName;
    this._awstsCapUrl = config.awstsCapUrl;
    this._azurechinaApplicationId = config.azurechinaApplicationId;
    this._azurechinaApplicationKey = config.azurechinaApplicationKey;
    this._azurechinaDirectoryId = config.azurechinaDirectoryId;
    this._azurechinaSubscriptionId = config.azurechinaSubscriptionId;
    this._azuregovApplicationId = config.azuregovApplicationId;
    this._azuregovApplicationKey = config.azuregovApplicationKey;
    this._azuregovDirectoryId = config.azuregovDirectoryId;
    this._azuregovSubscriptionId = config.azuregovSubscriptionId;
    this._cloudType = config.cloudType;
    this._edgeCspApiEndpoint = config.edgeCspApiEndpoint;
    this._edgeCspPassword = config.edgeCspPassword;
    this._edgeCspUsername = config.edgeCspUsername;
    this._edgeZededaPassword = config.edgeZededaPassword;
    this._edgeZededaUsername = config.edgeZededaUsername;
    this._gcloudProjectCredentialsFilepath = config.gcloudProjectCredentialsFilepath;
    this._gcloudProjectId = config.gcloudProjectId;
    this._id = config.id;
    this._ociApiPrivateKeyFilepath = config.ociApiPrivateKeyFilepath;
    this._ociCompartmentId = config.ociCompartmentId;
    this._ociTenancyId = config.ociTenancyId;
    this._ociUserId = config.ociUserId;
    this._rbacGroups = config.rbacGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // alicloud_access_key - computed: false, optional: true, required: false
  private _alicloudAccessKey?: string; 
  public get alicloudAccessKey() {
    return this.getStringAttribute('alicloud_access_key');
  }
  public set alicloudAccessKey(value: string) {
    this._alicloudAccessKey = value;
  }
  public resetAlicloudAccessKey() {
    this._alicloudAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudAccessKeyInput() {
    return this._alicloudAccessKey;
  }

  // alicloud_account_id - computed: false, optional: true, required: false
  private _alicloudAccountId?: string; 
  public get alicloudAccountId() {
    return this.getStringAttribute('alicloud_account_id');
  }
  public set alicloudAccountId(value: string) {
    this._alicloudAccountId = value;
  }
  public resetAlicloudAccountId() {
    this._alicloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudAccountIdInput() {
    return this._alicloudAccountId;
  }

  // alicloud_secret_key - computed: false, optional: true, required: false
  private _alicloudSecretKey?: string; 
  public get alicloudSecretKey() {
    return this.getStringAttribute('alicloud_secret_key');
  }
  public set alicloudSecretKey(value: string) {
    this._alicloudSecretKey = value;
  }
  public resetAlicloudSecretKey() {
    this._alicloudSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudSecretKeyInput() {
    return this._alicloudSecretKey;
  }

  // arm_application_id - computed: false, optional: true, required: false
  private _armApplicationId?: string; 
  public get armApplicationId() {
    return this.getStringAttribute('arm_application_id');
  }
  public set armApplicationId(value: string) {
    this._armApplicationId = value;
  }
  public resetArmApplicationId() {
    this._armApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armApplicationIdInput() {
    return this._armApplicationId;
  }

  // arm_application_key - computed: false, optional: true, required: false
  private _armApplicationKey?: string; 
  public get armApplicationKey() {
    return this.getStringAttribute('arm_application_key');
  }
  public set armApplicationKey(value: string) {
    this._armApplicationKey = value;
  }
  public resetArmApplicationKey() {
    this._armApplicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armApplicationKeyInput() {
    return this._armApplicationKey;
  }

  // arm_directory_id - computed: false, optional: true, required: false
  private _armDirectoryId?: string; 
  public get armDirectoryId() {
    return this.getStringAttribute('arm_directory_id');
  }
  public set armDirectoryId(value: string) {
    this._armDirectoryId = value;
  }
  public resetArmDirectoryId() {
    this._armDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armDirectoryIdInput() {
    return this._armDirectoryId;
  }

  // arm_subscription_id - computed: false, optional: true, required: false
  private _armSubscriptionId?: string; 
  public get armSubscriptionId() {
    return this.getStringAttribute('arm_subscription_id');
  }
  public set armSubscriptionId(value: string) {
    this._armSubscriptionId = value;
  }
  public resetArmSubscriptionId() {
    this._armSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armSubscriptionIdInput() {
    return this._armSubscriptionId;
  }

  // audit_account - computed: false, optional: true, required: false
  private _auditAccount?: boolean | cdktf.IResolvable; 
  public get auditAccount() {
    return this.getBooleanAttribute('audit_account');
  }
  public set auditAccount(value: boolean | cdktf.IResolvable) {
    this._auditAccount = value;
  }
  public resetAuditAccount() {
    this._auditAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAccountInput() {
    return this._auditAccount;
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_account_number - computed: false, optional: true, required: false
  private _awsAccountNumber?: string; 
  public get awsAccountNumber() {
    return this.getStringAttribute('aws_account_number');
  }
  public set awsAccountNumber(value: string) {
    this._awsAccountNumber = value;
  }
  public resetAwsAccountNumber() {
    this._awsAccountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNumberInput() {
    return this._awsAccountNumber;
  }

  // aws_ca_cert_path - computed: true, optional: false, required: false
  public get awsCaCertPath() {
    return this.getStringAttribute('aws_ca_cert_path');
  }

  // aws_gateway_role_app - computed: false, optional: true, required: false
  private _awsGatewayRoleApp?: string; 
  public get awsGatewayRoleApp() {
    return this.getStringAttribute('aws_gateway_role_app');
  }
  public set awsGatewayRoleApp(value: string) {
    this._awsGatewayRoleApp = value;
  }
  public resetAwsGatewayRoleApp() {
    this._awsGatewayRoleApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGatewayRoleAppInput() {
    return this._awsGatewayRoleApp;
  }

  // aws_gateway_role_ec2 - computed: false, optional: true, required: false
  private _awsGatewayRoleEc2?: string; 
  public get awsGatewayRoleEc2() {
    return this.getStringAttribute('aws_gateway_role_ec2');
  }
  public set awsGatewayRoleEc2(value: string) {
    this._awsGatewayRoleEc2 = value;
  }
  public resetAwsGatewayRoleEc2() {
    this._awsGatewayRoleEc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGatewayRoleEc2Input() {
    return this._awsGatewayRoleEc2;
  }

  // aws_iam - computed: false, optional: true, required: false
  private _awsIam?: boolean | cdktf.IResolvable; 
  public get awsIam() {
    return this.getBooleanAttribute('aws_iam');
  }
  public set awsIam(value: boolean | cdktf.IResolvable) {
    this._awsIam = value;
  }
  public resetAwsIam() {
    this._awsIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamInput() {
    return this._awsIam;
  }

  // aws_role_app - computed: true, optional: true, required: false
  private _awsRoleApp?: string; 
  public get awsRoleApp() {
    return this.getStringAttribute('aws_role_app');
  }
  public set awsRoleApp(value: string) {
    this._awsRoleApp = value;
  }
  public resetAwsRoleApp() {
    this._awsRoleApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleAppInput() {
    return this._awsRoleApp;
  }

  // aws_role_ec2 - computed: true, optional: true, required: false
  private _awsRoleEc2?: string; 
  public get awsRoleEc2() {
    return this.getStringAttribute('aws_role_ec2');
  }
  public set awsRoleEc2(value: string) {
    this._awsRoleEc2 = value;
  }
  public resetAwsRoleEc2() {
    this._awsRoleEc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleEc2Input() {
    return this._awsRoleEc2;
  }

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // awschina_access_key - computed: false, optional: true, required: false
  private _awschinaAccessKey?: string; 
  public get awschinaAccessKey() {
    return this.getStringAttribute('awschina_access_key');
  }
  public set awschinaAccessKey(value: string) {
    this._awschinaAccessKey = value;
  }
  public resetAwschinaAccessKey() {
    this._awschinaAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awschinaAccessKeyInput() {
    return this._awschinaAccessKey;
  }

  // awschina_account_number - computed: false, optional: true, required: false
  private _awschinaAccountNumber?: string; 
  public get awschinaAccountNumber() {
    return this.getStringAttribute('awschina_account_number');
  }
  public set awschinaAccountNumber(value: string) {
    this._awschinaAccountNumber = value;
  }
  public resetAwschinaAccountNumber() {
    this._awschinaAccountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awschinaAccountNumberInput() {
    return this._awschinaAccountNumber;
  }

  // awschina_iam - computed: false, optional: true, required: false
  private _awschinaIam?: boolean | cdktf.IResolvable; 
  public get awschinaIam() {
    return this.getBooleanAttribute('awschina_iam');
  }
  public set awschinaIam(value: boolean | cdktf.IResolvable) {
    this._awschinaIam = value;
  }
  public resetAwschinaIam() {
    this._awschinaIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awschinaIamInput() {
    return this._awschinaIam;
  }

  // awschina_role_app - computed: true, optional: true, required: false
  private _awschinaRoleApp?: string; 
  public get awschinaRoleApp() {
    return this.getStringAttribute('awschina_role_app');
  }
  public set awschinaRoleApp(value: string) {
    this._awschinaRoleApp = value;
  }
  public resetAwschinaRoleApp() {
    this._awschinaRoleApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awschinaRoleAppInput() {
    return this._awschinaRoleApp;
  }

  // awschina_role_ec2 - computed: true, optional: true, required: false
  private _awschinaRoleEc2?: string; 
  public get awschinaRoleEc2() {
    return this.getStringAttribute('awschina_role_ec2');
  }
  public set awschinaRoleEc2(value: string) {
    this._awschinaRoleEc2 = value;
  }
  public resetAwschinaRoleEc2() {
    this._awschinaRoleEc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awschinaRoleEc2Input() {
    return this._awschinaRoleEc2;
  }

  // awschina_secret_key - computed: false, optional: true, required: false
  private _awschinaSecretKey?: string; 
  public get awschinaSecretKey() {
    return this.getStringAttribute('awschina_secret_key');
  }
  public set awschinaSecretKey(value: string) {
    this._awschinaSecretKey = value;
  }
  public resetAwschinaSecretKey() {
    this._awschinaSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awschinaSecretKeyInput() {
    return this._awschinaSecretKey;
  }

  // awsgov_access_key - computed: false, optional: true, required: false
  private _awsgovAccessKey?: string; 
  public get awsgovAccessKey() {
    return this.getStringAttribute('awsgov_access_key');
  }
  public set awsgovAccessKey(value: string) {
    this._awsgovAccessKey = value;
  }
  public resetAwsgovAccessKey() {
    this._awsgovAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgovAccessKeyInput() {
    return this._awsgovAccessKey;
  }

  // awsgov_account_number - computed: false, optional: true, required: false
  private _awsgovAccountNumber?: string; 
  public get awsgovAccountNumber() {
    return this.getStringAttribute('awsgov_account_number');
  }
  public set awsgovAccountNumber(value: string) {
    this._awsgovAccountNumber = value;
  }
  public resetAwsgovAccountNumber() {
    this._awsgovAccountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgovAccountNumberInput() {
    return this._awsgovAccountNumber;
  }

  // awsgov_iam - computed: false, optional: true, required: false
  private _awsgovIam?: boolean | cdktf.IResolvable; 
  public get awsgovIam() {
    return this.getBooleanAttribute('awsgov_iam');
  }
  public set awsgovIam(value: boolean | cdktf.IResolvable) {
    this._awsgovIam = value;
  }
  public resetAwsgovIam() {
    this._awsgovIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgovIamInput() {
    return this._awsgovIam;
  }

  // awsgov_role_app - computed: true, optional: true, required: false
  private _awsgovRoleApp?: string; 
  public get awsgovRoleApp() {
    return this.getStringAttribute('awsgov_role_app');
  }
  public set awsgovRoleApp(value: string) {
    this._awsgovRoleApp = value;
  }
  public resetAwsgovRoleApp() {
    this._awsgovRoleApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgovRoleAppInput() {
    return this._awsgovRoleApp;
  }

  // awsgov_role_ec2 - computed: true, optional: true, required: false
  private _awsgovRoleEc2?: string; 
  public get awsgovRoleEc2() {
    return this.getStringAttribute('awsgov_role_ec2');
  }
  public set awsgovRoleEc2(value: string) {
    this._awsgovRoleEc2 = value;
  }
  public resetAwsgovRoleEc2() {
    this._awsgovRoleEc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgovRoleEc2Input() {
    return this._awsgovRoleEc2;
  }

  // awsgov_secret_key - computed: false, optional: true, required: false
  private _awsgovSecretKey?: string; 
  public get awsgovSecretKey() {
    return this.getStringAttribute('awsgov_secret_key');
  }
  public set awsgovSecretKey(value: string) {
    this._awsgovSecretKey = value;
  }
  public resetAwsgovSecretKey() {
    this._awsgovSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgovSecretKeyInput() {
    return this._awsgovSecretKey;
  }

  // awss_account_number - computed: false, optional: true, required: false
  private _awssAccountNumber?: string; 
  public get awssAccountNumber() {
    return this.getStringAttribute('awss_account_number');
  }
  public set awssAccountNumber(value: string) {
    this._awssAccountNumber = value;
  }
  public resetAwssAccountNumber() {
    this._awssAccountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssAccountNumberInput() {
    return this._awssAccountNumber;
  }

  // awss_ca_chain_cert - computed: false, optional: true, required: false
  private _awssCaChainCert?: string; 
  public get awssCaChainCert() {
    return this.getStringAttribute('awss_ca_chain_cert');
  }
  public set awssCaChainCert(value: string) {
    this._awssCaChainCert = value;
  }
  public resetAwssCaChainCert() {
    this._awssCaChainCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssCaChainCertInput() {
    return this._awssCaChainCert;
  }

  // awss_cap_account_name - computed: false, optional: true, required: false
  private _awssCapAccountName?: string; 
  public get awssCapAccountName() {
    return this.getStringAttribute('awss_cap_account_name');
  }
  public set awssCapAccountName(value: string) {
    this._awssCapAccountName = value;
  }
  public resetAwssCapAccountName() {
    this._awssCapAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssCapAccountNameInput() {
    return this._awssCapAccountName;
  }

  // awss_cap_agency - computed: false, optional: true, required: false
  private _awssCapAgency?: string; 
  public get awssCapAgency() {
    return this.getStringAttribute('awss_cap_agency');
  }
  public set awssCapAgency(value: string) {
    this._awssCapAgency = value;
  }
  public resetAwssCapAgency() {
    this._awssCapAgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssCapAgencyInput() {
    return this._awssCapAgency;
  }

  // awss_cap_cert - computed: false, optional: true, required: false
  private _awssCapCert?: string; 
  public get awssCapCert() {
    return this.getStringAttribute('awss_cap_cert');
  }
  public set awssCapCert(value: string) {
    this._awssCapCert = value;
  }
  public resetAwssCapCert() {
    this._awssCapCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssCapCertInput() {
    return this._awssCapCert;
  }

  // awss_cap_cert_key - computed: false, optional: true, required: false
  private _awssCapCertKey?: string; 
  public get awssCapCertKey() {
    return this.getStringAttribute('awss_cap_cert_key');
  }
  public set awssCapCertKey(value: string) {
    this._awssCapCertKey = value;
  }
  public resetAwssCapCertKey() {
    this._awssCapCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssCapCertKeyInput() {
    return this._awssCapCertKey;
  }

  // awss_cap_cert_key_path - computed: true, optional: false, required: false
  public get awssCapCertKeyPath() {
    return this.getStringAttribute('awss_cap_cert_key_path');
  }

  // awss_cap_cert_path - computed: true, optional: false, required: false
  public get awssCapCertPath() {
    return this.getStringAttribute('awss_cap_cert_path');
  }

  // awss_cap_role_name - computed: false, optional: true, required: false
  private _awssCapRoleName?: string; 
  public get awssCapRoleName() {
    return this.getStringAttribute('awss_cap_role_name');
  }
  public set awssCapRoleName(value: string) {
    this._awssCapRoleName = value;
  }
  public resetAwssCapRoleName() {
    this._awssCapRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssCapRoleNameInput() {
    return this._awssCapRoleName;
  }

  // awss_cap_url - computed: false, optional: true, required: false
  private _awssCapUrl?: string; 
  public get awssCapUrl() {
    return this.getStringAttribute('awss_cap_url');
  }
  public set awssCapUrl(value: string) {
    this._awssCapUrl = value;
  }
  public resetAwssCapUrl() {
    this._awssCapUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awssCapUrlInput() {
    return this._awssCapUrl;
  }

  // awsts_account_number - computed: false, optional: true, required: false
  private _awstsAccountNumber?: string; 
  public get awstsAccountNumber() {
    return this.getStringAttribute('awsts_account_number');
  }
  public set awstsAccountNumber(value: string) {
    this._awstsAccountNumber = value;
  }
  public resetAwstsAccountNumber() {
    this._awstsAccountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsAccountNumberInput() {
    return this._awstsAccountNumber;
  }

  // awsts_ca_chain_cert - computed: false, optional: true, required: false
  private _awstsCaChainCert?: string; 
  public get awstsCaChainCert() {
    return this.getStringAttribute('awsts_ca_chain_cert');
  }
  public set awstsCaChainCert(value: string) {
    this._awstsCaChainCert = value;
  }
  public resetAwstsCaChainCert() {
    this._awstsCaChainCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsCaChainCertInput() {
    return this._awstsCaChainCert;
  }

  // awsts_cap_agency - computed: false, optional: true, required: false
  private _awstsCapAgency?: string; 
  public get awstsCapAgency() {
    return this.getStringAttribute('awsts_cap_agency');
  }
  public set awstsCapAgency(value: string) {
    this._awstsCapAgency = value;
  }
  public resetAwstsCapAgency() {
    this._awstsCapAgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsCapAgencyInput() {
    return this._awstsCapAgency;
  }

  // awsts_cap_cert - computed: false, optional: true, required: false
  private _awstsCapCert?: string; 
  public get awstsCapCert() {
    return this.getStringAttribute('awsts_cap_cert');
  }
  public set awstsCapCert(value: string) {
    this._awstsCapCert = value;
  }
  public resetAwstsCapCert() {
    this._awstsCapCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsCapCertInput() {
    return this._awstsCapCert;
  }

  // awsts_cap_cert_key - computed: false, optional: true, required: false
  private _awstsCapCertKey?: string; 
  public get awstsCapCertKey() {
    return this.getStringAttribute('awsts_cap_cert_key');
  }
  public set awstsCapCertKey(value: string) {
    this._awstsCapCertKey = value;
  }
  public resetAwstsCapCertKey() {
    this._awstsCapCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsCapCertKeyInput() {
    return this._awstsCapCertKey;
  }

  // awsts_cap_cert_key_path - computed: true, optional: false, required: false
  public get awstsCapCertKeyPath() {
    return this.getStringAttribute('awsts_cap_cert_key_path');
  }

  // awsts_cap_cert_path - computed: true, optional: false, required: false
  public get awstsCapCertPath() {
    return this.getStringAttribute('awsts_cap_cert_path');
  }

  // awsts_cap_mission - computed: false, optional: true, required: false
  private _awstsCapMission?: string; 
  public get awstsCapMission() {
    return this.getStringAttribute('awsts_cap_mission');
  }
  public set awstsCapMission(value: string) {
    this._awstsCapMission = value;
  }
  public resetAwstsCapMission() {
    this._awstsCapMission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsCapMissionInput() {
    return this._awstsCapMission;
  }

  // awsts_cap_role_name - computed: false, optional: true, required: false
  private _awstsCapRoleName?: string; 
  public get awstsCapRoleName() {
    return this.getStringAttribute('awsts_cap_role_name');
  }
  public set awstsCapRoleName(value: string) {
    this._awstsCapRoleName = value;
  }
  public resetAwstsCapRoleName() {
    this._awstsCapRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsCapRoleNameInput() {
    return this._awstsCapRoleName;
  }

  // awsts_cap_url - computed: false, optional: true, required: false
  private _awstsCapUrl?: string; 
  public get awstsCapUrl() {
    return this.getStringAttribute('awsts_cap_url');
  }
  public set awstsCapUrl(value: string) {
    this._awstsCapUrl = value;
  }
  public resetAwstsCapUrl() {
    this._awstsCapUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awstsCapUrlInput() {
    return this._awstsCapUrl;
  }

  // azurechina_application_id - computed: false, optional: true, required: false
  private _azurechinaApplicationId?: string; 
  public get azurechinaApplicationId() {
    return this.getStringAttribute('azurechina_application_id');
  }
  public set azurechinaApplicationId(value: string) {
    this._azurechinaApplicationId = value;
  }
  public resetAzurechinaApplicationId() {
    this._azurechinaApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurechinaApplicationIdInput() {
    return this._azurechinaApplicationId;
  }

  // azurechina_application_key - computed: false, optional: true, required: false
  private _azurechinaApplicationKey?: string; 
  public get azurechinaApplicationKey() {
    return this.getStringAttribute('azurechina_application_key');
  }
  public set azurechinaApplicationKey(value: string) {
    this._azurechinaApplicationKey = value;
  }
  public resetAzurechinaApplicationKey() {
    this._azurechinaApplicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurechinaApplicationKeyInput() {
    return this._azurechinaApplicationKey;
  }

  // azurechina_directory_id - computed: false, optional: true, required: false
  private _azurechinaDirectoryId?: string; 
  public get azurechinaDirectoryId() {
    return this.getStringAttribute('azurechina_directory_id');
  }
  public set azurechinaDirectoryId(value: string) {
    this._azurechinaDirectoryId = value;
  }
  public resetAzurechinaDirectoryId() {
    this._azurechinaDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurechinaDirectoryIdInput() {
    return this._azurechinaDirectoryId;
  }

  // azurechina_subscription_id - computed: false, optional: true, required: false
  private _azurechinaSubscriptionId?: string; 
  public get azurechinaSubscriptionId() {
    return this.getStringAttribute('azurechina_subscription_id');
  }
  public set azurechinaSubscriptionId(value: string) {
    this._azurechinaSubscriptionId = value;
  }
  public resetAzurechinaSubscriptionId() {
    this._azurechinaSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurechinaSubscriptionIdInput() {
    return this._azurechinaSubscriptionId;
  }

  // azuregov_application_id - computed: false, optional: true, required: false
  private _azuregovApplicationId?: string; 
  public get azuregovApplicationId() {
    return this.getStringAttribute('azuregov_application_id');
  }
  public set azuregovApplicationId(value: string) {
    this._azuregovApplicationId = value;
  }
  public resetAzuregovApplicationId() {
    this._azuregovApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azuregovApplicationIdInput() {
    return this._azuregovApplicationId;
  }

  // azuregov_application_key - computed: false, optional: true, required: false
  private _azuregovApplicationKey?: string; 
  public get azuregovApplicationKey() {
    return this.getStringAttribute('azuregov_application_key');
  }
  public set azuregovApplicationKey(value: string) {
    this._azuregovApplicationKey = value;
  }
  public resetAzuregovApplicationKey() {
    this._azuregovApplicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azuregovApplicationKeyInput() {
    return this._azuregovApplicationKey;
  }

  // azuregov_directory_id - computed: false, optional: true, required: false
  private _azuregovDirectoryId?: string; 
  public get azuregovDirectoryId() {
    return this.getStringAttribute('azuregov_directory_id');
  }
  public set azuregovDirectoryId(value: string) {
    this._azuregovDirectoryId = value;
  }
  public resetAzuregovDirectoryId() {
    this._azuregovDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azuregovDirectoryIdInput() {
    return this._azuregovDirectoryId;
  }

  // azuregov_subscription_id - computed: false, optional: true, required: false
  private _azuregovSubscriptionId?: string; 
  public get azuregovSubscriptionId() {
    return this.getStringAttribute('azuregov_subscription_id');
  }
  public set azuregovSubscriptionId(value: string) {
    this._azuregovSubscriptionId = value;
  }
  public resetAzuregovSubscriptionId() {
    this._azuregovSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azuregovSubscriptionIdInput() {
    return this._azuregovSubscriptionId;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // edge_csp_api_endpoint - computed: false, optional: true, required: false
  private _edgeCspApiEndpoint?: string; 
  public get edgeCspApiEndpoint() {
    return this.getStringAttribute('edge_csp_api_endpoint');
  }
  public set edgeCspApiEndpoint(value: string) {
    this._edgeCspApiEndpoint = value;
  }
  public resetEdgeCspApiEndpoint() {
    this._edgeCspApiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCspApiEndpointInput() {
    return this._edgeCspApiEndpoint;
  }

  // edge_csp_password - computed: false, optional: true, required: false
  private _edgeCspPassword?: string; 
  public get edgeCspPassword() {
    return this.getStringAttribute('edge_csp_password');
  }
  public set edgeCspPassword(value: string) {
    this._edgeCspPassword = value;
  }
  public resetEdgeCspPassword() {
    this._edgeCspPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCspPasswordInput() {
    return this._edgeCspPassword;
  }

  // edge_csp_username - computed: false, optional: true, required: false
  private _edgeCspUsername?: string; 
  public get edgeCspUsername() {
    return this.getStringAttribute('edge_csp_username');
  }
  public set edgeCspUsername(value: string) {
    this._edgeCspUsername = value;
  }
  public resetEdgeCspUsername() {
    this._edgeCspUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCspUsernameInput() {
    return this._edgeCspUsername;
  }

  // edge_zededa_password - computed: false, optional: true, required: false
  private _edgeZededaPassword?: string; 
  public get edgeZededaPassword() {
    return this.getStringAttribute('edge_zededa_password');
  }
  public set edgeZededaPassword(value: string) {
    this._edgeZededaPassword = value;
  }
  public resetEdgeZededaPassword() {
    this._edgeZededaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZededaPasswordInput() {
    return this._edgeZededaPassword;
  }

  // edge_zededa_username - computed: false, optional: true, required: false
  private _edgeZededaUsername?: string; 
  public get edgeZededaUsername() {
    return this.getStringAttribute('edge_zededa_username');
  }
  public set edgeZededaUsername(value: string) {
    this._edgeZededaUsername = value;
  }
  public resetEdgeZededaUsername() {
    this._edgeZededaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZededaUsernameInput() {
    return this._edgeZededaUsername;
  }

  // gcloud_project_credentials_filepath - computed: false, optional: true, required: false
  private _gcloudProjectCredentialsFilepath?: string; 
  public get gcloudProjectCredentialsFilepath() {
    return this.getStringAttribute('gcloud_project_credentials_filepath');
  }
  public set gcloudProjectCredentialsFilepath(value: string) {
    this._gcloudProjectCredentialsFilepath = value;
  }
  public resetGcloudProjectCredentialsFilepath() {
    this._gcloudProjectCredentialsFilepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcloudProjectCredentialsFilepathInput() {
    return this._gcloudProjectCredentialsFilepath;
  }

  // gcloud_project_id - computed: false, optional: true, required: false
  private _gcloudProjectId?: string; 
  public get gcloudProjectId() {
    return this.getStringAttribute('gcloud_project_id');
  }
  public set gcloudProjectId(value: string) {
    this._gcloudProjectId = value;
  }
  public resetGcloudProjectId() {
    this._gcloudProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcloudProjectIdInput() {
    return this._gcloudProjectId;
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

  // oci_api_private_key_filepath - computed: false, optional: true, required: false
  private _ociApiPrivateKeyFilepath?: string; 
  public get ociApiPrivateKeyFilepath() {
    return this.getStringAttribute('oci_api_private_key_filepath');
  }
  public set ociApiPrivateKeyFilepath(value: string) {
    this._ociApiPrivateKeyFilepath = value;
  }
  public resetOciApiPrivateKeyFilepath() {
    this._ociApiPrivateKeyFilepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociApiPrivateKeyFilepathInput() {
    return this._ociApiPrivateKeyFilepath;
  }

  // oci_compartment_id - computed: false, optional: true, required: false
  private _ociCompartmentId?: string; 
  public get ociCompartmentId() {
    return this.getStringAttribute('oci_compartment_id');
  }
  public set ociCompartmentId(value: string) {
    this._ociCompartmentId = value;
  }
  public resetOciCompartmentId() {
    this._ociCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCompartmentIdInput() {
    return this._ociCompartmentId;
  }

  // oci_tenancy_id - computed: false, optional: true, required: false
  private _ociTenancyId?: string; 
  public get ociTenancyId() {
    return this.getStringAttribute('oci_tenancy_id');
  }
  public set ociTenancyId(value: string) {
    this._ociTenancyId = value;
  }
  public resetOciTenancyId() {
    this._ociTenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociTenancyIdInput() {
    return this._ociTenancyId;
  }

  // oci_user_id - computed: false, optional: true, required: false
  private _ociUserId?: string; 
  public get ociUserId() {
    return this.getStringAttribute('oci_user_id');
  }
  public set ociUserId(value: string) {
    this._ociUserId = value;
  }
  public resetOciUserId() {
    this._ociUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociUserIdInput() {
    return this._ociUserId;
  }

  // rbac_groups - computed: false, optional: true, required: false
  private _rbacGroups?: string[]; 
  public get rbacGroups() {
    return this.getListAttribute('rbac_groups');
  }
  public set rbacGroups(value: string[]) {
    this._rbacGroups = value;
  }
  public resetRbacGroups() {
    this._rbacGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacGroupsInput() {
    return this._rbacGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      alicloud_access_key: cdktf.stringToTerraform(this._alicloudAccessKey),
      alicloud_account_id: cdktf.stringToTerraform(this._alicloudAccountId),
      alicloud_secret_key: cdktf.stringToTerraform(this._alicloudSecretKey),
      arm_application_id: cdktf.stringToTerraform(this._armApplicationId),
      arm_application_key: cdktf.stringToTerraform(this._armApplicationKey),
      arm_directory_id: cdktf.stringToTerraform(this._armDirectoryId),
      arm_subscription_id: cdktf.stringToTerraform(this._armSubscriptionId),
      audit_account: cdktf.booleanToTerraform(this._auditAccount),
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_account_number: cdktf.stringToTerraform(this._awsAccountNumber),
      aws_gateway_role_app: cdktf.stringToTerraform(this._awsGatewayRoleApp),
      aws_gateway_role_ec2: cdktf.stringToTerraform(this._awsGatewayRoleEc2),
      aws_iam: cdktf.booleanToTerraform(this._awsIam),
      aws_role_app: cdktf.stringToTerraform(this._awsRoleApp),
      aws_role_ec2: cdktf.stringToTerraform(this._awsRoleEc2),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      awschina_access_key: cdktf.stringToTerraform(this._awschinaAccessKey),
      awschina_account_number: cdktf.stringToTerraform(this._awschinaAccountNumber),
      awschina_iam: cdktf.booleanToTerraform(this._awschinaIam),
      awschina_role_app: cdktf.stringToTerraform(this._awschinaRoleApp),
      awschina_role_ec2: cdktf.stringToTerraform(this._awschinaRoleEc2),
      awschina_secret_key: cdktf.stringToTerraform(this._awschinaSecretKey),
      awsgov_access_key: cdktf.stringToTerraform(this._awsgovAccessKey),
      awsgov_account_number: cdktf.stringToTerraform(this._awsgovAccountNumber),
      awsgov_iam: cdktf.booleanToTerraform(this._awsgovIam),
      awsgov_role_app: cdktf.stringToTerraform(this._awsgovRoleApp),
      awsgov_role_ec2: cdktf.stringToTerraform(this._awsgovRoleEc2),
      awsgov_secret_key: cdktf.stringToTerraform(this._awsgovSecretKey),
      awss_account_number: cdktf.stringToTerraform(this._awssAccountNumber),
      awss_ca_chain_cert: cdktf.stringToTerraform(this._awssCaChainCert),
      awss_cap_account_name: cdktf.stringToTerraform(this._awssCapAccountName),
      awss_cap_agency: cdktf.stringToTerraform(this._awssCapAgency),
      awss_cap_cert: cdktf.stringToTerraform(this._awssCapCert),
      awss_cap_cert_key: cdktf.stringToTerraform(this._awssCapCertKey),
      awss_cap_role_name: cdktf.stringToTerraform(this._awssCapRoleName),
      awss_cap_url: cdktf.stringToTerraform(this._awssCapUrl),
      awsts_account_number: cdktf.stringToTerraform(this._awstsAccountNumber),
      awsts_ca_chain_cert: cdktf.stringToTerraform(this._awstsCaChainCert),
      awsts_cap_agency: cdktf.stringToTerraform(this._awstsCapAgency),
      awsts_cap_cert: cdktf.stringToTerraform(this._awstsCapCert),
      awsts_cap_cert_key: cdktf.stringToTerraform(this._awstsCapCertKey),
      awsts_cap_mission: cdktf.stringToTerraform(this._awstsCapMission),
      awsts_cap_role_name: cdktf.stringToTerraform(this._awstsCapRoleName),
      awsts_cap_url: cdktf.stringToTerraform(this._awstsCapUrl),
      azurechina_application_id: cdktf.stringToTerraform(this._azurechinaApplicationId),
      azurechina_application_key: cdktf.stringToTerraform(this._azurechinaApplicationKey),
      azurechina_directory_id: cdktf.stringToTerraform(this._azurechinaDirectoryId),
      azurechina_subscription_id: cdktf.stringToTerraform(this._azurechinaSubscriptionId),
      azuregov_application_id: cdktf.stringToTerraform(this._azuregovApplicationId),
      azuregov_application_key: cdktf.stringToTerraform(this._azuregovApplicationKey),
      azuregov_directory_id: cdktf.stringToTerraform(this._azuregovDirectoryId),
      azuregov_subscription_id: cdktf.stringToTerraform(this._azuregovSubscriptionId),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      edge_csp_api_endpoint: cdktf.stringToTerraform(this._edgeCspApiEndpoint),
      edge_csp_password: cdktf.stringToTerraform(this._edgeCspPassword),
      edge_csp_username: cdktf.stringToTerraform(this._edgeCspUsername),
      edge_zededa_password: cdktf.stringToTerraform(this._edgeZededaPassword),
      edge_zededa_username: cdktf.stringToTerraform(this._edgeZededaUsername),
      gcloud_project_credentials_filepath: cdktf.stringToTerraform(this._gcloudProjectCredentialsFilepath),
      gcloud_project_id: cdktf.stringToTerraform(this._gcloudProjectId),
      id: cdktf.stringToTerraform(this._id),
      oci_api_private_key_filepath: cdktf.stringToTerraform(this._ociApiPrivateKeyFilepath),
      oci_compartment_id: cdktf.stringToTerraform(this._ociCompartmentId),
      oci_tenancy_id: cdktf.stringToTerraform(this._ociTenancyId),
      oci_user_id: cdktf.stringToTerraform(this._ociUserId),
      rbac_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rbacGroups),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_access_key: {
        value: cdktf.stringToHclTerraform(this._alicloudAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_account_id: {
        value: cdktf.stringToHclTerraform(this._alicloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_secret_key: {
        value: cdktf.stringToHclTerraform(this._alicloudSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arm_application_id: {
        value: cdktf.stringToHclTerraform(this._armApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arm_application_key: {
        value: cdktf.stringToHclTerraform(this._armApplicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arm_directory_id: {
        value: cdktf.stringToHclTerraform(this._armDirectoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arm_subscription_id: {
        value: cdktf.stringToHclTerraform(this._armSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_account: {
        value: cdktf.booleanToHclTerraform(this._auditAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_number: {
        value: cdktf.stringToHclTerraform(this._awsAccountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_gateway_role_app: {
        value: cdktf.stringToHclTerraform(this._awsGatewayRoleApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_gateway_role_ec2: {
        value: cdktf.stringToHclTerraform(this._awsGatewayRoleEc2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_iam: {
        value: cdktf.booleanToHclTerraform(this._awsIam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_role_app: {
        value: cdktf.stringToHclTerraform(this._awsRoleApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_role_ec2: {
        value: cdktf.stringToHclTerraform(this._awsRoleEc2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awschina_access_key: {
        value: cdktf.stringToHclTerraform(this._awschinaAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awschina_account_number: {
        value: cdktf.stringToHclTerraform(this._awschinaAccountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awschina_iam: {
        value: cdktf.booleanToHclTerraform(this._awschinaIam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      awschina_role_app: {
        value: cdktf.stringToHclTerraform(this._awschinaRoleApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awschina_role_ec2: {
        value: cdktf.stringToHclTerraform(this._awschinaRoleEc2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awschina_secret_key: {
        value: cdktf.stringToHclTerraform(this._awschinaSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsgov_access_key: {
        value: cdktf.stringToHclTerraform(this._awsgovAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsgov_account_number: {
        value: cdktf.stringToHclTerraform(this._awsgovAccountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsgov_iam: {
        value: cdktf.booleanToHclTerraform(this._awsgovIam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      awsgov_role_app: {
        value: cdktf.stringToHclTerraform(this._awsgovRoleApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsgov_role_ec2: {
        value: cdktf.stringToHclTerraform(this._awsgovRoleEc2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsgov_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsgovSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_account_number: {
        value: cdktf.stringToHclTerraform(this._awssAccountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_ca_chain_cert: {
        value: cdktf.stringToHclTerraform(this._awssCaChainCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_cap_account_name: {
        value: cdktf.stringToHclTerraform(this._awssCapAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_cap_agency: {
        value: cdktf.stringToHclTerraform(this._awssCapAgency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_cap_cert: {
        value: cdktf.stringToHclTerraform(this._awssCapCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_cap_cert_key: {
        value: cdktf.stringToHclTerraform(this._awssCapCertKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_cap_role_name: {
        value: cdktf.stringToHclTerraform(this._awssCapRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awss_cap_url: {
        value: cdktf.stringToHclTerraform(this._awssCapUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_account_number: {
        value: cdktf.stringToHclTerraform(this._awstsAccountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_ca_chain_cert: {
        value: cdktf.stringToHclTerraform(this._awstsCaChainCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_cap_agency: {
        value: cdktf.stringToHclTerraform(this._awstsCapAgency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_cap_cert: {
        value: cdktf.stringToHclTerraform(this._awstsCapCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_cap_cert_key: {
        value: cdktf.stringToHclTerraform(this._awstsCapCertKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_cap_mission: {
        value: cdktf.stringToHclTerraform(this._awstsCapMission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_cap_role_name: {
        value: cdktf.stringToHclTerraform(this._awstsCapRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awsts_cap_url: {
        value: cdktf.stringToHclTerraform(this._awstsCapUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurechina_application_id: {
        value: cdktf.stringToHclTerraform(this._azurechinaApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurechina_application_key: {
        value: cdktf.stringToHclTerraform(this._azurechinaApplicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurechina_directory_id: {
        value: cdktf.stringToHclTerraform(this._azurechinaDirectoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurechina_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azurechinaSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azuregov_application_id: {
        value: cdktf.stringToHclTerraform(this._azuregovApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azuregov_application_key: {
        value: cdktf.stringToHclTerraform(this._azuregovApplicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azuregov_directory_id: {
        value: cdktf.stringToHclTerraform(this._azuregovDirectoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azuregov_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azuregovSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_type: {
        value: cdktf.numberToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edge_csp_api_endpoint: {
        value: cdktf.stringToHclTerraform(this._edgeCspApiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_csp_password: {
        value: cdktf.stringToHclTerraform(this._edgeCspPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_csp_username: {
        value: cdktf.stringToHclTerraform(this._edgeCspUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_zededa_password: {
        value: cdktf.stringToHclTerraform(this._edgeZededaPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_zededa_username: {
        value: cdktf.stringToHclTerraform(this._edgeZededaUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcloud_project_credentials_filepath: {
        value: cdktf.stringToHclTerraform(this._gcloudProjectCredentialsFilepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcloud_project_id: {
        value: cdktf.stringToHclTerraform(this._gcloudProjectId),
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
      oci_api_private_key_filepath: {
        value: cdktf.stringToHclTerraform(this._ociApiPrivateKeyFilepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_compartment_id: {
        value: cdktf.stringToHclTerraform(this._ociCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_tenancy_id: {
        value: cdktf.stringToHclTerraform(this._ociTenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_user_id: {
        value: cdktf.stringToHclTerraform(this._ociUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rbac_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rbacGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
