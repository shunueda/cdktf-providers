// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudBastionhostHostAccountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#host_account_name DataAlicloudBastionhostHostAccounts#host_account_name}
  */
  readonly hostAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#host_id DataAlicloudBastionhostHostAccounts#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#id DataAlicloudBastionhostHostAccounts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#ids DataAlicloudBastionhostHostAccounts#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#instance_id DataAlicloudBastionhostHostAccounts#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#name_regex DataAlicloudBastionhostHostAccounts#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#output_file DataAlicloudBastionhostHostAccounts#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#protocol_name DataAlicloudBastionhostHostAccounts#protocol_name}
  */
  readonly protocolName?: string;
}
export interface DataAlicloudBastionhostHostAccountsAccounts {
}

export function dataAlicloudBastionhostHostAccountsAccountsToTerraform(struct?: DataAlicloudBastionhostHostAccountsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudBastionhostHostAccountsAccountsToHclTerraform(struct?: DataAlicloudBastionhostHostAccountsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudBastionhostHostAccountsAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudBastionhostHostAccountsAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudBastionhostHostAccountsAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_password - computed: true, optional: false, required: false
  public get hasPassword() {
    return this.getBooleanAttribute('has_password');
  }

  // host_account_id - computed: true, optional: false, required: false
  public get hostAccountId() {
    return this.getStringAttribute('host_account_id');
  }

  // host_account_name - computed: true, optional: false, required: false
  public get hostAccountName() {
    return this.getStringAttribute('host_account_name');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // private_key_fingerprint - computed: true, optional: false, required: false
  public get privateKeyFingerprint() {
    return this.getStringAttribute('private_key_fingerprint');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }
}

export class DataAlicloudBastionhostHostAccountsAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudBastionhostHostAccountsAccountsOutputReference {
    return new DataAlicloudBastionhostHostAccountsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts alicloud_bastionhost_host_accounts}
*/
export class DataAlicloudBastionhostHostAccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_bastionhost_host_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudBastionhostHostAccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudBastionhostHostAccounts to import
  * @param importFromId The id of the existing DataAlicloudBastionhostHostAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudBastionhostHostAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_bastionhost_host_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/bastionhost_host_accounts alicloud_bastionhost_host_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudBastionhostHostAccountsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudBastionhostHostAccountsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_bastionhost_host_accounts',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostAccountName = config.hostAccountName;
    this._hostId = config.hostId;
    this._id = config.id;
    this._ids = config.ids;
    this._instanceId = config.instanceId;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._protocolName = config.protocolName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataAlicloudBastionhostHostAccountsAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // host_account_name - computed: false, optional: true, required: false
  private _hostAccountName?: string; 
  public get hostAccountName() {
    return this.getStringAttribute('host_account_name');
  }
  public set hostAccountName(value: string) {
    this._hostAccountName = value;
  }
  public resetHostAccountName() {
    this._hostAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAccountNameInput() {
    return this._hostAccountName;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // protocol_name - computed: false, optional: true, required: false
  private _protocolName?: string; 
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }
  public set protocolName(value: string) {
    this._protocolName = value;
  }
  public resetProtocolName() {
    this._protocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNameInput() {
    return this._protocolName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_account_name: cdktf.stringToTerraform(this._hostAccountName),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      protocol_name: cdktf.stringToTerraform(this._protocolName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_account_name: {
        value: cdktf.stringToHclTerraform(this._hostAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_name: {
        value: cdktf.stringToHclTerraform(this._protocolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
