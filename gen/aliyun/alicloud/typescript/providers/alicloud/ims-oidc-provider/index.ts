// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImsOidcProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#client_ids ImsOidcProvider#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#description ImsOidcProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#fingerprints ImsOidcProvider#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#id ImsOidcProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#issuance_limit_time ImsOidcProvider#issuance_limit_time}
  */
  readonly issuanceLimitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#issuer_url ImsOidcProvider#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#oidc_provider_name ImsOidcProvider#oidc_provider_name}
  */
  readonly oidcProviderName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#timeouts ImsOidcProvider#timeouts}
  */
  readonly timeouts?: ImsOidcProviderTimeouts;
}
export interface ImsOidcProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#create ImsOidcProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#delete ImsOidcProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#update ImsOidcProvider#update}
  */
  readonly update?: string;
}

export function imsOidcProviderTimeoutsToTerraform(struct?: ImsOidcProviderTimeouts | cdktf.IResolvable): any {
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


export function imsOidcProviderTimeoutsToHclTerraform(struct?: ImsOidcProviderTimeouts | cdktf.IResolvable): any {
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

export class ImsOidcProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImsOidcProviderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ImsOidcProviderTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider alicloud_ims_oidc_provider}
*/
export class ImsOidcProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ims_oidc_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImsOidcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImsOidcProvider to import
  * @param importFromId The id of the existing ImsOidcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImsOidcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ims_oidc_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ims_oidc_provider alicloud_ims_oidc_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImsOidcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ImsOidcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ims_oidc_provider',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientIds = config.clientIds;
    this._description = config.description;
    this._fingerprints = config.fingerprints;
    this._id = config.id;
    this._issuanceLimitTime = config.issuanceLimitTime;
    this._issuerUrl = config.issuerUrl;
    this._oidcProviderName = config.oidcProviderName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_ids - computed: false, optional: true, required: false
  private _clientIds?: string[]; 
  public get clientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('client_ids'));
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints?: string[]; 
  public get fingerprints() {
    return cdktf.Fn.tolist(this.getListAttribute('fingerprints'));
  }
  public set fingerprints(value: string[]) {
    this._fingerprints = value;
  }
  public resetFingerprints() {
    this._fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints;
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

  // issuance_limit_time - computed: true, optional: true, required: false
  private _issuanceLimitTime?: number; 
  public get issuanceLimitTime() {
    return this.getNumberAttribute('issuance_limit_time');
  }
  public set issuanceLimitTime(value: number) {
    this._issuanceLimitTime = value;
  }
  public resetIssuanceLimitTime() {
    this._issuanceLimitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceLimitTimeInput() {
    return this._issuanceLimitTime;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // oidc_provider_name - computed: false, optional: false, required: true
  private _oidcProviderName?: string; 
  public get oidcProviderName() {
    return this.getStringAttribute('oidc_provider_name');
  }
  public set oidcProviderName(value: string) {
    this._oidcProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcProviderNameInput() {
    return this._oidcProviderName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ImsOidcProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ImsOidcProviderTimeouts) {
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
      client_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientIds),
      description: cdktf.stringToTerraform(this._description),
      fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fingerprints),
      id: cdktf.stringToTerraform(this._id),
      issuance_limit_time: cdktf.numberToTerraform(this._issuanceLimitTime),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      oidc_provider_name: cdktf.stringToTerraform(this._oidcProviderName),
      timeouts: imsOidcProviderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fingerprints),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuance_limit_time: {
        value: cdktf.numberToHclTerraform(this._issuanceLimitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_provider_name: {
        value: cdktf.stringToHclTerraform(this._oidcProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: imsOidcProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImsOidcProviderTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
