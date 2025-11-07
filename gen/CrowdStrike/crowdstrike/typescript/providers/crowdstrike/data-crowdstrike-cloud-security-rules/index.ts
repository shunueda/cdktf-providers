// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrowdstrikeCloudSecurityRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the benchmark that this rule is attached to. Note that rules can be associated with multiple benchmarks. Example: `CIS 1.0.0 AWS*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#benchmark DataCrowdstrikeCloudSecurityRules#benchmark}
  */
  readonly benchmark?: string;
  /**
  * Cloud provider for where the rule resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#cloud_provider DataCrowdstrikeCloudSecurityRules#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Falcon Query Language (FQL) filter for advanced control searches. FQL filter, allowed props: `rule_origin`, `rule_parent_uuid`, `rule_name`, `rule_description`, `rule_domain`, `rule_status`, `rule_severity`, `rule_short_code`, `rule_service`, `rule_resource_type`, `rule_provider`, `rule_subdomain`, `rule_auto_remediable`, `rule_control_requirement`, `rule_control_section`, `rule_compliance_benchmark`, `rule_compliance_framework`, `rule_mitre_tactic`, `rule_mitre_technique`, `rule_created_at`, `rule_updated_at`, `rule_updated_by`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#fql DataCrowdstrikeCloudSecurityRules#fql}
  */
  readonly fql?: string;
  /**
  * Name of the framework that this rule is attached to. Note that rules can be associated with multiple benchmarks. Examples: CIS, NIST 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#framework DataCrowdstrikeCloudSecurityRules#framework}
  */
  readonly framework?: string;
  /**
  * Name of the resource type to search for. Examples: `AWS::IAM::CredentialReport`, `Microsoft.Compute/virtualMachines`, `container.googleapis.com/Cluster`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#resource_type DataCrowdstrikeCloudSecurityRules#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Name of the rule to search for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#rule_name DataCrowdstrikeCloudSecurityRules#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Name of the service within the cloud provider that rule is for. Examples: IAM, S3, Microsoft.Compute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#service DataCrowdstrikeCloudSecurityRules#service}
  */
  readonly service?: string;
}
export interface DataCrowdstrikeCloudSecurityRulesRulesControls {
}

export function dataCrowdstrikeCloudSecurityRulesRulesControlsToTerraform(struct?: DataCrowdstrikeCloudSecurityRulesRulesControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeCloudSecurityRulesRulesControlsToHclTerraform(struct?: DataCrowdstrikeCloudSecurityRulesRulesControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeCloudSecurityRulesRulesControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeCloudSecurityRulesRulesControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeCloudSecurityRulesRulesControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  public get authority() {
    return this.getStringAttribute('authority');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class DataCrowdstrikeCloudSecurityRulesRulesControlsList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeCloudSecurityRulesRulesControlsOutputReference {
    return new DataCrowdstrikeCloudSecurityRulesRulesControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCrowdstrikeCloudSecurityRulesRules {
}

export function dataCrowdstrikeCloudSecurityRulesRulesToTerraform(struct?: DataCrowdstrikeCloudSecurityRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeCloudSecurityRulesRulesToHclTerraform(struct?: DataCrowdstrikeCloudSecurityRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeCloudSecurityRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeCloudSecurityRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeCloudSecurityRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_info - computed: true, optional: false, required: false
  public get alertInfo() {
    return this.getListAttribute('alert_info');
  }

  // attack_types - computed: true, optional: false, required: false
  public get attackTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('attack_types'));
  }

  // auto_remediable - computed: true, optional: false, required: false
  public get autoRemediable() {
    return this.getBooleanAttribute('auto_remediable');
  }

  // cloud_platform - computed: true, optional: false, required: false
  public get cloudPlatform() {
    return this.getStringAttribute('cloud_platform');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // controls - computed: true, optional: false, required: false
  private _controls = new DataCrowdstrikeCloudSecurityRulesRulesControlsList(this, "controls", true);
  public get controls() {
    return this._controls;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_rule_id - computed: true, optional: false, required: false
  public get parentRuleId() {
    return this.getStringAttribute('parent_rule_id');
  }

  // remediation_info - computed: true, optional: false, required: false
  public get remediationInfo() {
    return this.getListAttribute('remediation_info');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
}

export class DataCrowdstrikeCloudSecurityRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeCloudSecurityRulesRulesOutputReference {
    return new DataCrowdstrikeCloudSecurityRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules crowdstrike_cloud_security_rules}
*/
export class DataCrowdstrikeCloudSecurityRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_security_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrowdstrikeCloudSecurityRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrowdstrikeCloudSecurityRules to import
  * @param importFromId The id of the existing DataCrowdstrikeCloudSecurityRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrowdstrikeCloudSecurityRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_security_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/data-sources/cloud_security_rules crowdstrike_cloud_security_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrowdstrikeCloudSecurityRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrowdstrikeCloudSecurityRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_security_rules',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._benchmark = config.benchmark;
    this._cloudProvider = config.cloudProvider;
    this._fql = config.fql;
    this._framework = config.framework;
    this._resourceType = config.resourceType;
    this._ruleName = config.ruleName;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // benchmark - computed: false, optional: true, required: false
  private _benchmark?: string; 
  public get benchmark() {
    return this.getStringAttribute('benchmark');
  }
  public set benchmark(value: string) {
    this._benchmark = value;
  }
  public resetBenchmark() {
    this._benchmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get benchmarkInput() {
    return this._benchmark;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // fql - computed: false, optional: true, required: false
  private _fql?: string; 
  public get fql() {
    return this.getStringAttribute('fql');
  }
  public set fql(value: string) {
    this._fql = value;
  }
  public resetFql() {
    this._fql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqlInput() {
    return this._fql;
  }

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCrowdstrikeCloudSecurityRulesRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      benchmark: cdktf.stringToTerraform(this._benchmark),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      fql: cdktf.stringToTerraform(this._fql),
      framework: cdktf.stringToTerraform(this._framework),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      benchmark: {
        value: cdktf.stringToHclTerraform(this._benchmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fql: {
        value: cdktf.stringToHclTerraform(this._fql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      framework: {
        value: cdktf.stringToHclTerraform(this._framework),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
