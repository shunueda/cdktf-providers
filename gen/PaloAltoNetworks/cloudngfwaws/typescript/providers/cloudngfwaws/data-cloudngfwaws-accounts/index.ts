// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudngfwawsAccountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of account ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts#account_ids DataCloudngfwawsAccounts#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Flag to include account details while listing accounts. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts#describe DataCloudngfwawsAccounts#describe}
  */
  readonly describe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts#id DataCloudngfwawsAccounts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * account_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts#account_details DataCloudngfwawsAccounts#account_details}
  */
  readonly accountDetails?: DataCloudngfwawsAccountsAccountDetails[] | cdktf.IResolvable;
}
export interface DataCloudngfwawsAccountsAccountDetails {
}

export function dataCloudngfwawsAccountsAccountDetailsToTerraform(struct?: DataCloudngfwawsAccountsAccountDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudngfwawsAccountsAccountDetailsToHclTerraform(struct?: DataCloudngfwawsAccountsAccountDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudngfwawsAccountsAccountDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudngfwawsAccountsAccountDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudngfwawsAccountsAccountDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // onboarding_status - computed: true, optional: false, required: false
  public get onboardingStatus() {
    return this.getStringAttribute('onboarding_status');
  }
}

export class DataCloudngfwawsAccountsAccountDetailsList extends cdktf.ComplexList {
  public internalValue? : DataCloudngfwawsAccountsAccountDetails[] | cdktf.IResolvable

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
  public get(index: number): DataCloudngfwawsAccountsAccountDetailsOutputReference {
    return new DataCloudngfwawsAccountsAccountDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts cloudngfwaws_accounts}
*/
export class DataCloudngfwawsAccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudngfwawsAccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudngfwawsAccounts to import
  * @param importFromId The id of the existing DataCloudngfwawsAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudngfwawsAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/accounts cloudngfwaws_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudngfwawsAccountsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudngfwawsAccountsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_accounts',
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
    this._accountIds = config.accountIds;
    this._describe = config.describe;
    this._id = config.id;
    this._accountDetails.internalValue = config.accountDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_ids - computed: true, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // describe - computed: false, optional: true, required: false
  private _describe?: boolean | cdktf.IResolvable; 
  public get describe() {
    return this.getBooleanAttribute('describe');
  }
  public set describe(value: boolean | cdktf.IResolvable) {
    this._describe = value;
  }
  public resetDescribe() {
    this._describe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get describeInput() {
    return this._describe;
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

  // account_details - computed: false, optional: true, required: false
  private _accountDetails = new DataCloudngfwawsAccountsAccountDetailsList(this, "account_details", false);
  public get accountDetails() {
    return this._accountDetails;
  }
  public putAccountDetails(value: DataCloudngfwawsAccountsAccountDetails[] | cdktf.IResolvable) {
    this._accountDetails.internalValue = value;
  }
  public resetAccountDetails() {
    this._accountDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDetailsInput() {
    return this._accountDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountIds),
      describe: cdktf.booleanToTerraform(this._describe),
      id: cdktf.stringToTerraform(this._id),
      account_details: cdktf.listMapper(dataCloudngfwawsAccountsAccountDetailsToTerraform, true)(this._accountDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      describe: {
        value: cdktf.booleanToHclTerraform(this._describe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_details: {
        value: cdktf.listMapperHcl(dataCloudngfwawsAccountsAccountDetailsToHclTerraform, true)(this._accountDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCloudngfwawsAccountsAccountDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
