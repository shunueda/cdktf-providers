// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapNfsExportPolicyRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules#cx_profile_name DataNetappOntapNfsExportPolicyRules#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Export policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules#export_policy_name DataNetappOntapNfsExportPolicyRules#export_policy_name}
  */
  readonly exportPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules#filter DataNetappOntapNfsExportPolicyRules#filter}
  */
  readonly filter?: DataNetappOntapNfsExportPolicyRulesFilter;
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules#svm_name DataNetappOntapNfsExportPolicyRules#svm_name}
  */
  readonly svmName: string;
}
export interface DataNetappOntapNfsExportPolicyRulesFilter {
  /**
  * ProtocolsNFSExportPolicyRule svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules#svm_name DataNetappOntapNfsExportPolicyRules#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapNfsExportPolicyRulesFilterToTerraform(struct?: DataNetappOntapNfsExportPolicyRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapNfsExportPolicyRulesFilterToHclTerraform(struct?: DataNetappOntapNfsExportPolicyRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapNfsExportPolicyRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsExportPolicyRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsExportPolicyRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._svmName = value.svmName;
    }
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}
export interface DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRules {
}

export function dataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRulesToTerraform(struct?: DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRulesToHclTerraform(struct?: DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_device_creation - computed: true, optional: false, required: false
  public get allowDeviceCreation() {
    return this.getBooleanAttribute('allow_device_creation');
  }

  // allow_suid - computed: true, optional: false, required: false
  public get allowSuid() {
    return this.getBooleanAttribute('allow_suid');
  }

  // anonymous_user - computed: true, optional: false, required: false
  public get anonymousUser() {
    return this.getStringAttribute('anonymous_user');
  }

  // chown_mode - computed: true, optional: false, required: false
  public get chownMode() {
    return this.getStringAttribute('chown_mode');
  }

  // clients_match - computed: true, optional: false, required: false
  public get clientsMatch() {
    return this.getListAttribute('clients_match');
  }

  // cx_profile_name - computed: true, optional: false, required: false
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }

  // export_policy_id - computed: true, optional: false, required: false
  public get exportPolicyId() {
    return this.getStringAttribute('export_policy_id');
  }

  // export_policy_name - computed: true, optional: false, required: false
  public get exportPolicyName() {
    return this.getStringAttribute('export_policy_name');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ntfs_unix_security - computed: true, optional: false, required: false
  public get ntfsUnixSecurity() {
    return this.getStringAttribute('ntfs_unix_security');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // ro_rule - computed: true, optional: false, required: false
  public get roRule() {
    return this.getListAttribute('ro_rule');
  }

  // rw_rule - computed: true, optional: false, required: false
  public get rwRule() {
    return this.getListAttribute('rw_rule');
  }

  // superuser - computed: true, optional: false, required: false
  public get superuser() {
    return this.getListAttribute('superuser');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
}

export class DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRulesOutputReference {
    return new DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules netapp-ontap_nfs_export_policy_rules}
*/
export class DataNetappOntapNfsExportPolicyRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_nfs_export_policy_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapNfsExportPolicyRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapNfsExportPolicyRules to import
  * @param importFromId The id of the existing DataNetappOntapNfsExportPolicyRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapNfsExportPolicyRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_nfs_export_policy_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rules netapp-ontap_nfs_export_policy_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapNfsExportPolicyRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapNfsExportPolicyRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_nfs_export_policy_rules',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._exportPolicyName = config.exportPolicyName;
    this._filter.internalValue = config.filter;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // export_policy_name - computed: false, optional: false, required: true
  private _exportPolicyName?: string; 
  public get exportPolicyName() {
    return this.getStringAttribute('export_policy_name');
  }
  public set exportPolicyName(value: string) {
    this._exportPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyNameInput() {
    return this._exportPolicyName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapNfsExportPolicyRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapNfsExportPolicyRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // protocols_nfs_export_policy_rules - computed: true, optional: false, required: false
  private _protocolsNfsExportPolicyRules = new DataNetappOntapNfsExportPolicyRulesProtocolsNfsExportPolicyRulesList(this, "protocols_nfs_export_policy_rules", false);
  public get protocolsNfsExportPolicyRules() {
    return this._protocolsNfsExportPolicyRules;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      export_policy_name: cdktf.stringToTerraform(this._exportPolicyName),
      filter: dataNetappOntapNfsExportPolicyRulesFilterToTerraform(this._filter.internalValue),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_policy_name: {
        value: cdktf.stringToHclTerraform(this._exportPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataNetappOntapNfsExportPolicyRulesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapNfsExportPolicyRulesFilter",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
