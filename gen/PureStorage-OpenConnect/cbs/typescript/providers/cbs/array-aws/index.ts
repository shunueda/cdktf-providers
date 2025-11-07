// https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArrayAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#alert_recipients ArrayAws#alert_recipients}
  */
  readonly alertRecipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#array_model ArrayAws#array_model}
  */
  readonly arrayModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#array_name ArrayAws#array_name}
  */
  readonly arrayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#deployment_role_arn ArrayAws#deployment_role_arn}
  */
  readonly deploymentRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#deployment_template_url ArrayAws#deployment_template_url}
  */
  readonly deploymentTemplateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#id ArrayAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#iscsi_security_group ArrayAws#iscsi_security_group}
  */
  readonly iscsiSecurityGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#iscsi_subnet ArrayAws#iscsi_subnet}
  */
  readonly iscsiSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#license_key ArrayAws#license_key}
  */
  readonly licenseKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#log_sender_domain ArrayAws#log_sender_domain}
  */
  readonly logSenderDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#management_security_group ArrayAws#management_security_group}
  */
  readonly managementSecurityGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#management_subnet ArrayAws#management_subnet}
  */
  readonly managementSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#pureuser_key_pair_name ArrayAws#pureuser_key_pair_name}
  */
  readonly pureuserKeyPairName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#pureuser_private_key ArrayAws#pureuser_private_key}
  */
  readonly pureuserPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#pureuser_private_key_path ArrayAws#pureuser_private_key_path}
  */
  readonly pureuserPrivateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#replication_security_group ArrayAws#replication_security_group}
  */
  readonly replicationSecurityGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#replication_subnet ArrayAws#replication_subnet}
  */
  readonly replicationSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#system_subnet ArrayAws#system_subnet}
  */
  readonly systemSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#tags ArrayAws#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#timeouts ArrayAws#timeouts}
  */
  readonly timeouts?: ArrayAwsTimeouts;
}
export interface ArrayAwsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#create ArrayAws#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#delete ArrayAws#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#read ArrayAws#read}
  */
  readonly read?: string;
}

export function arrayAwsTimeoutsToTerraform(struct?: ArrayAwsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function arrayAwsTimeoutsToHclTerraform(struct?: ArrayAwsTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArrayAwsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArrayAwsTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArrayAwsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws cbs_array_aws}
*/
export class ArrayAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cbs_array_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArrayAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArrayAws to import
  * @param importFromId The id of the existing ArrayAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArrayAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cbs_array_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_aws cbs_array_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArrayAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ArrayAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'cbs_array_aws',
      terraformGeneratorMetadata: {
        providerName: 'cbs',
        providerVersion: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertRecipients = config.alertRecipients;
    this._arrayModel = config.arrayModel;
    this._arrayName = config.arrayName;
    this._deploymentRoleArn = config.deploymentRoleArn;
    this._deploymentTemplateUrl = config.deploymentTemplateUrl;
    this._id = config.id;
    this._iscsiSecurityGroup = config.iscsiSecurityGroup;
    this._iscsiSubnet = config.iscsiSubnet;
    this._licenseKey = config.licenseKey;
    this._logSenderDomain = config.logSenderDomain;
    this._managementSecurityGroup = config.managementSecurityGroup;
    this._managementSubnet = config.managementSubnet;
    this._pureuserKeyPairName = config.pureuserKeyPairName;
    this._pureuserPrivateKey = config.pureuserPrivateKey;
    this._pureuserPrivateKeyPath = config.pureuserPrivateKeyPath;
    this._replicationSecurityGroup = config.replicationSecurityGroup;
    this._replicationSubnet = config.replicationSubnet;
    this._systemSubnet = config.systemSubnet;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_recipients - computed: false, optional: true, required: false
  private _alertRecipients?: string[]; 
  public get alertRecipients() {
    return this.getListAttribute('alert_recipients');
  }
  public set alertRecipients(value: string[]) {
    this._alertRecipients = value;
  }
  public resetAlertRecipients() {
    this._alertRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRecipientsInput() {
    return this._alertRecipients;
  }

  // array_model - computed: false, optional: false, required: true
  private _arrayModel?: string; 
  public get arrayModel() {
    return this.getStringAttribute('array_model');
  }
  public set arrayModel(value: string) {
    this._arrayModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayModelInput() {
    return this._arrayModel;
  }

  // array_name - computed: false, optional: false, required: true
  private _arrayName?: string; 
  public get arrayName() {
    return this.getStringAttribute('array_name');
  }
  public set arrayName(value: string) {
    this._arrayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayNameInput() {
    return this._arrayName;
  }

  // deployment_role_arn - computed: false, optional: false, required: true
  private _deploymentRoleArn?: string; 
  public get deploymentRoleArn() {
    return this.getStringAttribute('deployment_role_arn');
  }
  public set deploymentRoleArn(value: string) {
    this._deploymentRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentRoleArnInput() {
    return this._deploymentRoleArn;
  }

  // deployment_template_url - computed: false, optional: false, required: true
  private _deploymentTemplateUrl?: string; 
  public get deploymentTemplateUrl() {
    return this.getStringAttribute('deployment_template_url');
  }
  public set deploymentTemplateUrl(value: string) {
    this._deploymentTemplateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTemplateUrlInput() {
    return this._deploymentTemplateUrl;
  }

  // gui_endpoint - computed: true, optional: false, required: false
  public get guiEndpoint() {
    return this.getStringAttribute('gui_endpoint');
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

  // iscsi_endpoint_ct0 - computed: true, optional: false, required: false
  public get iscsiEndpointCt0() {
    return this.getStringAttribute('iscsi_endpoint_ct0');
  }

  // iscsi_endpoint_ct1 - computed: true, optional: false, required: false
  public get iscsiEndpointCt1() {
    return this.getStringAttribute('iscsi_endpoint_ct1');
  }

  // iscsi_security_group - computed: false, optional: false, required: true
  private _iscsiSecurityGroup?: string; 
  public get iscsiSecurityGroup() {
    return this.getStringAttribute('iscsi_security_group');
  }
  public set iscsiSecurityGroup(value: string) {
    this._iscsiSecurityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiSecurityGroupInput() {
    return this._iscsiSecurityGroup;
  }

  // iscsi_subnet - computed: false, optional: false, required: true
  private _iscsiSubnet?: string; 
  public get iscsiSubnet() {
    return this.getStringAttribute('iscsi_subnet');
  }
  public set iscsiSubnet(value: string) {
    this._iscsiSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiSubnetInput() {
    return this._iscsiSubnet;
  }

  // license_key - computed: false, optional: false, required: true
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
  }

  // log_sender_domain - computed: false, optional: false, required: true
  private _logSenderDomain?: string; 
  public get logSenderDomain() {
    return this.getStringAttribute('log_sender_domain');
  }
  public set logSenderDomain(value: string) {
    this._logSenderDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSenderDomainInput() {
    return this._logSenderDomain;
  }

  // management_endpoint - computed: true, optional: false, required: false
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }

  // management_security_group - computed: false, optional: false, required: true
  private _managementSecurityGroup?: string; 
  public get managementSecurityGroup() {
    return this.getStringAttribute('management_security_group');
  }
  public set managementSecurityGroup(value: string) {
    this._managementSecurityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSecurityGroupInput() {
    return this._managementSecurityGroup;
  }

  // management_subnet - computed: false, optional: false, required: true
  private _managementSubnet?: string; 
  public get managementSubnet() {
    return this.getStringAttribute('management_subnet');
  }
  public set managementSubnet(value: string) {
    this._managementSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSubnetInput() {
    return this._managementSubnet;
  }

  // pureuser_key_pair_name - computed: false, optional: false, required: true
  private _pureuserKeyPairName?: string; 
  public get pureuserKeyPairName() {
    return this.getStringAttribute('pureuser_key_pair_name');
  }
  public set pureuserKeyPairName(value: string) {
    this._pureuserKeyPairName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pureuserKeyPairNameInput() {
    return this._pureuserKeyPairName;
  }

  // pureuser_private_key - computed: false, optional: true, required: false
  private _pureuserPrivateKey?: string; 
  public get pureuserPrivateKey() {
    return this.getStringAttribute('pureuser_private_key');
  }
  public set pureuserPrivateKey(value: string) {
    this._pureuserPrivateKey = value;
  }
  public resetPureuserPrivateKey() {
    this._pureuserPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureuserPrivateKeyInput() {
    return this._pureuserPrivateKey;
  }

  // pureuser_private_key_path - computed: false, optional: true, required: false
  private _pureuserPrivateKeyPath?: string; 
  public get pureuserPrivateKeyPath() {
    return this.getStringAttribute('pureuser_private_key_path');
  }
  public set pureuserPrivateKeyPath(value: string) {
    this._pureuserPrivateKeyPath = value;
  }
  public resetPureuserPrivateKeyPath() {
    this._pureuserPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureuserPrivateKeyPathInput() {
    return this._pureuserPrivateKeyPath;
  }

  // replication_endpoint_ct0 - computed: true, optional: false, required: false
  public get replicationEndpointCt0() {
    return this.getStringAttribute('replication_endpoint_ct0');
  }

  // replication_endpoint_ct1 - computed: true, optional: false, required: false
  public get replicationEndpointCt1() {
    return this.getStringAttribute('replication_endpoint_ct1');
  }

  // replication_security_group - computed: false, optional: false, required: true
  private _replicationSecurityGroup?: string; 
  public get replicationSecurityGroup() {
    return this.getStringAttribute('replication_security_group');
  }
  public set replicationSecurityGroup(value: string) {
    this._replicationSecurityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSecurityGroupInput() {
    return this._replicationSecurityGroup;
  }

  // replication_subnet - computed: false, optional: false, required: true
  private _replicationSubnet?: string; 
  public get replicationSubnet() {
    return this.getStringAttribute('replication_subnet');
  }
  public set replicationSubnet(value: string) {
    this._replicationSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetInput() {
    return this._replicationSubnet;
  }

  // resume_lambda - computed: true, optional: false, required: false
  public get resumeLambda() {
    return this.getStringAttribute('resume_lambda');
  }

  // stack_name - computed: true, optional: false, required: false
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }

  // system_subnet - computed: false, optional: false, required: true
  private _systemSubnet?: string; 
  public get systemSubnet() {
    return this.getStringAttribute('system_subnet');
  }
  public set systemSubnet(value: string) {
    this._systemSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSubnetInput() {
    return this._systemSubnet;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArrayAwsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArrayAwsTimeouts) {
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
      alert_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRecipients),
      array_model: cdktf.stringToTerraform(this._arrayModel),
      array_name: cdktf.stringToTerraform(this._arrayName),
      deployment_role_arn: cdktf.stringToTerraform(this._deploymentRoleArn),
      deployment_template_url: cdktf.stringToTerraform(this._deploymentTemplateUrl),
      id: cdktf.stringToTerraform(this._id),
      iscsi_security_group: cdktf.stringToTerraform(this._iscsiSecurityGroup),
      iscsi_subnet: cdktf.stringToTerraform(this._iscsiSubnet),
      license_key: cdktf.stringToTerraform(this._licenseKey),
      log_sender_domain: cdktf.stringToTerraform(this._logSenderDomain),
      management_security_group: cdktf.stringToTerraform(this._managementSecurityGroup),
      management_subnet: cdktf.stringToTerraform(this._managementSubnet),
      pureuser_key_pair_name: cdktf.stringToTerraform(this._pureuserKeyPairName),
      pureuser_private_key: cdktf.stringToTerraform(this._pureuserPrivateKey),
      pureuser_private_key_path: cdktf.stringToTerraform(this._pureuserPrivateKeyPath),
      replication_security_group: cdktf.stringToTerraform(this._replicationSecurityGroup),
      replication_subnet: cdktf.stringToTerraform(this._replicationSubnet),
      system_subnet: cdktf.stringToTerraform(this._systemSubnet),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: arrayAwsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertRecipients),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      array_model: {
        value: cdktf.stringToHclTerraform(this._arrayModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      array_name: {
        value: cdktf.stringToHclTerraform(this._arrayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_role_arn: {
        value: cdktf.stringToHclTerraform(this._deploymentRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_template_url: {
        value: cdktf.stringToHclTerraform(this._deploymentTemplateUrl),
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
      iscsi_security_group: {
        value: cdktf.stringToHclTerraform(this._iscsiSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iscsi_subnet: {
        value: cdktf.stringToHclTerraform(this._iscsiSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_key: {
        value: cdktf.stringToHclTerraform(this._licenseKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_sender_domain: {
        value: cdktf.stringToHclTerraform(this._logSenderDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_security_group: {
        value: cdktf.stringToHclTerraform(this._managementSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_subnet: {
        value: cdktf.stringToHclTerraform(this._managementSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pureuser_key_pair_name: {
        value: cdktf.stringToHclTerraform(this._pureuserKeyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pureuser_private_key: {
        value: cdktf.stringToHclTerraform(this._pureuserPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pureuser_private_key_path: {
        value: cdktf.stringToHclTerraform(this._pureuserPrivateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_security_group: {
        value: cdktf.stringToHclTerraform(this._replicationSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_subnet: {
        value: cdktf.stringToHclTerraform(this._replicationSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_subnet: {
        value: cdktf.stringToHclTerraform(this._systemSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: arrayAwsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArrayAwsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
