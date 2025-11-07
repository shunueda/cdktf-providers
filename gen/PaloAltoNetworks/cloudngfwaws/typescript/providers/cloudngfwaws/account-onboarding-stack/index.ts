// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountOnboardingStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#account_id AccountOnboardingStack#account_id}
  */
  readonly accountId: string;
  /**
  * Audit Log Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#auditlog_group AccountOnboardingStack#auditlog_group}
  */
  readonly auditlogGroup?: string;
  /**
  * Role name to run the account onboarding CFT in each account to be onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#cft_role_name AccountOnboardingStack#cft_role_name}
  */
  readonly cftRoleName: string;
  /**
  * Cloudwatch Log Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#cloudwatch_log_group AccountOnboardingStack#cloudwatch_log_group}
  */
  readonly cloudwatchLogGroup?: string;
  /**
  * Cloudwatch Namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#cloudwatch_namespace AccountOnboardingStack#cloudwatch_namespace}
  */
  readonly cloudwatchNamespace?: string;
  /**
  * The CloudNGFW can decrypt inbound and outbound traffic by providing a
  * 						  certificate stored in secret Manager.
  * 			 			  The role allows the service to access a certificate configured in the rulestack.
  * 			 			  Only certificated tagged with PaloAltoCloudNGFW can be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#decryption_cert AccountOnboardingStack#decryption_cert}
  */
  readonly decryptionCert?: string;
  /**
  * Controls whether cloud NGFW will create firewall endpoints automatitically in customer subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#endpoint_mode AccountOnboardingStack#endpoint_mode}
  */
  readonly endpointMode?: string;
  /**
  * External Id of the onboarded account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#external_id AccountOnboardingStack#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#id AccountOnboardingStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kinesis Firehose for logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#kinesis_firehose AccountOnboardingStack#kinesis_firehose}
  */
  readonly kinesisFirehose?: string;
  /**
  * Role name to run the account onboarding CFT in each account to be onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#onboarding_cft AccountOnboardingStack#onboarding_cft}
  */
  readonly onboardingCft: string;
  /**
  * S3 Bucket Name for Logging. Logging roles provide access to create log contents in this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#s3_bucket AccountOnboardingStack#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * SNS topic ARN to publish the role ARNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#sns_topic_arn AccountOnboardingStack#sns_topic_arn}
  */
  readonly snsTopicArn: string;
  /**
  * ID of the account onboarding CFT stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#stack_id AccountOnboardingStack#stack_id}
  */
  readonly stackId?: string;
  /**
  * Status of the account onboarding CFT stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#stack_status AccountOnboardingStack#stack_status}
  */
  readonly stackStatus?: string;
  /**
  * PANW Cloud NGFW trusted account Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#trusted_account AccountOnboardingStack#trusted_account}
  */
  readonly trustedAccount: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack cloudngfwaws_account_onboarding_stack}
*/
export class AccountOnboardingStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_account_onboarding_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountOnboardingStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountOnboardingStack to import
  * @param importFromId The id of the existing AccountOnboardingStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountOnboardingStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_account_onboarding_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/account_onboarding_stack cloudngfwaws_account_onboarding_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountOnboardingStackConfig
  */
  public constructor(scope: Construct, id: string, config: AccountOnboardingStackConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_account_onboarding_stack',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._auditlogGroup = config.auditlogGroup;
    this._cftRoleName = config.cftRoleName;
    this._cloudwatchLogGroup = config.cloudwatchLogGroup;
    this._cloudwatchNamespace = config.cloudwatchNamespace;
    this._decryptionCert = config.decryptionCert;
    this._endpointMode = config.endpointMode;
    this._externalId = config.externalId;
    this._id = config.id;
    this._kinesisFirehose = config.kinesisFirehose;
    this._onboardingCft = config.onboardingCft;
    this._s3Bucket = config.s3Bucket;
    this._snsTopicArn = config.snsTopicArn;
    this._stackId = config.stackId;
    this._stackStatus = config.stackStatus;
    this._trustedAccount = config.trustedAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // auditlog_group - computed: false, optional: true, required: false
  private _auditlogGroup?: string; 
  public get auditlogGroup() {
    return this.getStringAttribute('auditlog_group');
  }
  public set auditlogGroup(value: string) {
    this._auditlogGroup = value;
  }
  public resetAuditlogGroup() {
    this._auditlogGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditlogGroupInput() {
    return this._auditlogGroup;
  }

  // cft_role_name - computed: false, optional: false, required: true
  private _cftRoleName?: string; 
  public get cftRoleName() {
    return this.getStringAttribute('cft_role_name');
  }
  public set cftRoleName(value: string) {
    this._cftRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cftRoleNameInput() {
    return this._cftRoleName;
  }

  // cloudwatch_log_group - computed: false, optional: true, required: false
  private _cloudwatchLogGroup?: string; 
  public get cloudwatchLogGroup() {
    return this.getStringAttribute('cloudwatch_log_group');
  }
  public set cloudwatchLogGroup(value: string) {
    this._cloudwatchLogGroup = value;
  }
  public resetCloudwatchLogGroup() {
    this._cloudwatchLogGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupInput() {
    return this._cloudwatchLogGroup;
  }

  // cloudwatch_namespace - computed: false, optional: true, required: false
  private _cloudwatchNamespace?: string; 
  public get cloudwatchNamespace() {
    return this.getStringAttribute('cloudwatch_namespace');
  }
  public set cloudwatchNamespace(value: string) {
    this._cloudwatchNamespace = value;
  }
  public resetCloudwatchNamespace() {
    this._cloudwatchNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchNamespaceInput() {
    return this._cloudwatchNamespace;
  }

  // decryption_cert - computed: false, optional: true, required: false
  private _decryptionCert?: string; 
  public get decryptionCert() {
    return this.getStringAttribute('decryption_cert');
  }
  public set decryptionCert(value: string) {
    this._decryptionCert = value;
  }
  public resetDecryptionCert() {
    this._decryptionCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionCertInput() {
    return this._decryptionCert;
  }

  // endpoint_mode - computed: false, optional: true, required: false
  private _endpointMode?: string; 
  public get endpointMode() {
    return this.getStringAttribute('endpoint_mode');
  }
  public set endpointMode(value: string) {
    this._endpointMode = value;
  }
  public resetEndpointMode() {
    this._endpointMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointModeInput() {
    return this._endpointMode;
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // kinesis_firehose - computed: false, optional: true, required: false
  private _kinesisFirehose?: string; 
  public get kinesisFirehose() {
    return this.getStringAttribute('kinesis_firehose');
  }
  public set kinesisFirehose(value: string) {
    this._kinesisFirehose = value;
  }
  public resetKinesisFirehose() {
    this._kinesisFirehose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInput() {
    return this._kinesisFirehose;
  }

  // onboarding_cft - computed: false, optional: false, required: true
  private _onboardingCft?: string; 
  public get onboardingCft() {
    return this.getStringAttribute('onboarding_cft');
  }
  public set onboardingCft(value: string) {
    this._onboardingCft = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingCftInput() {
    return this._onboardingCft;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }

  // stack_id - computed: true, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // stack_status - computed: true, optional: true, required: false
  private _stackStatus?: string; 
  public get stackStatus() {
    return this.getStringAttribute('stack_status');
  }
  public set stackStatus(value: string) {
    this._stackStatus = value;
  }
  public resetStackStatus() {
    this._stackStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackStatusInput() {
    return this._stackStatus;
  }

  // trusted_account - computed: false, optional: false, required: true
  private _trustedAccount?: string; 
  public get trustedAccount() {
    return this.getStringAttribute('trusted_account');
  }
  public set trustedAccount(value: string) {
    this._trustedAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAccountInput() {
    return this._trustedAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auditlog_group: cdktf.stringToTerraform(this._auditlogGroup),
      cft_role_name: cdktf.stringToTerraform(this._cftRoleName),
      cloudwatch_log_group: cdktf.stringToTerraform(this._cloudwatchLogGroup),
      cloudwatch_namespace: cdktf.stringToTerraform(this._cloudwatchNamespace),
      decryption_cert: cdktf.stringToTerraform(this._decryptionCert),
      endpoint_mode: cdktf.stringToTerraform(this._endpointMode),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      kinesis_firehose: cdktf.stringToTerraform(this._kinesisFirehose),
      onboarding_cft: cdktf.stringToTerraform(this._onboardingCft),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      stack_id: cdktf.stringToTerraform(this._stackId),
      stack_status: cdktf.stringToTerraform(this._stackStatus),
      trusted_account: cdktf.stringToTerraform(this._trustedAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auditlog_group: {
        value: cdktf.stringToHclTerraform(this._auditlogGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cft_role_name: {
        value: cdktf.stringToHclTerraform(this._cftRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudwatch_log_group: {
        value: cdktf.stringToHclTerraform(this._cloudwatchLogGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudwatch_namespace: {
        value: cdktf.stringToHclTerraform(this._cloudwatchNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decryption_cert: {
        value: cdktf.stringToHclTerraform(this._decryptionCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_mode: {
        value: cdktf.stringToHclTerraform(this._endpointMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      kinesis_firehose: {
        value: cdktf.stringToHclTerraform(this._kinesisFirehose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboarding_cft: {
        value: cdktf.stringToHclTerraform(this._onboardingCft),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktf.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._snsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_status: {
        value: cdktf.stringToHclTerraform(this._stackStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_account: {
        value: cdktf.stringToHclTerraform(this._trustedAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
