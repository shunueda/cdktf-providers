// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingProjectMasterdataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#additional_information BillingProjectMasterdata#additional_information}
  */
  readonly additionalInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#business_criticality BillingProjectMasterdata#business_criticality}
  */
  readonly businessCriticality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#contains_external_customer_data BillingProjectMasterdata#contains_external_customer_data}
  */
  readonly containsExternalCustomerData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#contains_pii_dpp_hr BillingProjectMasterdata#contains_pii_dpp_hr}
  */
  readonly containsPiiDppHr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#customer BillingProjectMasterdata#customer}
  */
  readonly customer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#description BillingProjectMasterdata#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#domain_id BillingProjectMasterdata#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#domain_name BillingProjectMasterdata#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#environment BillingProjectMasterdata#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#gpu_enabled BillingProjectMasterdata#gpu_enabled}
  */
  readonly gpuEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#id BillingProjectMasterdata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#number_of_endusers BillingProjectMasterdata#number_of_endusers}
  */
  readonly numberOfEndusers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#parent_id BillingProjectMasterdata#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#project_id BillingProjectMasterdata#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#project_name BillingProjectMasterdata#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#project_type BillingProjectMasterdata#project_type}
  */
  readonly projectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#region BillingProjectMasterdata#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_infrastructure_coordinator_email BillingProjectMasterdata#responsible_infrastructure_coordinator_email}
  */
  readonly responsibleInfrastructureCoordinatorEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_infrastructure_coordinator_id BillingProjectMasterdata#responsible_infrastructure_coordinator_id}
  */
  readonly responsibleInfrastructureCoordinatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_inventory_role_email BillingProjectMasterdata#responsible_inventory_role_email}
  */
  readonly responsibleInventoryRoleEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_inventory_role_id BillingProjectMasterdata#responsible_inventory_role_id}
  */
  readonly responsibleInventoryRoleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_operator_email BillingProjectMasterdata#responsible_operator_email}
  */
  readonly responsibleOperatorEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_operator_id BillingProjectMasterdata#responsible_operator_id}
  */
  readonly responsibleOperatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_primary_contact_email BillingProjectMasterdata#responsible_primary_contact_email}
  */
  readonly responsiblePrimaryContactEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#responsible_primary_contact_id BillingProjectMasterdata#responsible_primary_contact_id}
  */
  readonly responsiblePrimaryContactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#revenue_relevance BillingProjectMasterdata#revenue_relevance}
  */
  readonly revenueRelevance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#soft_license_mode BillingProjectMasterdata#soft_license_mode}
  */
  readonly softLicenseMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#type_of_data BillingProjectMasterdata#type_of_data}
  */
  readonly typeOfData?: string;
  /**
  * cost_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#cost_object BillingProjectMasterdata#cost_object}
  */
  readonly costObject?: BillingProjectMasterdataCostObject;
  /**
  * ext_certification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#ext_certification BillingProjectMasterdata#ext_certification}
  */
  readonly extCertification?: BillingProjectMasterdataExtCertification;
}
export interface BillingProjectMasterdataCostObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#inherited BillingProjectMasterdata#inherited}
  */
  readonly inherited?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#name BillingProjectMasterdata#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#type BillingProjectMasterdata#type}
  */
  readonly type?: string;
}

export function billingProjectMasterdataCostObjectToTerraform(struct?: BillingProjectMasterdataCostObjectOutputReference | BillingProjectMasterdataCostObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherited: cdktf.booleanToTerraform(struct!.inherited),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function billingProjectMasterdataCostObjectToHclTerraform(struct?: BillingProjectMasterdataCostObjectOutputReference | BillingProjectMasterdataCostObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inherited: {
      value: cdktf.booleanToHclTerraform(struct!.inherited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProjectMasterdataCostObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingProjectMasterdataCostObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inherited !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherited = this._inherited;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProjectMasterdataCostObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inherited = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inherited = value.inherited;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // inherited - computed: false, optional: true, required: false
  private _inherited?: boolean | cdktf.IResolvable; 
  public get inherited() {
    return this.getBooleanAttribute('inherited');
  }
  public set inherited(value: boolean | cdktf.IResolvable) {
    this._inherited = value;
  }
  public resetInherited() {
    this._inherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedInput() {
    return this._inherited;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface BillingProjectMasterdataExtCertification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#c5 BillingProjectMasterdata#c5}
  */
  readonly c5?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#iso BillingProjectMasterdata#iso}
  */
  readonly iso?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#pci BillingProjectMasterdata#pci}
  */
  readonly pci?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#soc1 BillingProjectMasterdata#soc1}
  */
  readonly soc1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#soc2 BillingProjectMasterdata#soc2}
  */
  readonly soc2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#sox BillingProjectMasterdata#sox}
  */
  readonly sox?: boolean | cdktf.IResolvable;
}

export function billingProjectMasterdataExtCertificationToTerraform(struct?: BillingProjectMasterdataExtCertificationOutputReference | BillingProjectMasterdataExtCertification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    c5: cdktf.booleanToTerraform(struct!.c5),
    iso: cdktf.booleanToTerraform(struct!.iso),
    pci: cdktf.booleanToTerraform(struct!.pci),
    soc1: cdktf.booleanToTerraform(struct!.soc1),
    soc2: cdktf.booleanToTerraform(struct!.soc2),
    sox: cdktf.booleanToTerraform(struct!.sox),
  }
}


export function billingProjectMasterdataExtCertificationToHclTerraform(struct?: BillingProjectMasterdataExtCertificationOutputReference | BillingProjectMasterdataExtCertification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    c5: {
      value: cdktf.booleanToHclTerraform(struct!.c5),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iso: {
      value: cdktf.booleanToHclTerraform(struct!.iso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pci: {
      value: cdktf.booleanToHclTerraform(struct!.pci),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soc1: {
      value: cdktf.booleanToHclTerraform(struct!.soc1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soc2: {
      value: cdktf.booleanToHclTerraform(struct!.soc2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sox: {
      value: cdktf.booleanToHclTerraform(struct!.sox),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProjectMasterdataExtCertificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingProjectMasterdataExtCertification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._c5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.c5 = this._c5;
    }
    if (this._iso !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso = this._iso;
    }
    if (this._pci !== undefined) {
      hasAnyValues = true;
      internalValueResult.pci = this._pci;
    }
    if (this._soc1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.soc1 = this._soc1;
    }
    if (this._soc2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.soc2 = this._soc2;
    }
    if (this._sox !== undefined) {
      hasAnyValues = true;
      internalValueResult.sox = this._sox;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProjectMasterdataExtCertification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._c5 = undefined;
      this._iso = undefined;
      this._pci = undefined;
      this._soc1 = undefined;
      this._soc2 = undefined;
      this._sox = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._c5 = value.c5;
      this._iso = value.iso;
      this._pci = value.pci;
      this._soc1 = value.soc1;
      this._soc2 = value.soc2;
      this._sox = value.sox;
    }
  }

  // c5 - computed: true, optional: true, required: false
  private _c5?: boolean | cdktf.IResolvable; 
  public get c5() {
    return this.getBooleanAttribute('c5');
  }
  public set c5(value: boolean | cdktf.IResolvable) {
    this._c5 = value;
  }
  public resetC5() {
    this._c5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c5Input() {
    return this._c5;
  }

  // iso - computed: true, optional: true, required: false
  private _iso?: boolean | cdktf.IResolvable; 
  public get iso() {
    return this.getBooleanAttribute('iso');
  }
  public set iso(value: boolean | cdktf.IResolvable) {
    this._iso = value;
  }
  public resetIso() {
    this._iso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoInput() {
    return this._iso;
  }

  // pci - computed: true, optional: true, required: false
  private _pci?: boolean | cdktf.IResolvable; 
  public get pci() {
    return this.getBooleanAttribute('pci');
  }
  public set pci(value: boolean | cdktf.IResolvable) {
    this._pci = value;
  }
  public resetPci() {
    this._pci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciInput() {
    return this._pci;
  }

  // soc1 - computed: true, optional: true, required: false
  private _soc1?: boolean | cdktf.IResolvable; 
  public get soc1() {
    return this.getBooleanAttribute('soc1');
  }
  public set soc1(value: boolean | cdktf.IResolvable) {
    this._soc1 = value;
  }
  public resetSoc1() {
    this._soc1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soc1Input() {
    return this._soc1;
  }

  // soc2 - computed: true, optional: true, required: false
  private _soc2?: boolean | cdktf.IResolvable; 
  public get soc2() {
    return this.getBooleanAttribute('soc2');
  }
  public set soc2(value: boolean | cdktf.IResolvable) {
    this._soc2 = value;
  }
  public resetSoc2() {
    this._soc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soc2Input() {
    return this._soc2;
  }

  // sox - computed: true, optional: true, required: false
  private _sox?: boolean | cdktf.IResolvable; 
  public get sox() {
    return this.getBooleanAttribute('sox');
  }
  public set sox(value: boolean | cdktf.IResolvable) {
    this._sox = value;
  }
  public resetSox() {
    this._sox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soxInput() {
    return this._sox;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata sci_billing_project_masterdata}
*/
export class BillingProjectMasterdata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_billing_project_masterdata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingProjectMasterdata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingProjectMasterdata to import
  * @param importFromId The id of the existing BillingProjectMasterdata that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingProjectMasterdata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_billing_project_masterdata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_project_masterdata sci_billing_project_masterdata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingProjectMasterdataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BillingProjectMasterdataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sci_billing_project_masterdata',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalInformation = config.additionalInformation;
    this._businessCriticality = config.businessCriticality;
    this._containsExternalCustomerData = config.containsExternalCustomerData;
    this._containsPiiDppHr = config.containsPiiDppHr;
    this._customer = config.customer;
    this._description = config.description;
    this._domainId = config.domainId;
    this._domainName = config.domainName;
    this._environment = config.environment;
    this._gpuEnabled = config.gpuEnabled;
    this._id = config.id;
    this._numberOfEndusers = config.numberOfEndusers;
    this._parentId = config.parentId;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._projectType = config.projectType;
    this._region = config.region;
    this._responsibleInfrastructureCoordinatorEmail = config.responsibleInfrastructureCoordinatorEmail;
    this._responsibleInfrastructureCoordinatorId = config.responsibleInfrastructureCoordinatorId;
    this._responsibleInventoryRoleEmail = config.responsibleInventoryRoleEmail;
    this._responsibleInventoryRoleId = config.responsibleInventoryRoleId;
    this._responsibleOperatorEmail = config.responsibleOperatorEmail;
    this._responsibleOperatorId = config.responsibleOperatorId;
    this._responsiblePrimaryContactEmail = config.responsiblePrimaryContactEmail;
    this._responsiblePrimaryContactId = config.responsiblePrimaryContactId;
    this._revenueRelevance = config.revenueRelevance;
    this._softLicenseMode = config.softLicenseMode;
    this._typeOfData = config.typeOfData;
    this._costObject.internalValue = config.costObject;
    this._extCertification.internalValue = config.extCertification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_information - computed: false, optional: true, required: false
  private _additionalInformation?: string; 
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }
  public set additionalInformation(value: string) {
    this._additionalInformation = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation;
  }

  // business_criticality - computed: false, optional: true, required: false
  private _businessCriticality?: string; 
  public get businessCriticality() {
    return this.getStringAttribute('business_criticality');
  }
  public set businessCriticality(value: string) {
    this._businessCriticality = value;
  }
  public resetBusinessCriticality() {
    this._businessCriticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessCriticalityInput() {
    return this._businessCriticality;
  }

  // changed_at - computed: true, optional: false, required: false
  public get changedAt() {
    return this.getStringAttribute('changed_at');
  }

  // changed_by - computed: true, optional: false, required: false
  public get changedBy() {
    return this.getStringAttribute('changed_by');
  }

  // collector - computed: true, optional: false, required: false
  public get collector() {
    return this.getStringAttribute('collector');
  }

  // contains_external_customer_data - computed: false, optional: true, required: false
  private _containsExternalCustomerData?: boolean | cdktf.IResolvable; 
  public get containsExternalCustomerData() {
    return this.getBooleanAttribute('contains_external_customer_data');
  }
  public set containsExternalCustomerData(value: boolean | cdktf.IResolvable) {
    this._containsExternalCustomerData = value;
  }
  public resetContainsExternalCustomerData() {
    this._containsExternalCustomerData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsExternalCustomerDataInput() {
    return this._containsExternalCustomerData;
  }

  // contains_pii_dpp_hr - computed: false, optional: true, required: false
  private _containsPiiDppHr?: boolean | cdktf.IResolvable; 
  public get containsPiiDppHr() {
    return this.getBooleanAttribute('contains_pii_dpp_hr');
  }
  public set containsPiiDppHr(value: boolean | cdktf.IResolvable) {
    this._containsPiiDppHr = value;
  }
  public resetContainsPiiDppHr() {
    this._containsPiiDppHr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsPiiDppHrInput() {
    return this._containsPiiDppHr;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer - computed: false, optional: true, required: false
  private _customer?: string; 
  public get customer() {
    return this.getStringAttribute('customer');
  }
  public set customer(value: string) {
    this._customer = value;
  }
  public resetCustomer() {
    this._customer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInput() {
    return this._customer;
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

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // gpu_enabled - computed: false, optional: true, required: false
  private _gpuEnabled?: boolean | cdktf.IResolvable; 
  public get gpuEnabled() {
    return this.getBooleanAttribute('gpu_enabled');
  }
  public set gpuEnabled(value: boolean | cdktf.IResolvable) {
    this._gpuEnabled = value;
  }
  public resetGpuEnabled() {
    this._gpuEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuEnabledInput() {
    return this._gpuEnabled;
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

  // is_complete - computed: true, optional: false, required: false
  public get isComplete() {
    return this.getBooleanAttribute('is_complete');
  }

  // missing_attributes - computed: true, optional: false, required: false
  public get missingAttributes() {
    return this.getStringAttribute('missing_attributes');
  }

  // number_of_endusers - computed: false, optional: true, required: false
  private _numberOfEndusers?: number; 
  public get numberOfEndusers() {
    return this.getNumberAttribute('number_of_endusers');
  }
  public set numberOfEndusers(value: number) {
    this._numberOfEndusers = value;
  }
  public resetNumberOfEndusers() {
    this._numberOfEndusers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEndusersInput() {
    return this._numberOfEndusers;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_type - computed: true, optional: true, required: false
  private _projectType?: string; 
  public get projectType() {
    return this.getStringAttribute('project_type');
  }
  public set projectType(value: string) {
    this._projectType = value;
  }
  public resetProjectType() {
    this._projectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectTypeInput() {
    return this._projectType;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // responsible_infrastructure_coordinator_email - computed: false, optional: true, required: false
  private _responsibleInfrastructureCoordinatorEmail?: string; 
  public get responsibleInfrastructureCoordinatorEmail() {
    return this.getStringAttribute('responsible_infrastructure_coordinator_email');
  }
  public set responsibleInfrastructureCoordinatorEmail(value: string) {
    this._responsibleInfrastructureCoordinatorEmail = value;
  }
  public resetResponsibleInfrastructureCoordinatorEmail() {
    this._responsibleInfrastructureCoordinatorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleInfrastructureCoordinatorEmailInput() {
    return this._responsibleInfrastructureCoordinatorEmail;
  }

  // responsible_infrastructure_coordinator_id - computed: false, optional: true, required: false
  private _responsibleInfrastructureCoordinatorId?: string; 
  public get responsibleInfrastructureCoordinatorId() {
    return this.getStringAttribute('responsible_infrastructure_coordinator_id');
  }
  public set responsibleInfrastructureCoordinatorId(value: string) {
    this._responsibleInfrastructureCoordinatorId = value;
  }
  public resetResponsibleInfrastructureCoordinatorId() {
    this._responsibleInfrastructureCoordinatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleInfrastructureCoordinatorIdInput() {
    return this._responsibleInfrastructureCoordinatorId;
  }

  // responsible_inventory_role_email - computed: false, optional: true, required: false
  private _responsibleInventoryRoleEmail?: string; 
  public get responsibleInventoryRoleEmail() {
    return this.getStringAttribute('responsible_inventory_role_email');
  }
  public set responsibleInventoryRoleEmail(value: string) {
    this._responsibleInventoryRoleEmail = value;
  }
  public resetResponsibleInventoryRoleEmail() {
    this._responsibleInventoryRoleEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleInventoryRoleEmailInput() {
    return this._responsibleInventoryRoleEmail;
  }

  // responsible_inventory_role_id - computed: false, optional: true, required: false
  private _responsibleInventoryRoleId?: string; 
  public get responsibleInventoryRoleId() {
    return this.getStringAttribute('responsible_inventory_role_id');
  }
  public set responsibleInventoryRoleId(value: string) {
    this._responsibleInventoryRoleId = value;
  }
  public resetResponsibleInventoryRoleId() {
    this._responsibleInventoryRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleInventoryRoleIdInput() {
    return this._responsibleInventoryRoleId;
  }

  // responsible_operator_email - computed: false, optional: true, required: false
  private _responsibleOperatorEmail?: string; 
  public get responsibleOperatorEmail() {
    return this.getStringAttribute('responsible_operator_email');
  }
  public set responsibleOperatorEmail(value: string) {
    this._responsibleOperatorEmail = value;
  }
  public resetResponsibleOperatorEmail() {
    this._responsibleOperatorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleOperatorEmailInput() {
    return this._responsibleOperatorEmail;
  }

  // responsible_operator_id - computed: false, optional: true, required: false
  private _responsibleOperatorId?: string; 
  public get responsibleOperatorId() {
    return this.getStringAttribute('responsible_operator_id');
  }
  public set responsibleOperatorId(value: string) {
    this._responsibleOperatorId = value;
  }
  public resetResponsibleOperatorId() {
    this._responsibleOperatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleOperatorIdInput() {
    return this._responsibleOperatorId;
  }

  // responsible_primary_contact_email - computed: false, optional: true, required: false
  private _responsiblePrimaryContactEmail?: string; 
  public get responsiblePrimaryContactEmail() {
    return this.getStringAttribute('responsible_primary_contact_email');
  }
  public set responsiblePrimaryContactEmail(value: string) {
    this._responsiblePrimaryContactEmail = value;
  }
  public resetResponsiblePrimaryContactEmail() {
    this._responsiblePrimaryContactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsiblePrimaryContactEmailInput() {
    return this._responsiblePrimaryContactEmail;
  }

  // responsible_primary_contact_id - computed: false, optional: true, required: false
  private _responsiblePrimaryContactId?: string; 
  public get responsiblePrimaryContactId() {
    return this.getStringAttribute('responsible_primary_contact_id');
  }
  public set responsiblePrimaryContactId(value: string) {
    this._responsiblePrimaryContactId = value;
  }
  public resetResponsiblePrimaryContactId() {
    this._responsiblePrimaryContactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsiblePrimaryContactIdInput() {
    return this._responsiblePrimaryContactId;
  }

  // revenue_relevance - computed: false, optional: true, required: false
  private _revenueRelevance?: string; 
  public get revenueRelevance() {
    return this.getStringAttribute('revenue_relevance');
  }
  public set revenueRelevance(value: string) {
    this._revenueRelevance = value;
  }
  public resetRevenueRelevance() {
    this._revenueRelevance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revenueRelevanceInput() {
    return this._revenueRelevance;
  }

  // soft_license_mode - computed: false, optional: true, required: false
  private _softLicenseMode?: string; 
  public get softLicenseMode() {
    return this.getStringAttribute('soft_license_mode');
  }
  public set softLicenseMode(value: string) {
    this._softLicenseMode = value;
  }
  public resetSoftLicenseMode() {
    this._softLicenseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softLicenseModeInput() {
    return this._softLicenseMode;
  }

  // type_of_data - computed: false, optional: true, required: false
  private _typeOfData?: string; 
  public get typeOfData() {
    return this.getStringAttribute('type_of_data');
  }
  public set typeOfData(value: string) {
    this._typeOfData = value;
  }
  public resetTypeOfData() {
    this._typeOfData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfDataInput() {
    return this._typeOfData;
  }

  // cost_object - computed: false, optional: true, required: false
  private _costObject = new BillingProjectMasterdataCostObjectOutputReference(this, "cost_object");
  public get costObject() {
    return this._costObject;
  }
  public putCostObject(value: BillingProjectMasterdataCostObject) {
    this._costObject.internalValue = value;
  }
  public resetCostObject() {
    this._costObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costObjectInput() {
    return this._costObject.internalValue;
  }

  // ext_certification - computed: false, optional: true, required: false
  private _extCertification = new BillingProjectMasterdataExtCertificationOutputReference(this, "ext_certification");
  public get extCertification() {
    return this._extCertification;
  }
  public putExtCertification(value: BillingProjectMasterdataExtCertification) {
    this._extCertification.internalValue = value;
  }
  public resetExtCertification() {
    this._extCertification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extCertificationInput() {
    return this._extCertification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_information: cdktf.stringToTerraform(this._additionalInformation),
      business_criticality: cdktf.stringToTerraform(this._businessCriticality),
      contains_external_customer_data: cdktf.booleanToTerraform(this._containsExternalCustomerData),
      contains_pii_dpp_hr: cdktf.booleanToTerraform(this._containsPiiDppHr),
      customer: cdktf.stringToTerraform(this._customer),
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      environment: cdktf.stringToTerraform(this._environment),
      gpu_enabled: cdktf.booleanToTerraform(this._gpuEnabled),
      id: cdktf.stringToTerraform(this._id),
      number_of_endusers: cdktf.numberToTerraform(this._numberOfEndusers),
      parent_id: cdktf.stringToTerraform(this._parentId),
      project_id: cdktf.stringToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      project_type: cdktf.stringToTerraform(this._projectType),
      region: cdktf.stringToTerraform(this._region),
      responsible_infrastructure_coordinator_email: cdktf.stringToTerraform(this._responsibleInfrastructureCoordinatorEmail),
      responsible_infrastructure_coordinator_id: cdktf.stringToTerraform(this._responsibleInfrastructureCoordinatorId),
      responsible_inventory_role_email: cdktf.stringToTerraform(this._responsibleInventoryRoleEmail),
      responsible_inventory_role_id: cdktf.stringToTerraform(this._responsibleInventoryRoleId),
      responsible_operator_email: cdktf.stringToTerraform(this._responsibleOperatorEmail),
      responsible_operator_id: cdktf.stringToTerraform(this._responsibleOperatorId),
      responsible_primary_contact_email: cdktf.stringToTerraform(this._responsiblePrimaryContactEmail),
      responsible_primary_contact_id: cdktf.stringToTerraform(this._responsiblePrimaryContactId),
      revenue_relevance: cdktf.stringToTerraform(this._revenueRelevance),
      soft_license_mode: cdktf.stringToTerraform(this._softLicenseMode),
      type_of_data: cdktf.stringToTerraform(this._typeOfData),
      cost_object: billingProjectMasterdataCostObjectToTerraform(this._costObject.internalValue),
      ext_certification: billingProjectMasterdataExtCertificationToTerraform(this._extCertification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_information: {
        value: cdktf.stringToHclTerraform(this._additionalInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_criticality: {
        value: cdktf.stringToHclTerraform(this._businessCriticality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contains_external_customer_data: {
        value: cdktf.booleanToHclTerraform(this._containsExternalCustomerData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contains_pii_dpp_hr: {
        value: cdktf.booleanToHclTerraform(this._containsPiiDppHr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customer: {
        value: cdktf.stringToHclTerraform(this._customer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_enabled: {
        value: cdktf.booleanToHclTerraform(this._gpuEnabled),
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
      number_of_endusers: {
        value: cdktf.numberToHclTerraform(this._numberOfEndusers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_type: {
        value: cdktf.stringToHclTerraform(this._projectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_infrastructure_coordinator_email: {
        value: cdktf.stringToHclTerraform(this._responsibleInfrastructureCoordinatorEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_infrastructure_coordinator_id: {
        value: cdktf.stringToHclTerraform(this._responsibleInfrastructureCoordinatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_inventory_role_email: {
        value: cdktf.stringToHclTerraform(this._responsibleInventoryRoleEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_inventory_role_id: {
        value: cdktf.stringToHclTerraform(this._responsibleInventoryRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_operator_email: {
        value: cdktf.stringToHclTerraform(this._responsibleOperatorEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_operator_id: {
        value: cdktf.stringToHclTerraform(this._responsibleOperatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_primary_contact_email: {
        value: cdktf.stringToHclTerraform(this._responsiblePrimaryContactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_primary_contact_id: {
        value: cdktf.stringToHclTerraform(this._responsiblePrimaryContactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revenue_relevance: {
        value: cdktf.stringToHclTerraform(this._revenueRelevance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_license_mode: {
        value: cdktf.stringToHclTerraform(this._softLicenseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_of_data: {
        value: cdktf.stringToHclTerraform(this._typeOfData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_object: {
        value: billingProjectMasterdataCostObjectToHclTerraform(this._costObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingProjectMasterdataCostObjectList",
      },
      ext_certification: {
        value: billingProjectMasterdataExtCertificationToHclTerraform(this._extCertification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingProjectMasterdataExtCertificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
