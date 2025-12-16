// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradePrepareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to accept the user agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#accept_user_agreement UpgradePrepare#accept_user_agreement}
  */
  readonly acceptUserAgreement: boolean | cdktf.IResolvable;
  /**
  * Timeout for uploading bundle in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#bundle_upload_timeout UpgradePrepare#bundle_upload_timeout}
  */
  readonly bundleUploadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#id UpgradePrepare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * URL of the NSXT Upgrade precheck bundle (Only applied to NSXT version >= 4.1.1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#precheck_bundle_url UpgradePrepare#precheck_bundle_url}
  */
  readonly precheckBundleUrl?: string;
  /**
  * Timeout for executing pre-upgrade checks in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#precheck_timeout UpgradePrepare#precheck_timeout}
  */
  readonly precheckTimeout?: number;
  /**
  * Timeout for upgrading upgrade coordinator in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#uc_upgrade_timeout UpgradePrepare#uc_upgrade_timeout}
  */
  readonly ucUpgradeTimeout?: number;
  /**
  * URL of the NSXT Upgrade bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#upgrade_bundle_url UpgradePrepare#upgrade_bundle_url}
  */
  readonly upgradeBundleUrl: string;
  /**
  * Target upgrade version for NSX, format is x.x.x..., should include at least 3 digits, example: 4.1.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#version UpgradePrepare#version}
  */
  readonly version?: string;
}
export interface UpgradePrepareFailedPrechecks {
}

export function upgradePrepareFailedPrechecksToTerraform(struct?: UpgradePrepareFailedPrechecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function upgradePrepareFailedPrechecksToHclTerraform(struct?: UpgradePrepareFailedPrechecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpgradePrepareFailedPrechecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradePrepareFailedPrechecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradePrepareFailedPrechecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acked - computed: true, optional: false, required: false
  public get acked() {
    return this.getBooleanAttribute('acked');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // needs_ack - computed: true, optional: false, required: false
  public get needsAck() {
    return this.getBooleanAttribute('needs_ack');
  }

  // needs_resolve - computed: true, optional: false, required: false
  public get needsResolve() {
    return this.getBooleanAttribute('needs_resolve');
  }

  // resolution_status - computed: true, optional: false, required: false
  public get resolutionStatus() {
    return this.getStringAttribute('resolution_status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class UpgradePrepareFailedPrechecksList extends cdktf.ComplexList {

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
  public get(index: number): UpgradePrepareFailedPrechecksOutputReference {
    return new UpgradePrepareFailedPrechecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare nsxt_upgrade_prepare}
*/
export class UpgradePrepare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_upgrade_prepare";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpgradePrepare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpgradePrepare to import
  * @param importFromId The id of the existing UpgradePrepare that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpgradePrepare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_upgrade_prepare", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/upgrade_prepare nsxt_upgrade_prepare} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradePrepareConfig
  */
  public constructor(scope: Construct, id: string, config: UpgradePrepareConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_upgrade_prepare',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptUserAgreement = config.acceptUserAgreement;
    this._bundleUploadTimeout = config.bundleUploadTimeout;
    this._id = config.id;
    this._precheckBundleUrl = config.precheckBundleUrl;
    this._precheckTimeout = config.precheckTimeout;
    this._ucUpgradeTimeout = config.ucUpgradeTimeout;
    this._upgradeBundleUrl = config.upgradeBundleUrl;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_user_agreement - computed: false, optional: false, required: true
  private _acceptUserAgreement?: boolean | cdktf.IResolvable; 
  public get acceptUserAgreement() {
    return this.getBooleanAttribute('accept_user_agreement');
  }
  public set acceptUserAgreement(value: boolean | cdktf.IResolvable) {
    this._acceptUserAgreement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUserAgreementInput() {
    return this._acceptUserAgreement;
  }

  // bundle_upload_timeout - computed: false, optional: true, required: false
  private _bundleUploadTimeout?: number; 
  public get bundleUploadTimeout() {
    return this.getNumberAttribute('bundle_upload_timeout');
  }
  public set bundleUploadTimeout(value: number) {
    this._bundleUploadTimeout = value;
  }
  public resetBundleUploadTimeout() {
    this._bundleUploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleUploadTimeoutInput() {
    return this._bundleUploadTimeout;
  }

  // failed_prechecks - computed: true, optional: false, required: false
  private _failedPrechecks = new UpgradePrepareFailedPrechecksList(this, "failed_prechecks", false);
  public get failedPrechecks() {
    return this._failedPrechecks;
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

  // precheck_bundle_url - computed: false, optional: true, required: false
  private _precheckBundleUrl?: string; 
  public get precheckBundleUrl() {
    return this.getStringAttribute('precheck_bundle_url');
  }
  public set precheckBundleUrl(value: string) {
    this._precheckBundleUrl = value;
  }
  public resetPrecheckBundleUrl() {
    this._precheckBundleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckBundleUrlInput() {
    return this._precheckBundleUrl;
  }

  // precheck_timeout - computed: false, optional: true, required: false
  private _precheckTimeout?: number; 
  public get precheckTimeout() {
    return this.getNumberAttribute('precheck_timeout');
  }
  public set precheckTimeout(value: number) {
    this._precheckTimeout = value;
  }
  public resetPrecheckTimeout() {
    this._precheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckTimeoutInput() {
    return this._precheckTimeout;
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // uc_upgrade_timeout - computed: false, optional: true, required: false
  private _ucUpgradeTimeout?: number; 
  public get ucUpgradeTimeout() {
    return this.getNumberAttribute('uc_upgrade_timeout');
  }
  public set ucUpgradeTimeout(value: number) {
    this._ucUpgradeTimeout = value;
  }
  public resetUcUpgradeTimeout() {
    this._ucUpgradeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucUpgradeTimeoutInput() {
    return this._ucUpgradeTimeout;
  }

  // upgrade_bundle_url - computed: false, optional: false, required: true
  private _upgradeBundleUrl?: string; 
  public get upgradeBundleUrl() {
    return this.getStringAttribute('upgrade_bundle_url');
  }
  public set upgradeBundleUrl(value: string) {
    this._upgradeBundleUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeBundleUrlInput() {
    return this._upgradeBundleUrl;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_user_agreement: cdktf.booleanToTerraform(this._acceptUserAgreement),
      bundle_upload_timeout: cdktf.numberToTerraform(this._bundleUploadTimeout),
      id: cdktf.stringToTerraform(this._id),
      precheck_bundle_url: cdktf.stringToTerraform(this._precheckBundleUrl),
      precheck_timeout: cdktf.numberToTerraform(this._precheckTimeout),
      uc_upgrade_timeout: cdktf.numberToTerraform(this._ucUpgradeTimeout),
      upgrade_bundle_url: cdktf.stringToTerraform(this._upgradeBundleUrl),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_user_agreement: {
        value: cdktf.booleanToHclTerraform(this._acceptUserAgreement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_upload_timeout: {
        value: cdktf.numberToHclTerraform(this._bundleUploadTimeout),
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
      precheck_bundle_url: {
        value: cdktf.stringToHclTerraform(this._precheckBundleUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      precheck_timeout: {
        value: cdktf.numberToHclTerraform(this._precheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uc_upgrade_timeout: {
        value: cdktf.numberToHclTerraform(this._ucUpgradeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_bundle_url: {
        value: cdktf.stringToHclTerraform(this._upgradeBundleUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
