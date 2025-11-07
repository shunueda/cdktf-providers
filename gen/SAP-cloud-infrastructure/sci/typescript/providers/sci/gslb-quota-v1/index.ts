// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbQuotaV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#datacenter GslbQuotaV1#datacenter}
  */
  readonly datacenter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#domain GslbQuotaV1#domain}
  */
  readonly domain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#domain_akamai GslbQuotaV1#domain_akamai}
  */
  readonly domainAkamai?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#domain_f5 GslbQuotaV1#domain_f5}
  */
  readonly domainF5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#id GslbQuotaV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#in_use_datacenter GslbQuotaV1#in_use_datacenter}
  */
  readonly inUseDatacenter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#in_use_domain GslbQuotaV1#in_use_domain}
  */
  readonly inUseDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#in_use_domain_akamai GslbQuotaV1#in_use_domain_akamai}
  */
  readonly inUseDomainAkamai?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#in_use_domain_f5 GslbQuotaV1#in_use_domain_f5}
  */
  readonly inUseDomainF5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#in_use_member GslbQuotaV1#in_use_member}
  */
  readonly inUseMember?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#in_use_monitor GslbQuotaV1#in_use_monitor}
  */
  readonly inUseMonitor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#in_use_pool GslbQuotaV1#in_use_pool}
  */
  readonly inUsePool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#member GslbQuotaV1#member}
  */
  readonly member?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#monitor GslbQuotaV1#monitor}
  */
  readonly monitor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#pool GslbQuotaV1#pool}
  */
  readonly pool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#project_id GslbQuotaV1#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#region GslbQuotaV1#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1 sci_gslb_quota_v1}
*/
export class GslbQuotaV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_gslb_quota_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbQuotaV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbQuotaV1 to import
  * @param importFromId The id of the existing GslbQuotaV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbQuotaV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_gslb_quota_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/gslb_quota_v1 sci_gslb_quota_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbQuotaV1Config
  */
  public constructor(scope: Construct, id: string, config: GslbQuotaV1Config) {
    super(scope, id, {
      terraformResourceType: 'sci_gslb_quota_v1',
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
    this._datacenter = config.datacenter;
    this._domain = config.domain;
    this._domainAkamai = config.domainAkamai;
    this._domainF5 = config.domainF5;
    this._id = config.id;
    this._inUseDatacenter = config.inUseDatacenter;
    this._inUseDomain = config.inUseDomain;
    this._inUseDomainAkamai = config.inUseDomainAkamai;
    this._inUseDomainF5 = config.inUseDomainF5;
    this._inUseMember = config.inUseMember;
    this._inUseMonitor = config.inUseMonitor;
    this._inUsePool = config.inUsePool;
    this._member = config.member;
    this._monitor = config.monitor;
    this._pool = config.pool;
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: number; 
  public get datacenter() {
    return this.getNumberAttribute('datacenter');
  }
  public set datacenter(value: number) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: number; 
  public get domain() {
    return this.getNumberAttribute('domain');
  }
  public set domain(value: number) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_akamai - computed: true, optional: true, required: false
  private _domainAkamai?: number; 
  public get domainAkamai() {
    return this.getNumberAttribute('domain_akamai');
  }
  public set domainAkamai(value: number) {
    this._domainAkamai = value;
  }
  public resetDomainAkamai() {
    this._domainAkamai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAkamaiInput() {
    return this._domainAkamai;
  }

  // domain_f5 - computed: true, optional: true, required: false
  private _domainF5?: number; 
  public get domainF5() {
    return this.getNumberAttribute('domain_f5');
  }
  public set domainF5(value: number) {
    this._domainF5 = value;
  }
  public resetDomainF5() {
    this._domainF5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainF5Input() {
    return this._domainF5;
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

  // in_use_datacenter - computed: true, optional: true, required: false
  private _inUseDatacenter?: number; 
  public get inUseDatacenter() {
    return this.getNumberAttribute('in_use_datacenter');
  }
  public set inUseDatacenter(value: number) {
    this._inUseDatacenter = value;
  }
  public resetInUseDatacenter() {
    this._inUseDatacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseDatacenterInput() {
    return this._inUseDatacenter;
  }

  // in_use_domain - computed: true, optional: true, required: false
  private _inUseDomain?: number; 
  public get inUseDomain() {
    return this.getNumberAttribute('in_use_domain');
  }
  public set inUseDomain(value: number) {
    this._inUseDomain = value;
  }
  public resetInUseDomain() {
    this._inUseDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseDomainInput() {
    return this._inUseDomain;
  }

  // in_use_domain_akamai - computed: true, optional: true, required: false
  private _inUseDomainAkamai?: number; 
  public get inUseDomainAkamai() {
    return this.getNumberAttribute('in_use_domain_akamai');
  }
  public set inUseDomainAkamai(value: number) {
    this._inUseDomainAkamai = value;
  }
  public resetInUseDomainAkamai() {
    this._inUseDomainAkamai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseDomainAkamaiInput() {
    return this._inUseDomainAkamai;
  }

  // in_use_domain_f5 - computed: true, optional: true, required: false
  private _inUseDomainF5?: number; 
  public get inUseDomainF5() {
    return this.getNumberAttribute('in_use_domain_f5');
  }
  public set inUseDomainF5(value: number) {
    this._inUseDomainF5 = value;
  }
  public resetInUseDomainF5() {
    this._inUseDomainF5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseDomainF5Input() {
    return this._inUseDomainF5;
  }

  // in_use_member - computed: true, optional: true, required: false
  private _inUseMember?: number; 
  public get inUseMember() {
    return this.getNumberAttribute('in_use_member');
  }
  public set inUseMember(value: number) {
    this._inUseMember = value;
  }
  public resetInUseMember() {
    this._inUseMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseMemberInput() {
    return this._inUseMember;
  }

  // in_use_monitor - computed: true, optional: true, required: false
  private _inUseMonitor?: number; 
  public get inUseMonitor() {
    return this.getNumberAttribute('in_use_monitor');
  }
  public set inUseMonitor(value: number) {
    this._inUseMonitor = value;
  }
  public resetInUseMonitor() {
    this._inUseMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseMonitorInput() {
    return this._inUseMonitor;
  }

  // in_use_pool - computed: true, optional: true, required: false
  private _inUsePool?: number; 
  public get inUsePool() {
    return this.getNumberAttribute('in_use_pool');
  }
  public set inUsePool(value: number) {
    this._inUsePool = value;
  }
  public resetInUsePool() {
    this._inUsePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUsePoolInput() {
    return this._inUsePool;
  }

  // member - computed: true, optional: true, required: false
  private _member?: number; 
  public get member() {
    return this.getNumberAttribute('member');
  }
  public set member(value: number) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: number; 
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }
  public set monitor(value: number) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: number; 
  public get pool() {
    return this.getNumberAttribute('pool');
  }
  public set pool(value: number) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.numberToTerraform(this._datacenter),
      domain: cdktf.numberToTerraform(this._domain),
      domain_akamai: cdktf.numberToTerraform(this._domainAkamai),
      domain_f5: cdktf.numberToTerraform(this._domainF5),
      id: cdktf.stringToTerraform(this._id),
      in_use_datacenter: cdktf.numberToTerraform(this._inUseDatacenter),
      in_use_domain: cdktf.numberToTerraform(this._inUseDomain),
      in_use_domain_akamai: cdktf.numberToTerraform(this._inUseDomainAkamai),
      in_use_domain_f5: cdktf.numberToTerraform(this._inUseDomainF5),
      in_use_member: cdktf.numberToTerraform(this._inUseMember),
      in_use_monitor: cdktf.numberToTerraform(this._inUseMonitor),
      in_use_pool: cdktf.numberToTerraform(this._inUsePool),
      member: cdktf.numberToTerraform(this._member),
      monitor: cdktf.numberToTerraform(this._monitor),
      pool: cdktf.numberToTerraform(this._pool),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter: {
        value: cdktf.numberToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.numberToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_akamai: {
        value: cdktf.numberToHclTerraform(this._domainAkamai),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_f5: {
        value: cdktf.numberToHclTerraform(this._domainF5),
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
      in_use_datacenter: {
        value: cdktf.numberToHclTerraform(this._inUseDatacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_use_domain: {
        value: cdktf.numberToHclTerraform(this._inUseDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_use_domain_akamai: {
        value: cdktf.numberToHclTerraform(this._inUseDomainAkamai),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_use_domain_f5: {
        value: cdktf.numberToHclTerraform(this._inUseDomainF5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_use_member: {
        value: cdktf.numberToHclTerraform(this._inUseMember),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_use_monitor: {
        value: cdktf.numberToHclTerraform(this._inUseMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_use_pool: {
        value: cdktf.numberToHclTerraform(this._inUsePool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member: {
        value: cdktf.numberToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor: {
        value: cdktf.numberToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool: {
        value: cdktf.numberToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
