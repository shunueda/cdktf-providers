// https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppAwselbConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access key for retrieval of stats from AWS Cloudwatch. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#aws_access_key AppAwselb#aws_access_key}
  */
  readonly awsAccessKey: string;
  /**
  * How frequently to fetch metrics. One of MINUTE|FIVE_MINUTES|FIFTEEN_MINUTES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#aws_fetch_frequency AppAwselb#aws_fetch_frequency}
  */
  readonly awsFetchFrequency: string;
  /**
  * The region where AWS operations will take place. Examples
  * are us-east-1, us-west-2, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#aws_region AppAwselb#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The secret key for retrieval of stats from AWS Cloudwatch. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#aws_secret_key AppAwselb#aws_secret_key}
  */
  readonly awsSecretKey: string;
  /**
  * (Required) Plan ID attached to the monitor app in Sematext Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#billing_plan_id AppAwselb#billing_plan_id}
  */
  readonly billingPlanId: number;
  /**
  * (Optional) Iniitial discount code attached to the monitor app in Sematext Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#discount_code AppAwselb#discount_code}
  */
  readonly discountCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#id AppAwselb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Required) Label for the monitor app in Sematext Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#name AppAwselb#name}
  */
  readonly name: string;
  /**
  * apptoken block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#apptoken AppAwselb#apptoken}
  */
  readonly apptoken: AppAwselbApptoken[] | cdktf.IResolvable;
}
export interface AppAwselbApptoken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#names AppAwselb#names}
  */
  readonly names: string[];
}

export function appAwselbApptokenToTerraform(struct?: AppAwselbApptoken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function appAwselbApptokenToHclTerraform(struct?: AppAwselbApptoken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppAwselbApptokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppAwselbApptoken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppAwselbApptoken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

export class AppAwselbApptokenList extends cdktf.ComplexList {
  public internalValue? : AppAwselbApptoken[] | cdktf.IResolvable

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
  public get(index: number): AppAwselbApptokenOutputReference {
    return new AppAwselbApptokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb sematext_app_awselb}
*/
export class AppAwselb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sematext_app_awselb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppAwselb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppAwselb to import
  * @param importFromId The id of the existing AppAwselb that should be imported. Refer to the {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppAwselb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sematext_app_awselb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_awselb sematext_app_awselb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppAwselbConfig
  */
  public constructor(scope: Construct, id: string, config: AppAwselbConfig) {
    super(scope, id, {
      terraformResourceType: 'sematext_app_awselb',
      terraformGeneratorMetadata: {
        providerName: 'sematext',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKey = config.awsAccessKey;
    this._awsFetchFrequency = config.awsFetchFrequency;
    this._awsRegion = config.awsRegion;
    this._awsSecretKey = config.awsSecretKey;
    this._billingPlanId = config.billingPlanId;
    this._discountCode = config.discountCode;
    this._id = config.id;
    this._name = config.name;
    this._apptoken.internalValue = config.apptoken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key - computed: false, optional: false, required: true
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_fetch_frequency - computed: false, optional: false, required: true
  private _awsFetchFrequency?: string; 
  public get awsFetchFrequency() {
    return this.getStringAttribute('aws_fetch_frequency');
  }
  public set awsFetchFrequency(value: string) {
    this._awsFetchFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsFetchFrequencyInput() {
    return this._awsFetchFrequency;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_key - computed: false, optional: false, required: true
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // billing_plan_id - computed: false, optional: false, required: true
  private _billingPlanId?: number; 
  public get billingPlanId() {
    return this.getNumberAttribute('billing_plan_id');
  }
  public set billingPlanId(value: number) {
    this._billingPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPlanIdInput() {
    return this._billingPlanId;
  }

  // discount_code - computed: false, optional: true, required: false
  private _discountCode?: string; 
  public get discountCode() {
    return this.getStringAttribute('discount_code');
  }
  public set discountCode(value: string) {
    this._discountCode = value;
  }
  public resetDiscountCode() {
    this._discountCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discountCodeInput() {
    return this._discountCode;
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

  // sc_apptoken_entries - computed: true, optional: false, required: false
  private _scApptokenEntries = new cdktf.StringMap(this, "sc_apptoken_entries");
  public get scApptokenEntries() {
    return this._scApptokenEntries;
  }

  // apptoken - computed: false, optional: false, required: true
  private _apptoken = new AppAwselbApptokenList(this, "apptoken", true);
  public get apptoken() {
    return this._apptoken;
  }
  public putApptoken(value: AppAwselbApptoken[] | cdktf.IResolvable) {
    this._apptoken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apptokenInput() {
    return this._apptoken.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_fetch_frequency: cdktf.stringToTerraform(this._awsFetchFrequency),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      billing_plan_id: cdktf.numberToTerraform(this._billingPlanId),
      discount_code: cdktf.stringToTerraform(this._discountCode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      apptoken: cdktf.listMapper(appAwselbApptokenToTerraform, true)(this._apptoken.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_fetch_frequency: {
        value: cdktf.stringToHclTerraform(this._awsFetchFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
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
      billing_plan_id: {
        value: cdktf.numberToHclTerraform(this._billingPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      discount_code: {
        value: cdktf.stringToHclTerraform(this._discountCode),
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
      apptoken: {
        value: cdktf.listMapperHcl(appAwselbApptokenToHclTerraform, true)(this._apptoken.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppAwselbApptokenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
